<template>
  <navbar></navbar>

  <div class="main-wrapper px-6 py-4">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/partials/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
