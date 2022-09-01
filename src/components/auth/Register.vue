<template>
  <div class="register-wrapper">
    <div class="register-greetings">
      <h1 class="register-title">Welcome!</h1>
      <h1 class="register-title">Sistem Poin Siswa</h1>
    </div>

    <div class="register-form">
      <h2 class="register-form-title">Register your account!</h2>

      <form action="" class="form-register" method="post">
        <div class="form-group-register">
          <label for="name">Name</label>
          <input type="text" class="form-control-register" name="name" id="name" v-model="name" />
        </div>
        <div class="form-group-register">
          <label for="username">Username</label>
          <input type="text" class="form-control-register" name="username" id="username" v-model="username" />
        </div>
        <div class="form-group-register">
          <label for="email">Email</label>
          <input type="email" class="form-control-register" name="email" id="email" v-model="email" />
        </div>
        <div class="form-group-register">
          <label for="password">Password</label>
          <input type="text" class="form-control-register" name="password" id="password" v-model="password" />
        </div>
        <div class="form-group-register form-register-button">
          <button class="btn btn-primary" type="submit" @click.prevent="login()">Register</button>
        </div>
      </form>

      <div class="not-registered text-center text-white">
        <span>Already have an account? </span>
        <a href="/" class="register-link">Login Here!</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
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
