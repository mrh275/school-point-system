<template>
  <div class="nav py-2 px-4 bg-gray-700 text-white flex justify-between items-center">
    <img :src="logoImage" class="w-9" alt="Logo Sekolah" />
    <h5 class="px-3 text-lg font-semibold">SMAN 1 RAWAMERTA</h5>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/img/logo.png";

export default {
  data() {
    return {
      logoImage: logo,
    };
  },
};
</script>
