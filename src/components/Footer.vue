<template>
  <div class="footer">Panitarn Dk &copy; {{ date }}. All Rights Reserved</div>
</template>

<script>
const date = new Date().getFullYear();
export default {
  name: "Footer",
  data() {
    return {
      date: date
    };
  }
};
</script>

<style scoped>
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #343a40;
  color: white;
  text-align: center;
  vertical-align: middle;
}
</style>
