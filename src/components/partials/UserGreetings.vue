<template>
  <div class="user-wrapper flex items-center justify-between">
    <div class="user-greet flex items-center">
      <img :src="userImage" alt="User Profile" class="w-14 rounded-full" />
      <div class="user-detail mx-4">
        <h4 class="user-name font-bold text-xl">Halo, John Doe</h4>
        <span class="text-sm text-gray-500">Administrator</span>
      </div>
    </div>
    <div class="notif-btn cursor-pointer relative">
      <i class="bx bxs-bell bx-md text-gray-500"></i>
      <span class="notif-badge bg-red-500 right-1 leading-[.55] text-white pt-[5px] px-[3px] rounded-full absolute">*</span>
    </div>
  </div>
</template>

<script>
import userImg from "../../assets/img/user-square.png";
export default {
  data() {
    return {
      userImage: userImg,
    };
  },
};
</script>
