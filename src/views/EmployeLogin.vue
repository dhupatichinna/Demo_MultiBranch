<template>
<div class="card">
    <h1>Employe Login</h1>
  <div class="card-body">
   <div class="container"></div>
 <div class="input-group input-group-lg mb-5">
  <span class="input-group-text" id="inputGroup-sizing-lg">Email Id</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="email">
</div>
<div class="input-group input-group-lg mb-5">
  <span class="input-group-text" id="inputGroup-sizing-lg">Password</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="password">
</div>
<button class="btn btn-dark " @click="login">Login</button>
  </div>
</div>

</template>
<script>
import axios from 'axios';
export default{
  name:'login',
  data(){
    return{
      email:"",
      password:"",
      

    }
  },
  methods:{
    async login(){
      let Employe_deatils= await axios.get("http://localhost:8093/Employee/login/"+this.email+"/"+this.password)
      console.log(Employe_deatils.data);
      console.log("Successfully login");
        
        if(Employe_deatils.status==200 ){
          localStorage.setItem('Employe_data',JSON.stringify(Employe_deatils.data))
          this.$router.push('/')
          this.$store.dispatch('login')
        }
    }

  }
}

</script>
<style scoped>
.card{
      width: 700px;
    background-color: rgb(115, 184, 245);
    outline: none;
    border:5px solid#eff0ed;
    float: right;
    padding: 0px;
    margin: 30px 480px;
    border-radius: 20px;
    box-shadow: 0px 2px 8px 6px rgba(0,0,0,0.2);
}
span{
    color: rgb(13, 17, 20);
     background-image: linear-gradient(to right, rgba(102, 172, 243, 0.4),rgba(39, 109, 179, 0.2),rgba(218, 229, 240, 0.4));
    width: 150px;
   
   
}
h1{
    color: rgb(57, 63, 40);
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 3px;
    padding: 20px;
}
input{
    color: rgb(26, 154, 245);
     background-image: linear-gradient(to right, rgba(102, 172, 243, 0.4),rgba(39, 109, 179, 0.2),rgba(218, 229, 240, 0.4));
   
}
input:focus{
     background-color: rgb(148, 191, 230);
     border:3px solid#eff0ed;
     color:#1a1f12;
     font-size: 20px;
}
button{
    width: 250px;
    font-size: 30px;
    height: 50px;
     border:3px solid#eff0ed;
     color: #eff0ed;
     border-radius: 20px;
     font-weight: bold;
     text-align: center;
     padding-bottom: 50px;
     margin-left: 200px;

}
</style>