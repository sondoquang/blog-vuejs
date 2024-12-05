<template>
    <section class="col-sm-10 p-5 ps-2">
  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12 align-content-center">
                        <form @submit.prevent="login" class="card border-0">
                            <div class="card-header text-center">
                                <h5>Log in</h5>
                            </div>
                            <div class="card-body mt-2">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter username" v-model="username">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="ri-user-line"></i></span>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" placeholder="Enter password" v-model="password">
                                    <div class="input-group-append">
                                        <a href="#"><span class="input-group-text"><i class="ri-lock-2-line"></i></span></a>
                                    </div>
                                </div>
                                <p class="text-danger text-center" v-if="error">{{ error }}</p>
                                <button type="submit" class="btn btn-primary w-100 mt-2 rounded rounded-5">Login</button>
                                <div class="text-center mt-3">
                                    <a href="" class="text-center"><RouterLink to="/sign-in">Sign In</RouterLink></a>
                                </div>
                                <div class="card-footer text-center mt-3">
                                    © 2024, Designed by sonDoIt
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-12 align-content-center">
                        <img src="../assets/imgs/banner/signin.svg" class="w-100" alt="">
                    </div>
                </div>
            </section>
</template>

<script>
import { storage } from '@/utils/localStorage';
import { sessStr } from '@/utils/sessionStorage';
    export default {
        data(){
            return{
                error:'',
                username:'',
                password:'',
                user:{},
                users:storage.get('users'),
            }
        },
        methods:{
            login(){
                this.user = this.users.find(user =>{
                    return user.username === this.username && user.password === this.password
                })
                if(this.user == null){
                    this.error = 'Tài khoản không tồn tại !!'
                    return;
                }
                if((this.username != this.user.username) || (this.password != this.user.password)){
                    this.error ='Username hoặc password chưa chính xác !';
                    return;
                }
                sessStr.set('user',this.user)
                /*Làm trắng from*/
                this.username = '';
                this.password = '';
                this.nameUri = sessStr.get('nameUri');
                if(this.nameUri!= null){
                    this.$router.push({name:this.nameUri})
                }else{
                    this.$router.push({name:'Home'})
                }
            }
        },
    };
</script>

<style>
</style>