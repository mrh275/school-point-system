<template>
  <user-greet></user-greet>
</template>

<script>
import UserGreetings from "../partials/UserGreetings.vue";
export default {
  name: "Home",
  components: {
    UserGreet: UserGreetings,
  },
  mounted() {
    document.title = "Beranda";
  },
};
</script>
