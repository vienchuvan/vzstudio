<template>
  <div id="app">
  <RouterView></RouterView>
  </div>
</template>



<style>
/* Định dạng chung */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100vh;
}

/* Tạo background và làm mờ */
#app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://baolongpc.vn/upload/files/news/news-decor-phong-gaming-blpc-20_copy.jpg) no-repeat center center fixed;
  background-size: cover;
  filter: blur(10px); /* Làm mờ background */
  z-index: -1;
}
</style>