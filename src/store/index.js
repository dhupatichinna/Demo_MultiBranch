import { createStore } from "vuex";
import EmployeStore from '../store/Modules/Employe/index.js'
import EmployeModule from '../store/Modules/EmployeModule/index.js'
import axios from "axios";
const store= createStore({
  state: {
    isLoggin:false,
   employeDetails:null,
   valid:false,
   error:[]
  },
 
  getters: {
    getEmployees(state){

      return state.employee;
    },
    getValid(state){
      return state.valid;
    },
    getErrors(state){
      return state.error;
    },
    userAuth(state){
      return state.isLoggin;
    }
    
  },
  mutations: {
   
    setEmployee(state, payload) {
      state.employeDeatils = payload;
    },
    setAuth(state,payload){
      state.isLoggin=payload.isAuth;
    }
  },
  actions: {

   async registerEmploye(context,payload){
    console.log("hi")
   // console.log(payload.employe.firstname)
      //const registerEmployee=payload.employe;
      let employe_data=payload;
      console.log(employe_data)
      console.log(employe_data.employe)
      console.log(employe_data.employe.firstname)
   
    if(employe_data.employe.password == employe_data.employe.confirm_password){
        console.log("if condition")
       
        console.log(employe_data.employe.confirm_password)
         
        const employeRegisterResonse= await axios.post("http://localhost:8093/Employee/addEmployees",{
          firstname:employe_data.employe.firstname,
          lastname:employe_data.employe.lastname,
          email:employe_data.employe.email,
          password:employe_data.employe.password
        }); 
        console.log(employeRegisterResonse.status);
      if(employeRegisterResonse.status==200){
          console.log("post Success")
       //   context.commit('setEmployee',payload);
         // this.$router.push('/login')
          
        } 
        /* else{
          this.state.error.push("Something Wrong!");
          this.state.valid=true
          console.log("404")
        } */
      }
     /*  else{
         this.state.error.push("did not match password and confirm_password");
        this.state.valid=true
      }  */ 
    },
   async login(context){
      context.commit('setAuth',{isAuth:true})
      },
     async logout(context){
         context.commit('setAuth',{isAuth:false});
      },
  },

  modules: {
    EmployeStore : EmployeStore,
    EmployeModule: EmployeModule
  },
});
export default store