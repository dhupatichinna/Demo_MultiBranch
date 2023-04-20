<template>
<div class="container mt-3">

    <div class="card">
        <div class="card-header">User Registration</div>
        <div class="card-body">
           
            <form method="post" @submit.prevent="onsingup">
                <div class="mb-3 mt-3">
                    <label class="form-label">First Name</label>
                    <input type="text" class="form-control"  placeholder="Enter User Name" v-model="user_name" required>
                </div>
                 <div class="mb-3 mt-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" class="form-control"  placeholder="Enter User Name" v-model="user_name" required>
                </div>
                <div class="mb-3 mt-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control"  placeholder="Enter password" v-model="password" required>
                </div>
                <div class="mb-3 mt-3 form-group">
                    <label class="form-label">Confirm Password</label>
                    <input type="text" class="form-control"  placeholder="Enter confirm password" v-model="confirm_password" required>
                </div>
                <div class="mb-3 mt-3 form-group ">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"  placeholder="Enter email" v-model="email" required>
                </div>
               

                <button type="submit" @click="id++" class="btn ">Singup</button>
            </form>
        </div>
        <div class="card-footer">
            <router-link to="/login" style="color: #e2e9f7;">Login Here</router-link>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'singup',
    data() {
        return {

            user_name: "",
            password: "",
            confirm_password: "",
            email: "",
            phone_number: "",
            id:0,
               
        }

    },
    methods: {
        async onsingup() {

            const user_data = {
                id:this.id,
                user_name: this.user_name,
                password:this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                phone_number: this.phone_number,
                
            }
            let result = await axios.post('http://localhost:3000/user', user_data);
                 
            if (result.status == 201) {
                console.log(user_data);
                localStorage.setItem("user_data",JSON.stringify(result.data))
              this.$router.push('/login')
            }
     

        }
    },
 
}
</script>

<style scoped>
.card {
    width: 350px;
  
}

.card-header,
.card-footer {
    color: #e2e9f7;
    background-color: #415d97;
}

button {
    width: 150px;
    height: 50px;
    background-color: #415d97;
    color: #e2e9f7;
    font-weight: 700;
    letter-spacing: 5px;
    border-radius: 10px;
    font-size: 17px;
}

button:hover {
    background-color: #24417a;
    color: #bccff5;
}
</style>
