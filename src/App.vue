<template>
<nav>
 <ul class="nav nav-pills nav-justified">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item" v-if="!userAuth">
      <router-link class="nav-link" to="/login" >Login</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/employee/register" v-if="!userAuth">Singup</router-link>
    </li>
    <li v-if="userAuth">
  <router-link class="nav-link" to="/employee" >Employee</router-link>
    </li>
      <li class="nav-item" v-if="userAuth">
      <p class="nav-link btn" @click="logout" >Logout</p>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about" v-if="!userAuth">About</router-link>
    </li>
  </ul>
  </nav>
  
  <router-view/>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
  name:'App',
 computed:{
...mapGetters(['userAuth'])
    },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      localStorage.clear();
    }
  }
}

</script>
<style scoped >
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d4074;
  letter-spacing: 5px;
  font-size: larger;
  font-weight: bolder;

}

nav ,p{
  padding: 10px;
  background-image: linear-gradient(to right,#eaeaf0,#e8eaf0);

}

nav a ,p{
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active ,p:active{
  color: #42b983;
}
</style>
