import axios from 'axios'
const Employestore={
    state : {               
        EmployeDeatils: [],
        EmployeData:{},
        employe:{
            id:'',
            firstname:'',
            lastname:'',
            email:'',
            password:'',

        }       
    },


        getters:{
            getCurrentEmploye:(state)=>{
                console.log("going to return name from inside getters ", state.employe.email)
                return state.employe.email;
            },
            setCurrentEmploye:(state)=>{
                console.log("going to logoutname name from inside setCurrentuser ");
                state.employe.id="",
                state.employe.firstname="",
                state.employe.lastname="",
                state.employe.email="",
                state.employe.pwd=""
                return state.employe;
                
            },
            getAllEmployes:(state)=>{
      
                return state.EmployeDeatils.sort(function(x,y){
                    return x.id - y.id;
                });
            },
            getEmploye:(state)=>{
                return state.EmployeData;
            },
    },
    
    mutations:{
        
        setEmployes(state,employeList){
            console.log("inside mutation set restos " )
          
           state.EmployeDeatils = employeList;
        },
        deleteEmploye(state,employeData){
            console.log("inside mutation delete  restaurant " )
           
           state.EmployeData = employeData;
           for(let i=0; i< state.EmployeDeatils.length; i++ ){
                if(state.EmployeDeatils[i].id === state.EmployeData.id){
                    state.EmployeDeatils.splice(i,1);                    
                }
           }
        },
        setEmploye(state,employeData){
            console.log("inside mutation set single restaurant " )
          
           state.EmployeData = employeData;
           for(let i=0; i< state.EmployeDeatils.length; i++ ){
                if(state.EmployeDeatils[i].id == state.EmployeData.id){
                    console.log("Inside for loop..copying object into array");
                    state.EmployeDeatils[i] = state.EmployeData;
                }
           }
        },
        addEmployee(state,employeData){
            console.log("inside mutation add single restaurant " )
           
           state.EmployeData = employeData;
            console.log("Inside for loop..copying object into array");
            state.EmployeDeatils[state.EmployeDeatils.length] = state.EmployeData;           
           
        },
        SET_Employe(state,payload){
            console.log("Commintg inside mutation user name ",payload.employe.firstname )
            state.employe.firstname = payload.employe.firstname;
            state.employe.lastname = payload.employe.lastname;
            state.employe.email = payload.employe.email;
            state.employe.password = payload.employe.password;
            
            console.log("user name set in state is  ",state.employe.firstname )
            console.log(" inside mutation  payload user data is ",payload.employe)
            console.log(" inside mutation  state user data is ",state.employe)
        }
        
    },
    actions:{   
       
        loadEmployes : async function({commit}){
            console.log("Inside async loadRestos method in actions");
            let response = await axios.get("http://localhost:8093/Employee/getEmployees");
            console.log("response.status for get", response.status);
            if(response.status == 200)
            {
                
                commit('setEmployes',response.data );
              
            }
        },
        
        getEmploye:async function({commit},employeId){
            console.log("Inside async getRestaurant method in actions");
            let response = await axios.get(`http://localhost:8082/restaurant/${employeId}`);
            console.log("response.status for get", response.status);
            if(response.status == 200)
            {
                
                console.log(" Going to commit mutation set single resto data",response.data);
                
            
                commit('setEmploye',response.data );
                
            }
        },

        deleteRest : async function({commit},employeid){
            console.log("Inside dleet rest action");
            let response = await axios.delete("http://localhost:8093/Employee/delete/"+employeid);
            if(response.status == 200){
               // this.loadData()
               commit('deleteEmploye',response.data );
            }

        },
        
        updateRest : async function({commit},payload){
            console.log("Inside async updateresto method in actions");
            let result = await axios.put("http://localhost:8093/Employee/update/"+payload.id,{
                firstname:payload.employe.name,
                lastname: payload.employe.address,
                email:payload.employe.email,
                id: payload.employe.id
                
            });
            if(result.status == 200)
            {
                console.log(" Going to commit mutation result.data", result.data);
                console.log(" Going to commit mutation payload resto data", payload.restaurant);
                console.log(" Going to commit mutation payload resto name", payload.restaurant.name);
               
                commit({
                    type: 'setEmploye',
                    EmployeData: payload.employe
                });
               
            }            

        },
           
    signUp : async function({commit},payload){
        console.log("Inside async signup method in actions");
        let result = await axios.post("http://localhost:8093/Employee/addEmployees",{
            firstname:payload.employe.firstname,
            lasstname:payload.employe.lastname,
            email:payload.employe.email,
            password:payload.employe.password
            
        });
        if(result.status == 200)
        {
            console.log(" Going to commit mutation result.data", result.data);
            console.log(" Going to commit mutation payload user data", payload.employe);
            console.log(" Going to commit mutation payload user name", payload.employe.name);
            
            commit({
                type: 'SET_Employee',
                employe: payload.employe
            });
          
        }
    },
    validateEmployeLogin: async function({commit},payload){
        console.log("Inside async validateuserlogin method in actions");
        console.log ("passing email id",payload.employe.email);
        console.log("passing pwd",payload.employe.pwd);
        let result =
         await axios.get(`"http://localhost:8093/Employee/login/${payload.employe.email}/${payload.employe.password}`);
        console.log(result.status);
        console.log("result = ",result);
        console.log("result.data", result.data);
        console.log("user retrived from database is  result.data[0]",result.data[0]);
        if((result.status == 200)&& (result.data.name != ""))
        {
            console.log(" User exists in dattabase.going to commit to state")
          
            payload.employe.name = result.data.name;
            commit({
                type: 'SET_Employee',
                user: payload.employe
            });
            
        }
    }
}
}
export default Employestore
