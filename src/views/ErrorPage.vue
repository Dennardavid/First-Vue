<template>
  <div class="fullpage error">
    <img src="../assets/pngwing.com.png" alt="404" class="errorimg" />
    <h2 class="errorheader">404</h2>
    <p>Ooops page not found....</p>
    <RouterLink to="/">
      <button class="page_buttons">Back to home</button>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "ErrorPage",
};
</script>

<style scoped>
p {
  font-family: "Poppins", sans-serif;
}
.fullpage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.errorimg {
  width: 20%;
}
.errorheader {
  font-family: "Ojuju", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-size: 100px;
  margin-top: -50px;
  font-style: normal;
  color: #f05323;
}

@media screen and (max-width: 430px) {
  .errorimg {
    width: 30%;
  }
  .errorheader {
    font-size: 70px;
    margin-top: -30px;
  }
}

@media screen and (max-width: 375px) {
  .errorimg {
    width: 40%;
  }
  .errorheader {
    font-size: 60px;
    margin-top: -30px;
  }
}
</style>
