<template>
  <div class="login-wrapper">
    <h1 class="login-title">Welcome!</h1>
    <h1 class="login-title">Sistem Poin Siswa</h1>

    <div class="login-form">
      <h2 class="login-form-title">Please login first!</h2>

      <form action="" class="form-login" method="post">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" name="username" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control" name="password" id="password" />
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
export default {
  methods: {
    login() {},
  },
};
</script>
