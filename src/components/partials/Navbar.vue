<template>
  <nav class="relative z-50">
    <div class="nav relative py-2 px-4 bg-gray-700 text-white flex justify-between items-center">
      <img :src="logoImage" class="w-9" alt="Logo Sekolah" />
      <h5 class="px-3 text-lg font-semibold">SMAN 1 RAWAMERTA</h5>
      <div class="cursor-pointer" @click.prevent="toggleMenu">
        <i class="bx bx-menu bx-md"></i>
      </div>
    </div>
    <ul class="absolute -z-10 px-4 w-full bg-gray-700 text-white text-center transition-all ease-in-out duration-300" :class="toggleMenuClass">
      <li class="py-2">
        <router-link to="/" class="hover:text-[#0099ff]">Home</router-link>
      </li>
      <li class="py-2">
        <router-link to="/about" class="hover:text-[#0099ff]">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import logo from "../../assets/img/logo.png";

export default {
  data() {
    return {
      logoImage: logo,
      toggleMenuClass: "-top-full",
    };
  },
  methods: {
    toggleMenu() {
      if (this.toggleMenuClass == "-top-full") {
        this.toggleMenuClass = "top-12";
      } else {
        this.toggleMenuClass = "-top-full";
      }
    },
  },
};
</script>
