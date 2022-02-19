<template>
  <div>
    <Content v-show="this.$store.state.usuario !== null"></Content>
    <Login v-show="this.$store.state.usuario == null"></Login>
  </div>
</template>

<script>
import Login from "./views/Login";
import Content from "./views/Content.vue";
export default {
  components: {
    Login,
    Content,
  },
  name: "App",
};
</script>
