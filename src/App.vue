<template>
  <div class="container-fluid">
    <div class="row">
        <SideBar/>
          <RouterView/>
      </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  name: 'App',
  components: {
    SideBar,
  }
}
</script>

<style>

</style>
