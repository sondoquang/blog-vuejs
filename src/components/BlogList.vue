<template>
  <section class="col-sm-10 p-5 ps-2" @load="fillDatas">
    <!-- Blog list -->
    <div class="row">
      <h3 class="pb-4">Blog List</h3>
      <div class="col-sm-8">
        <div class="pb-5" v-for="(post,index) in posts" :key="index">
          <div class="img w-100">
            <a href="">
              <img
                :src="post.image"
                class="img-rounded rounded w-100 img-post"
                alt=""
                @click="forwardDetailBlog(index+1)"
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
              <h5><a href="#"> {{ post.title }}</a></h5>
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
      <div class="col-sm-4">
        <div class="card border border-0 p-4">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i class="ri-search-line"></i>
            </button>
          </div>
        </div>
        <div class="card border border-0">
          <div class="header">
            <h5 class="title">Category</h5>
          </div>
          <div class="body">
            <ul class="mb-0 p-0 list-category">
              <li class="p-2 ps-3"><a href="#">Business Report </a></li>
              <li class="p-2 ps-3"><a href="#">Business Growth</a></li>
              <li class="p-2 ps-3"><a href="#">Business Strategy</a></li>
              <li class="p-2 ps-3"><a href="#">Financial Advise</a></li>
              <li class="p-2 ps-3"><a href="#">Creative Ideas</a></li>
            </ul>
          </div>
        </div>
        <div class="card border border-0 pt-4">
          <div class="header">
            <h5 class="title">Recent post</h5>
            <span></span>
          </div>
          <div class="body">
            <ul class="mb-0 p-0">
              <li class="p-2 ps-3 d-flex" v-for="(post,index) in posts" :key="index">
                <a href="" class="p-2" style="max-width: 30%"
                  ><img :src="post.image" class="w-100" alt=""
                /></a>
                <div class="recent-content p-2">
                  <a href="" @click="forwardDetailBlog(index+1)" style="display: inline-block; width: 100%;">{{ post.title }}</a>
                  <small style="color: gray">{{ post.date }}</small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { storage } from '@/utils/localStorage'
  export default {
    data(){
      return{
        username:'',
        posts:storage.get('posts')
      }
    },
    methods:{
      forwardDetailBlog(index){
        this.$router.push({name:'BlogDetail', params:{id:index}})
      }
    },
  }
</script>

<style>
</style>