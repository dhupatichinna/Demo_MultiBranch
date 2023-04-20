<template>

<div class="container mt-3">
 
  <div class="card">
    <div class="card-header">User Login</div>
    <div class="card-body">
        
        <div class="mb-3 mt-3">
    <label  class="form-label">Email</label>
    <input type="text" class="form-control" placeholder="Enter Email" v-model="email" required >
  </div>
  <div class="mb-3 mt-3">
    <label  class="form-label">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" v-model="password" required >
  </div>
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox" name="remember"> Remember me
    </label>
  </div>
  <button type="submit" @click="login" class="btn">Login</button>

    </div> 
    <div class="card-footer"><router-link to="/singup" style="color: #e2e9f7;">Singup Here</router-link></div>
  </div>
</div>
</template>
<script>
import axios from 'axios';
export default{
  name:'Login',
  data(){
    return{
      email:"",
      password:"",
      

    }
  },
  methods:{
    async login(){
      let user_deatils= await axios.get("http://localhost:8093/Employee/login/"+this.email+"/"+this.password)
      console.log(user_deatils);
      console.log("Successfully login");
        if (user_deatils.status == 200 && user_deatils.data.length>0) {
               localStorage.setItem("user_deatils",JSON.stringify(user_deatils.data))
               console.log("Successfully login");
                localStorage.clear();
              this.$router.push('/')
            } 
    }

  }
}

</script>
<style scoped>
.card{
    width: 350px;
    
}
.card-header,.card-footer{
   color: #e2e9f7;
   background-color: #415d97;
}
button{
    width: 150px;
    height: 50px;
    background-color: #415d97 ;
    color: #e2e9f7;
    font-weight: 700;
    letter-spacing: 5px;
    border-radius: 10px;
   font-size: 17px;
}
button:hover{
     background-color: #24417a ;
     color: #bccff5;
}

</style>