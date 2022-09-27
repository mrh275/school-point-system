<template>
  <nav class="z-50 w-full sm:flex sm:justify-between items-center" :class="[navbarBottom, navbarPosition]">
    <div class="nav relative bg-gray-700 sm:bg-transparent py-3 px-4 text-white flex justify-between sm:justify-start items-center">
      <img :src="logoImage" class="w-9" alt="Logo Sekolah" />
      <h5 class="px-3 text-lg font-semibold">SMAN 1 RAWAMERTA</h5>
      <div class="cursor-pointer" @click.prevent="toggleMenu" v-if="mobileDevices">
        <i class="bx bxs-grid-alt bx-sm"></i>
      </div>
    </div>
    <ul class="text-white flex justify-evenly px-4" v-if="!mobileDevices">
      <li class="px-2">
        <router-link to="/">Beranda</router-link>
      </li>
      <li class="px-2 relative" @mouseenter="pelanggaranMenu = 'opacity-100 visible'" @mouseleave="pelanggaranMenu = 'opacity-0 invisible'">
        <a href="javascript:void(0)">Pelanggaran</a>
        <ul class="absolute bg-gray-700 px-2 py-2 transition-all ease-in-out w-[120%] duration-300" :class="pelanggaranMenu">
          <li class="py-1">
            <router-link to="/about">Daftar Pelanggaran</router-link>
          </li>
          <li class="py-1">
            <router-link to="/">Statistik</router-link>
          </li>
          <li class="py-1">
            <router-link to="/">Tata Tertib</router-link>
          </li>
        </ul>
      </li>
      <li class="px-2">
        <router-link to="/">Pengaturan</router-link>
      </li>
      <li class="px-2">
        <router-link to="/">Login</router-link>
      </li>
    </ul>
    <ul class="absolute -z-10 px-4 w-full flex flex-wrap justify-evenly bg-gray-700 text-white text-center transition-all ease-in-out duration-300 rounded-tl-xl rounded-tr-xl" :class="[toggleMenuClass, navMenu]" v-if="mobileDevices">
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
          <i class="bx bx-log-in bx-sm"></i>
          <p>Login</p>
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
      mobileDevices: false,
      pelanggaranMenu: "opacity-0 invisible",
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
    hoverToggle() {
      if (this.pelanggaranMenu == "opacity-0") {
        this.pelanggaranMenu = "opacity-100";
      } else {
        this.pelanggaranMenu = "opacity-0";
      }
    },
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.navbarPosition = "fixed";
      this.mobileDevices = true;
    }
  },
};
</script>
