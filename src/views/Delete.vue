<template>


<div class="card "  v-if="userAuth">
    <div class="card-body"> <h2>Delete a Employee?</h2>
    <p>Are you sure you want to delete this Employe?</p>
</div>
  <div class="card-footer">
     <input id="cancel" type="button" @Click="onCancel"  value="Cancle">
     <input id="delete" type="button" @Click="onDelete"  value="Yes" >
  </div>
  </div>
  

</template>
<script>
import { mapGetters} from 'vuex'
import axios from 'axios'

export default {

    name:'Registration',
data(){
    return{
      id:null
    }
},
computed:{
...mapGetters(['userAuth'])
    },
methods:{
  async onDelete(){
 

let deleteEmploye=await axios.delete("http://localhost:8093/Employee/delete/"+this.$route.params.id)
  console.log(deleteEmploye)
   if (deleteEmploye.status == 200 ) {
                console.log("Successfully deleted");
                
              this.$router.push('/employee/')
            } 
},
async onCancel(){
  this.$router.push('/employee/')
}
}


}


</script>
<style scoped>
.card{
 width: 700px;
  padding:30px;
  background-color: white;
  margin: 30px 500px;
  box-shadow: 0px 2px 4px 8px rgba(0,0,0,0.5);
}
input[type="button"]{
  padding: 10px;
  
}

#delete{
color: rgb(249, 250, 248);
margin-left: 30px;
background-color: green;
width: 150px;
border-radius: 10px;
}
#cancel{
color: rgb(249, 250, 248);
margin-left: 30px;
background-color: red;
width: 150px;
border-radius: 10px;
}
.card-footer{
  color: aqua;
  background-color: white;
  border: none;
}
p{
  color: blue;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
  
}
h2{
  color: rgb(48, 5, 117);
}
</style>