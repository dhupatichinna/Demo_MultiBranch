<template>
<h1 id="h1" v-if="!userAuth">Welcome To Prakat Solutions Home Page</h1>
  <div class="container"  v-if="userAuth">
  <h1>Welcome To Prakat Solutions</h1>
  <h4> List of Employees</h4>
<table class="table table-dark">
    <thead>
      <tr>
         <th>id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="employeList in empList" :key="employeList.id">
        <td>{{employeList.id}}</td>
        <td>{{employeList.firstname}}</td>
        <td>{{employeList.lastname}}</td>
        <td>{{employeList.email}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  data(){
    return{
      empList:[]
    }
  },
computed:{
 ...mapGetters(['userAuth'])
},
  async mounted(){

    let result= await axios.get("http://localhost:8093/Employee/getEmployees")
    this.empList=result.data
    
  }
 
}
</script>
<style scoped>
#h1{
    color: rgb(10, 5, 59);
    margin-left: 480px;
    margin-top: 30px;
}
div h1{
    color: rgb(10, 5, 59);
    margin-left: 300px;
    margin-top: 30px;
}
h4{
  margin-top: 10px;
  color: rgb(11, 11, 49);
  text-align: center;
}
</style>