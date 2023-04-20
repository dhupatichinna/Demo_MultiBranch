export default {
   
    async signup(context, payload) {
        console.log("trigger on singup method")
      const response = await fetch('http://localhost:8093/Employee/addEmployees', {
        method: 'POST',
        body: JSON.stringify({
          fisrtname:payload.firstname,
          lastname:payload.lastname,
          email: payload.email,
          password: payload.password
          
        })
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        console.log(responseData);
        const error = new Error(responseData.message || 'Failed to authenticate.');
        throw error;
      }
  
      console.log(responseData);
      context.commit('setEmployeId', {
       
        EmployeId: responseData.id,
        
      });
      context.commit('setEmploye',{
        EmployeData:responseData.data
      })
    },
    
  };