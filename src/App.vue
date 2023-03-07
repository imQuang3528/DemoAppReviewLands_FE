<template>
  <div id="app">
    <div class="wrap-container">
      <div class="wrap-sidebar">
        <SideBar @collapSideBarEvent="collapSideBarEvent" />
      </div>
      <div class="wrap-content" :class="{collapSideBar:isCollap}">
        <div class="wrap-header">
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar.vue";

export default {
  name: "App",
  data() {
    return {
      isCollap: false,
    };
  },
  components: {
    SideBar,
  },
  methods: {
    collapSideBarEvent() {
      this.isCollap = !this.isCollap
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.wrap-container {
  display: flex;
}
.wrap-sidebar {
  width: 260px;
  height: 100%;
}
.wrap-content {
  width: calc(100% - 260px);
}
.wrap-header{
  height: 58px;
  background: #f5f7f8;
}
.collapSideBar {
  width: auto;
  margin-left: 60px;
}
</style>
