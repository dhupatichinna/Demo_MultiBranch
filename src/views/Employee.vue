<template>
<div class="container"  v-if="userAuth">
    <router-link id="router" class="btn btn-primary" to="/employee/register">Add Employees</router-link>
    
    <table class="table table-dark">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employeList in empList" :key="employeList.id">
                <td>{{employeList.id}}</td>
                <td>{{employeList.firstname}}</td>
                <td>{{employeList.lastname}}</td>
                <td>{{employeList.email}}</td>
                <td>
                    <button class="btn btn-success">
                        <router-link  id="but" :to="'/employee/update/'+employeList.id">Update</router-link>
                    </button>
                    <button class="btn btn-danger" id="but"><router-link  :to="'/employee/delete/'+employeList.id">Delete</router-link></button>
  

                </td>

            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import Dialog from '../UI/Dialog.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: 'HomeView',
    compilerOptions:{
      Dialog
    },
    data() {
        return {
            empList: [],
            showDialogUser: true,
        }
    },
    async mounted() {
        this.onLoadingData();
    },
    computed:{
...mapGetters(['userAuth'])
    },
    methods: {
        async onDelete(id) {
            let deleteEmploye = await axios.delete("http://localhost:8093/Employee/delete/" + id);
            if (deleteEmploye.status == 200) {
                this.onLoadingData();
                this.$router.push('/employee')
                console.log("Successfully deleted");
                showDialogUser = false;
            }
        },
        async onLoadingData() {

            let result = await axios.get("http://localhost:8093/Employee/getEmployees")
            this.empList = result.data
        }
    },
    cancel() {
        console.log('cancel');
        this.showDialogUser = false;
    }
}
</script>

<style scoped>
#but{
   color: white;
  

}
button{
    margin-left: 20px;
}

button:hover {
    
    font-size: large;

}

.container {
    font-size: medium;

}
#router{
    margin-top: 10px;
}
table{
    margin-top: 10px;
    font-size: 25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
</style>
