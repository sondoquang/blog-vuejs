<template>
    <section class="col-sm-10 p-5 ps-2">
  <div class="row">
            <div class="col-xl-4 col-lg-6 col-sm-12 align-content-center">
                <form @submit.prevent="signin" class="card border-0">
                    <div class="card-header text-center">
                        <h5><label>Sign in</label></h5>
                    </div>
                    <div class="card-body mt-2">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" v-model="user.username">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="ri-user-line"></i></span>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="ri-mail-ai-line"></i></span>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                            <div class="input-group-append">
                                <a href="#"><span class="input-group-text"><i class="ri-lock-2-line"></i></span></a>
                            </div>
                        </div>
                        <div class="text-center">
                            <p style="color: red;">{{ error }}</p>
                          </div>
                        <button type="submit" class="btn btn-primary w-100 mt-2 rounded rounded-5">Sign in</button>
                        <div class="card-text mt-2 p-2 text-center">
                            <a href=""><RouterLink to="/login"> You already have a membership?</RouterLink></a>
                        </div>
                        <div class="card-footer text-center mt-3">
                            <label>© 2024, Designed by sonDoIt</label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-xl-8 col-lg-6 col-sm-12 align-content-center">
                <img src="../assets/imgs/banner/signup.svg" class="w-100" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            error:'',
            user:{
                username:'',
                password:'',
                email:''
            }
        }
    },
    methods:{
        signin(){
            if(!this.user.username || !this.user.password || !this.user.email){
                this.error ='Vui lòng điền đủ thông tin !'
                return;
            }
            sessionStorage.setItem('user',JSON.stringify(this.user));
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>

</style>