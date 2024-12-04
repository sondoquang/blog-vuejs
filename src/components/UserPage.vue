<template>
  <section class="col-sm-10 p-5 ps-2">
    <h3 class="pb-4">User Account</h3>
                <!-- Proflie edit -->
                <div class="row mb-5">
                    <h4 class="title">Security Settings</h4>
                    <form @submit.prevent="changePassword">
                        <div class="row ps-4">
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">Username:</label>
                                <input type="text" class="form-control" id="blogtitle" placeholder="Enter username" v-model="user.username" readonly>
                            </div>
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="blogtitle" placeholder="Enter current password" v-model="user.password">
                            </div>
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">New Password:</label>
                                <input type="password" class="form-control" id="blogtitle" placeholder="Enter new password" v-model="newPass">
                            </div>
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">Confirm Password:</label>
                                <input type="password" class="form-control" id="blogtitle" placeholder="Enter new password" v-model="confirmPass">
                            </div>
                             <div class="">
                                <p class="text-danger" v-if="error">{{ error }}</p>
                                <p class="text-success" v-else>{{ error }}</p>
                             </div>
                        </div>
                        <button type="submit" class="btn btn-info text-white ps-4 pe-4 ms-4" style="font-size: 0.8rem;">Change</button>
                    </form>
                </div>

                <!-- Account setting -->
                <div class="row">
                    <h4 class="title">Account Settings</h4>
                    <form action="" method="post">
                        <div class="row ps-4">
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">Username:</label>
                                <input type="text" class="form-control" id="blogtitle" placeholder="Enter username" v-model="user.username">
                            </div>
                            <div class="mb-3 col-sm-6">
                                <label for="blogtitle" class="form-label">Email:</label>
                                <input type="text" class="form-control" id="blogtitle" placeholder="Enter current password" v-model="user.email">
                            </div>
                            <div class="mb-3 col-sm-4">
                                <label for="blogtitle" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="blogtitle" placeholder="Enter email" v-model="user.password">
                            </div>
                            
                        </div>
                        <button type="submit" class="btn btn-primary text-white ps-4 pe-4 ms-4" style="font-size: 0.8rem;">Save change</button>
                    </form>
                </div>
  </section>
</template>

<script>
    export default {
        data(){
            return{
                error:'',
                message:'',
                newPass:'',
                confirmPass:'',
                user:JSON.parse(sessionStorage.getItem('user'))
            }
        },
        methods:{
            changePassword(){
                if(this.newPass != this.confirmPass){
                    this.error = "Xác nhận mật khẩu không trùng khớp !"
                    return;
                }else{
                    this.error ='';
                    this.message ='Đổi mật khẩu thành công .'
                    this.user.password = this.newPass;
                    sessionStorage.setItem('user',JSON.stringify(this.user));
                    this.newPass ='';
                    this.confirmPass ='';
                }
            }
        },
    }
</script>

<style>

</style>