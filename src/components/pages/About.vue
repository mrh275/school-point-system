<template>
  <h1>About Page</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "About Me",
  data() {
    return {
      tokenConfig: sessionStorage.getItem("userToken"),
    };
  },
  mounted() {
    document.title = " About Me";
    const config = {
      headers: { Authorization: `Bearer ${this.tokenConfig}` },
    };
    const url = "http://127.0.0.1:8000/api/kelas";
    axios
      .get(url, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch(console.log);
  },
};
</script>
