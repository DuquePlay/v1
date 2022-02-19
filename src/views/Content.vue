<template>
  <v-app id="inspire" :style="cssProps">
    <v-app-bar
      :app="true"
      color="white"
      flat
      height="60px"
      class="frd_app_bar"
      rounded="lg"
      elevation="3"
      :collapse="false"
      v-show="true"
    >
      <div class="d-flex align-center">
        <v-img
          v-show="sizeLG"
          lazy-src="../assets/logo_fundacion_donde.png"
          max-height="100"
          max-width="100"
          src="../assets/logo_fundacion_donde.png"
          style="margin-right: 0px"
        />
      </div>
      <div class="d-flex align-center">
        <v-img
          v-show="!sizeLG"
          lazy-src="../assets/logo_fundacion_donde.png"
          max-height="100"
          max-width="100"
          src="../assets/logo_fundacion_donde.png"
          style="margin-right: 0px"
        />
      </div>

      <v-spacer></v-spacer>

      <v-tabs
        centered
        class="menu_tabs_principal ml-n9"
        color="cuaternario darken-1"
        slider-color="cuaternario"
        height="40px"
        style="padding-top: 5px"
      >
        <v-tab
          v-for="link in links"
          :key="link.name"
          @click="openLink(link.link)"
        >
          {{ link.name }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    sizeSM() {
      return Boolean(this.$vuetify.breakpoint.sm);
    },
    sizeLG() {
      return Boolean(this.$vuetify.breakpoint.lg);
    },
    sizeMD() {
      return Boolean(this.$vuetify.breakpoint.md);
    },
    cssProps() {
      var themeColors = {};
      Object.keys(this.$vuetify.theme.themes.light).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.light[color];
      });
      return themeColors;
    },
  },
  methods: {
    openLink(link) {
      this.$router.push(link).catch((err) => {
        //this.$router.go();
        this.errores.push(err);
      });
    },
  },
  data: () => ({
    links: [
      {
        name: "Recursos",
        link: "/recursos",
      },
      {
        name: "Poyectos",
        link: "/proyectos",
      },
    ],
  }),
};
</script>
