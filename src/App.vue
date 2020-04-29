<template>
<div id="app">
  <Navbar />
  <body class="wrapper">
    <div class="container mt-5">
      <router-view />
    </div>
  </body>
  <Footer />
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
#app {
  background-color: #e9ebee;
}

.wrapper {
  background-color: #e9ebee;
  height: 100vh;
}

.container {
  top: 50%;
  left: 50%;
}
</style>
