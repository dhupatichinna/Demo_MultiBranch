<template>
 <div class="container"  v-if="userAuth">
  <h2>Employee Update details</h2>

     <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="firstname" placeholder="Enter firstname" name="firstname" v-model="firstname">
      <label for="firstname">First Name</label>
    </div>
     <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="lastname" placeholder="Enter lastname" name="lastname" v-model="lastname">
      <label for="lastname">last Name</label>
    </div>
    <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" v-model="email">
      <label for="lastname">Email</label>
    </div>
   
    <button type="submit" @click="onUpdate" class="btn btn-primary">Submit</button>
 
 </div>

</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {

    name:'Upadate',
    data(){
        return{
          
             firstname: "",
            lastname: "",
            email:"",
            
        }
    },
  computed:{
...mapGetters(['userAuth'])
    },
 async   mounted(){
   
   let EmployeeData = await axios.get("http://localhost:8093/Employee/getEmployee/"+this.$route.params.id)
      
      if(EmployeeData.status == 200){

        this.firstname=EmployeeData.data.firstname
        this.lastname=EmployeeData.data.firstname
        this.email=EmployeeData.data.email
      }
    },
methods:{
  async onUpdate(){
    let EmployeUpadte= await axios.put("http://localhost:8093/Employee/update/"+this.$route.params.id,{
     
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email
    
    })
    console.log(EmployeUpadte.status)
    if(EmployeUpadte.status == 200){
   this.$router.push('/employee')
    }
  }
},

}
</script>
<style scoped>
.container{
  width: 700px;
  margin-top: 30px;
  margin-left: 500px;
  border: 2px solid rgb(224, 236, 212);
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 4px 8px rgba(0,0,0,0.56);
  border-radius: 10px;
}
button{
  width:250px;
  padding: 15px;
  font-size: 20px;
  margin-left: 160px;
}
</style>