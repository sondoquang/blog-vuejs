<template>
  <!-- ====SIDE BAR  ===== -->
  <div class="col-xl-2 col-lg-1">
    <!-- layout sidebar -->
    <!-- ?<div id="sidebar"></div> -->
    <aside id="sidebar" :class='{notExpand: isNotExpand}'>
      <div class="d-flex">
        <button @click="isNotExpand = !isNotExpand" id="toggle-btn" type="button">
          <i class="ri-layout-grid-fill"></i>
        </button>
        <div class="sidebar-logo">
          <a href="#">Admin</a>
        </div>
      </div>
      <ul class="sidebar-nav pt-1">
        <li class="sidebar-item">
          <div class="userInfor">
            <a href="#" class="sidebar-link"
              ><img
                src="../assets/imgs/user/profile_av.jpg"
                class="img-thumbnail"
                alt=""
            /></a>
            <div class="detail">
              <h5>Sondoit</h5>
              <small>Admin</small>
            </div>
          </div>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="ri-home-3-line"></i><RouterLink to="/home" class="text-dark"><span>Home</span></RouterLink>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="ri-shield-user-line"></i><RouterLink to="/user" class="text-dark"><span>Our Profile</span></RouterLink>
          </a>
        </li>
        <li class="sidebar-item">
          <a
            href="#"
            class="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i class="ri-blogger-fill"></i>
            <span>Blog</span>
          </a>
          <ul
            id="auth"
            class="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li class="sidebar-item">
              <a href="#" class="sidebar-link"
                ><i class="ri-arrow-right-line"></i><RouterLink to="/blog-post" class="text-dark">Blog Post</RouterLink> </a
              >
            </li>
            <li class="sidebar-item">
              <a href="#" class="sidebar-link"
                ><i class="ri-arrow-right-line"></i><RouterLink to="/blog-grid" class="text-dark">Grid View</RouterLink></a
              >
            </li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="ri-notification-line"></i><RouterLink to="/sign-in" class="text-dark"><span>Sign-in</span></RouterLink>
          </a>
        </li>
      </ul>
      <div class="sidebar-footer">
        <a href="" class="sidebar-link" @click="logout">
          <i class="ri-login-box-line"></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  </div>
  <!-- END SIDE BAR -->
</template>

<script>
  export default{
    data(){
      return{
        isNotExpand:false
      }
    },
    methods:{
      logout(){
        sessionStorage.removeItem('user'),
        this.$router.push({name:'Home'})
      }
    }
  }
</script>

<style>
/* ========= css for Admin page (index.html) ========= */
/* Css for home page */
@import url("https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Syne:wght@400..800&family=Twinkle+Star&display=swap");

/*===============VARIABLES CSS ==============*/
:root {
  --header-height: 3.5rem;
  /*===========COLOR CSS============*/
  /*Color mode HSL(hue,saturation,lightness)*/
  --first-color: #0eb5df;
  --title-color: #ffffff;
  --title_v1-color: hsl(230, 75%, 15%);
  --formal-title-color: #060a2f;
  --text-color: hsl(230, 12%, 40%);
  --body-color: hsl(230, 100%, 98%);
  --container-color: hsl(230, 100%, 97%);
  --border-color: hsl(230, 25%, 80%);
  /*===========FONT AND TYPOGRAPY============*/
  --body-font: "Syne", sans-serif;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.939rem;
  /*===========FONT WEIGHT============*/
  --font-regular: 400;
  --font-medium: 500;
  --font-semi-bold: 600;
  /*==========Z-INDEX============*/
  --z-fixed: 100;
  --z-modal: 1000;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none !important;
}

li {
  list-style: none;
}

h1 {
  font-weight: 600;
  font-size: 1.5rem;
}

body {
  font-family: "Bitter", serif;
}
label {
  user-select: none;
}

.wrapper {
  display: flex;
}

.main {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  background-color: #ebebeb;
}

#sidebar {
  position: fixed;
  width: 240px;
  min-width: 240px;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
}

#sidebar.notExpand {
  width: 70px;
  min-width: 70px;
}

#toggle-btn {
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 1rem 1.5rem;
}

#toggle-btn {
  font-size: 1.5rem;
  color: #060a2f;
}
.sidebar-logo {
  margin: auto 0;
}

.sidebar-logo a {
  color: #060a2f;
  font-size: 1.15rem;
  font-weight: 600;
}
.sidebar-logo,
a.sidebar-link span {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.6s ease-in-out;
}

#sidebar.notExpand .sidebar-logo,
#sidebar.notExpand a.sidebar-link span {
  opacity: 0;
  transition: opacity 0.4s linear;
  visibility: hidden;
}
.sidebar-nav {
  padding: 2rem 0rem;
  flex: 1 1 auto;
}

a.sidebar-link {
  padding: 0.6rem 1.625rem;
  color: var(--formal-title-color);
  display: inline-block;
  width: 100%;
  opacity: 1;
  visibility: visible;
  font-size: 0.9rem;
  white-space: nowrap;
  border-left: 3px solid transparent;
  transition: all 0.6s;
}
a.sidebar-link i {
  font-size: 1.2rem;
  margin-right: 0.75rem;
  color: #060a2f;
}

a.sidebar-link:hover {
  background-color: rgba(255, 255, 255, 0.075);
  border-left: 3px solid #e96f98;
  transition: background-color 0.4s;
}

.sidebar-item {
  position: relative;
}

#sidebar.notExpand .sidebar-item .sidebar-dropdown {
  position: absolute;
  top: 0;
  left: 70px;
  background-color: aliceblue;
  padding: 0;
  min-width: 15rem;
  opacity: 0;
  visibility: visible;
}

#sidebar.notExpand .sidebar-item:hover .has-dropdown + .sidebar-dropdown {
  display: inline-block;
  opacity: 1;
  visibility: visible;
  max-height: 15em;
  width: 100%;
  /* transition: opacity .6s ease-in-out; */
}

#sidebar:not(.notExpand) .sidebar-link[data-bs-toggle="collapse"]::after {
  border: solid;
  border-width: 0 0.075rem 0.075rem 0;
  content: "";
  display: inline-block;
  padding: 2px;
  position: absolute;
  right: 1.5rem;
  top: 1.4rem;
  transform: rotate(-135deg);
  transition: all 0.6s ease-out;
}

#sidebar:not(.notExpand)
  .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
  transform: rotate(45deg);
  transition: all 0.6s ease-out;
}

.sidebar-link:hover,
.sidebar-link:hover i {
  color: #e96f98;
  transition: color 0.4s !important;
}

/*========= CSS FOR TABS  =============*/
.container-tabs {
  position: relative;
}

.tab-pane > div {
  background-color: aliceblue;
  min-height: 100vh;
}
/* Tab-item */
.tab-item {
  background-color: #d1e6f6;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-right: 0.2rem;
}
.tab-item:hover {
  cursor: pointer;
}

/* line */
div.line {
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 0;
  height: 3px;
  border-radius: 15px;
  background-color: #333b40;
  transition: all 0.4s ease;
}

.active_tab {
  background-color: #eff8ff;
}

.active_pane {
  display: block !important;
}

/* Css for image user */
.imageUser img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.card__user {
  box-shadow: 0 0.2rem 0.3rem hsl(230, 75%, 15%);
}

.sidebar-item.active{
  color: #e96f98;
}

.sidebar-item.active a.sidebar-link {
  background-color: rgba(255, 255, 255, 0.075);
  border-left: 3px solid #e96f98;
  transition: background-color 0.4s;
}

/* ==== css for user ====== */
.userInfor {
  display: flex;
  align-items: center;
}
.userInfor .sidebar-link {
  width: auto;
  padding: 10px;
}
.userInfor h4 {
  margin: 0px;
}
.userInfor img {
  width: 50px;
  max-width: 50px;
}

#sidebar.notExpand .detail {
  display: none;
}

/* ======== css for list-category ==== */
.list-category li a {
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 6px;
  padding-left: 15px;
  border-bottom: 1px solid lightgray;
  color: #333b40;
  transition: transform 0.2s linear;
}

.list-category li a::before {
  content: "";
  width: 6px;
  height: 2px;
  max-height: 1px;
  border-radius: 2px;
  background-color: #333b40;
  position: absolute;
  left: 0;
  top: calc(50% - 3px);
  transform: translateY(50%);
}

.list-category li:hover a {
  color: var(--first-color);
  transform: translateX(10px);
  transition: transform 0.2s linear;
}

/* css for title chung chung */
.title {
  color: #e96f98;
  text-transform: uppercase;
}

div.img {
  max-width: 800px;
  position: relative;
  overflow: hidden;
}
.img-post {
  overflow: hidden;
  transition: transform 0.4s;
}

div.img:hover img {
  transform: scale(1.2);
  transition: transform 0.4s;
}
.blog-post-date {
  position: absolute;
  padding: 1rem;
  bottom: 10px;
  right: 10px;
  background-color: #d1e6f6;
}
</style>