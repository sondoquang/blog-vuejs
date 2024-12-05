<template>
  <section class="col-sm-10 p-5 ps-2">
    <!-- Blog detail -->
    <div class="row">
      <h3 class="pb-4">Blog Detail</h3>
      <div class="col-sm-8">
        <div class="pb-5">
          <div class="img w-100">
            <a href="">
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
              <h5>
                <a href="">{{ post.title }}</a>
              </h5>
              <p>
                {{ post.content }}
              </p>
            </div>
          </div>
        </div>
        <!-- Comment -->
        <h4 class="title pt-5">comments(2)</h4>
        <div
          class="card mb-3v border-0"
          v-for="(cmt, index) in comments"
          :key="index"
        >
          <div class="row g-0">
            <div class="col-md-2">
              <img
                src="../assets/imgs/user/avatar2.jpg"
                class="img-thumbnail rounded-start w-100"
                alt="..."
              />
            </div>
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title">{{ cmt.username }}</h5>
                <p class="card-text">
                  <small class="text-muted">{{ cmt.date }}</small>
                </p>
                <p class="card-text">{{ cmt.contentComment }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- leave comment -->
        <h4 class="title pt-5">leave a Comment</h4>
        <small
          >Your email address will not be published. Required fields are
          marked*</small
        >
        <form @submit.prevent="userComment">
          <div class="row">
            <div class="mb-3 col-md-6">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
                v-model="user.username"
              />
            </div>
            <div class="mb-3 col-md-6">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                v-model="user.email"
              />
            </div>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="message"
              rows="3"
              placeholder="Please type what you want..."
              v-model="commentText"
            ></textarea>
          </div>
          <div class="mb-3" v-if="error">
            <p class="text-danger">{{ error }}</p>
          </div>
          <button type="submit" class="btn btn-primary">Comment</button>
        </form>
      </div>

      <!-- phần right side -->
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
      </div>
    </div>
  </section>
</template>

<script>
import { storage } from '@/utils/localStorage'
import { sessStr } from '@/utils/sessionStorage'

export default {
  data() {
    return {
      error: "",
      postId: this.$route.params.id,
      post: [],
      posts: storage.get("posts"),
      user:sessStr.get('user'),
      commentText: "",
      comments: [],
    };
  },
  methods: {
    userComment() {
      if (!this.user.username) {
        this.$router.push({ name: "Login" });
        return;
      }
      if (!this.commentText) {
        console.log(this .user);
        this.error = "Vui lòng nhập nội dung !!";
        return;
      }

      this.comments.push({
        username: this.username,
        date: new Date().toLocaleDateString(),
        contentComment: this.commentText,
      });
      this.commentText = "";
    },

    forwardDetailBlog(index) {
      this.$router.push({ name: "BlogDetail", params: { id: index } });
    },
  },
  mounted() {
    this.post = this.posts.find((blog) => blog.id === parseInt(this.postId));
  },
};
</script>

<style>
</style>