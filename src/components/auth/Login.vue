<template>
  <div class="login-wrapper">
    <div class="login-greetings">
      <h1 class="login-title">Welcome!</h1>
      <h1 class="login-title">Sistem Poin Siswa</h1>
      <img src="../../assets/img/login.svg" alt="Login Splash" class="login-splash-img" />
    </div>

    <div class="login-form">
      <h2 class="login-form-title">Please login first!</h2>

      <form action="" class="form-login" method="post">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" name="username" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control" name="password" id="password" v-model="password" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit" @click.prevent="login()">Login</button>
        </div>
      </form>

      <div class="not-registered text-center text-white">
        <span>Didn't have any account yet? </span>
        <a href="/register" class="register-link">Register Now</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      success: false,
      error: null,
    };
  },
  methods: {
    login() {
      console.log(this.username + " " + this.password);
      const auth = { username: this.username, password: this.password };
      const url = "http://127.0.0.1:8000/api/login";
      this.success = false;
      this.error = null;

      try {
        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
          axios.post(url, { username: this.username, password: this.password }).then((res) => {
            sessionStorage.setItem("username", res.data.data.user.username);
            sessionStorage.setItem("userToken", res.data.data.access_token);
            console.log(sessionStorage.getItem("username"));
            console.log(sessionStorage.getItem("userToken"));
          });
        });
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
