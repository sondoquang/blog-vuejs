<template>
  <section class="col-sm-10 p-5 ps-2">
    <!-- CONTENT CHANGE (BLOG POST) -->
    <div class="row">
      <form @submit.prevent="addPost">
        <h3 class="pb-4">Blog Post</h3>
        <div class="mb-3">
          <label for="id" class="form-label">Id:</label>
          <input type="number" class="form-control" id="id" placeholder="Enter link image" v-model="post.id" readonly>
        </div>
        <div class="mb-3">
          <label for="blogtitle" class="form-label">Blog Title:</label>
          <input
            type="text"
            class="form-control"
            id="blogtitle"
            placeholder="Enter blog title"
            v-model="post.title"
          />
        </div>
        <div class="mb-3">
          <label for="link" class="form-label">Link Image:</label>
          <input type="text" class="form-control" id="link" placeholder="Enter link image" v-model="post.image">
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content:</label>
          <textarea class="form-control" id="content" rows="10" v-model="post.content"></textarea>
        </div>
        <div class="mt-3">
          <p class="text-danger" v-if="error">{{ error }}</p>
          <p class="text-success" v-else>{{ message }}</p>
        </div>
        <button type="submit" class="btn btn-info text-white ps-4 pe-4">
          Post
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { storage } from '@/utils/localStorage'

  export default {
    data(){
      return{
        error:'',
        message:'',
        posts:storage.get('posts'),
        post:{
          id:null,
          title:'',
          image:'',
          content:'',
          date:new Date().toLocaleDateString()
        }
      }
    },
    methods:{
      addPost(){
         if(!this.post.title || !this.post.image || !this.post.content){
            this.error='Vui lòng điền đủ thông tin !'
         }else{
            this.error ='';
            this.message='Tạo blog thành công.'
            this.posts.push(this.post);
            storage.set('posts',this.posts)
         }
      },
    },
    mounted(){
      this.post.id = (this.posts.length)+1
    }

}
</script>

<style>
</style>