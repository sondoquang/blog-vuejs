<template>
  <section class="col-xl-10 col-lg-11 p-5 ps-2">
    <!-- ===========Blog grid style ============ -->
    <div class="row">
      <h3 class="pb-4">Blog Grid Style</h3>
      <div class="col-sm-6" v-for="(post,index) in posts" :key="index">
        <div class="pb-5">
          <div class="img w-100">
            <a href="#">
              <img
                :src="post.image"
                class="img-rounded rounded w-100 img-post"
                alt=""
              />
            </a>
            <span class="blog-post-date">Monday, December 15, 2018</span>
          </div>
          <div class="blog-content">
            <div class="blog-header pt-3 pb-3">
              <span class="me-2"
                ><i class="ri-user-fill me-2"></i
                ><strong>By</strong> SonDoIt</span
              >
              <span>||</span>
              <span class="me-2"
                ><i class="ri-message-2-fill"></i> Comments <span>(3)</span>
              </span>
            </div>
            <div class="blog-body">
              <h5><a href="#">{{ post.title }}</a></h5>
              <p>
                {{ post.content }}
              </p>
            </div>
            <div class="blog-footer">
              <button type="button" class="btn btn-info text-white" @click="forwardDetailBlog(index+1)">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { storage } from '@/utils/localStorage';

export default {
    data(){
      return{
        username:'',
        posts:storage.get('posts'),
      }
    },
    methods:{
      forwardDetailBlog(index){
        this.$router.push({name:'BlogDetail', params:{id:index}})
      }
    }
};
</script>

<style>
</style>