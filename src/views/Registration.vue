<template>
 <div class="container">
 
  <div class="alert alert-danger" v-if="valid" v-for="errors in error" :key="errors.id">
  <p>{{errors}}</p>
  </div>
    <h2>Employee Registration</h2><hr>
 
  <form method="post" @submit.prevent="onAdd">
     <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="firstname" placeholder="Enter firstname" name="firstname" v-model="firstname">
      <label for="firstname">First Name</label>
    </div>
     <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="lastname" placeholder="Enter lastname" name="lastname" v-model="lastname">
      <label for="lastname">Last Name</label>
    </div>
    <div class="form-floating mb-3 mt-3">
      <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" v-model="email">
      <label for="email">Email</label>
    </div>
    <div class="form-floating mt-3 mb-3">
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" v-model="password">
      <label for="pwd">Password</label>
    </div>
      <div class="form-floating mt-3 mb-3">
      <input type="text" class="form-control" id="conpwd" placeholder="Enter confirmpassword" name="conpswd" v-model="confirm_password">
      <label for="conpwd">Confirm Password</label>
    </div>
    
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
 </div>
</template>
<script>

import axios from 'axios'
export default {

    name:'Registration',
    data(){
        return{
           firstname: "",
            lastname: "",
            email: "",
            password:"",
            confirm_password:"",
            error:[],
            valid:false
        }
    },
    computed:{
        getCurrentUser(){
            return this.$store.getters.getCurrentEmploye;
        },
        setCurrentUser(){
            return this.$store.getters.setCurrentEmploye;
        }
    },
    methods:{
     
      
      async  onAdd(){
              const Employee_details = {
            
                firstname: this.firstname,
                lastname: this.lastname,
                password:this.password,
                email: this.email,
               
                
            }
            if(this.password!=this.confirm_password){
       this.error.push("did not match password and confirm_password");
         }
            if(this.firstname===''){
              this.error.push("firstname required");
            }
            if(this.password===''){
              this.error.push("password required");
            }
            if(this.confirm_password===''){
              this.error.push("confirm password required");
            }
            if(this.lastname===''){
              this.error.push("lastname required");
            }
            if(this.email===''){
              this.error.push("email  required");
            }
          /*  if(this.password.length>6 || this.confirm_password.length>6){
                this.error.push("password and confirm length should be above 6");
            } */
          if(this.error.length>0){
            
            this.valid=true;
          }
          else{
            let employee_deatils= await axios.post("http://localhost:8093/Employee/addEmployees", Employee_details)
                  
                  if(employee_deatils.status==200){
                  
                     this.$router.push('/employee')
                  console.log("Successfully submitted");
                  alert("Successfully submitted");
                  console.log(employee_deatils)
                  }
                  else{
                        this.error("Employee Already existed")
                        this.valid=true;
                  }
                  if(employee_deatils.response.status==400){
                  
               
                  alert(" not Successfully submitted");
                  console.log(employee_deatils.data)
                  }
          }
        },
        

      /* async onRegisterEmploye(){
           console.log('action on Singup')
          const employe ={
            
                firstname: this.firstname,
                lastname: this.lastname,
                password:this.password,
                email: this.email,
                confirm_password:this.confirm_password
          }
         this.$store.dispatch({type:'registerEmploye',
         employe:employe}).then(() => {
          

             this.$router.push('/')
        


         })
        }  */

   

    } ,
    /* async singup(){
             
              console.log(" before calling dispatch");
            //this.$store.dispatch('user/signUp',this.user);
            const employe ={
            
                firstname: this.firstname,
                lastname: this.lastname,
                password:this.password,
                email: this.email,
                
          }
            this.$store.dispatch({
                type: 'signUp',
                employe : employe
            }).then( () => {
            
                //console.log (response);
                console.log ("rerturned into component !!")
                console.log("curent user is ", this.getCurrentUser);
                console.log ("checking with user name ", this.user.name)
                if(this.getCurrentEmploye == employe.name){
                   
                    this.setCurrentUser;
                    this.$router.push('/login')
                    
                }
            });
            
    }, */
      /*  mounted(){
        //let user = localStorage.getItem('user-Info')
        if(this.getCurrentEmploye){
            console.log("User already signed in..so redirecting to HomePage")
            this.$router.push('/')
        } */
    }
    

</script>
<style scoped>
.container{
  width:700px;
  margin-top: 30px;
  margin-left: 510px;
  padding: 20px;
  box-shadow: 0px 2px 12px 8px rgba(0, 0, 0, 0.7);
   background-image: linear-gradient(to right, rgba(102, 172, 243, 0.4),rgba(39, 109, 179, 0.2),rgba(218, 229, 240, 0.4));
  border-radius: 10px;
  
}
.card{
    
    background-image: linear-gradient(to right, rgba(102, 172, 243, 0.4),rgba(39, 109, 179, 0.2),rgba(218, 229, 240, 0.4));
     border: none;
     font-weight: 600;
     font-size: 15px;
     font-family: Georgia, 'Times New Roman', Times, serif;
    
}
input{
    border-radius: 10px;
    background-color: rgb(148, 191, 230);
     border:3px solid#d9f073;
     height: 50px;

}input:focus{
     background-color: rgb(148, 191, 230);
     border:3px solid#eff0ed;
     color:#080c00;
     font-size: 20px;
}
.btn{
    width:250px;
    height: 70px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    color: #e6e4cd;
    background-image: linear-gradient(to right,#754fce,#2768df,#1328e7);
    border:3px solid#d9f073;
    border-radius: 10px;
    margin-left: 220px;
    
}
.btn:hover{
  background-image: linear-gradient(to right,#5527c0,#2b67df,#8b96f1);
  font-size:25px ;
}
h2{
  color: #3c61c5;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 40px;
  padding: 0px;
  

}
hr{
  color: #6112f5;
}
</style>