<template>
  <nav class="z-50 w-full" :class="[navbarBottom, navbarPosition]">
    <div class="nav relative py-3 px-4 bg-gray-700 text-white flex justify-between items-center">
      <img :src="logoImage" class="w-9" alt="Logo Sekolah" />
      <h5 class="px-3 text-lg font-semibold">SMAN 1 RAWAMERTA</h5>
      <div class="cursor-pointer" @click.prevent="toggleMenu">
        <i class="bx bxs-grid-alt bx-sm"></i>
      </div>
    </div>
    <ul class="absolute -z-10 px-4 w-full flex flex-wrap justify-evenly bg-gray-700 text-white text-center transition-all ease-in-out duration-300 rounded-tl-xl rounded-tr-xl" :class="[toggleMenuClass, navMenu]">
      <li class="py-5 flex-[33%]">
        <router-link to="/" class="hover:text-[#0099ff]">
          <i class="bx bxs-home bx-sm"></i>
          <p>Home</p>
        </router-link>
      </li>
      <li class="py-5 flex-[33%]">
        <router-link to="/about" class="hover:text-[#0099ff]">
          <i class="bx bxs-report bx-sm"></i>
          <p>Pelanggaran</p>
        </router-link>
      </li>
      <li class="py-5 flex-[33%]">
        <router-link to="/about" class="hover:text-[#0099ff]">
          <i class="bx bx-line-chart bx-sm"></i>
          <p>Statistik</p>
        </router-link>
      </li>
      <li class="py-5 flex-[33%]">
        <router-link to="/about" class="hover:text-[#0099ff]">
          <i class="bx bxs-data bx-sm"></i>
          <p>Tata Tertib</p>
        </router-link>
      </li>
      <li class="py-5 flex-[33%]">
        <router-link to="/about" class="hover:text-[#0099ff]">
          <i class="bx bxs-cog bx-sm"></i>
          <p>Pengaturan</p>
        </router-link>
      </li>
      <li class="py-5 flex-[33%]">
        <router-link to="/about" class="hover:text-[#0099ff]">
          <i class="bx bx-log-out bx-sm"></i>
          <p>Logout</p>
        </router-link>
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
      toggleMenuClass: "top-full",
      navMenu: "opacity-0",
      navbarPosition: "relative",
      navbarBottom: "bottom-0",
    };
  },
  methods: {
    toggleMenu() {
      if (this.toggleMenuClass == "top-full") {
        this.toggleMenuClass = "-top-[300%]";
        this.navMenu = "";
      } else {
        this.toggleMenuClass = "top-full";
        this.navMenu = "opacity-0";
      }
    },
  },
  mounted() {
    if (window.innerWidth < 540) {
      this.navbarPosition = "fixed";
    }
  },
};
</script>
