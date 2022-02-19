<template>
  <div class="principal_wrap">
    |
    <v-app id="login" :style="cssProps">
      <v-app-bar
        height="50px"
        app
        absolute
        flat
        style="background: none !important"
      >
      </v-app-bar>
      <v-main>
        <v-row justify="center" style="height: calc(100vh - 100px)">
          <v-col cols="6" align-self="center">
            <v-row justify="center" align-content="center">
              <v-col
                class="rounded-xl"
                cols="8"
                align-self="center"
                style="padding: 40px; background-color: white"
              >
                <table class="table_login">
                  <tr>
                    <td colspan="2" style="text-align: center">
                      <img src="../assets/logo_fundacion_donde.png" />
                      <v-spacer style="margin-bottom: 50px"> </v-spacer>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <v-text-field
                        v-model="usuario"
                        color="primario"
                        label="Usuario"
                        filled
                        rounded
                      >
                        <!-- :rules="cadenaUsuario" -->
                      </v-text-field>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <v-text-field
                        v-model="password"
                        type="password"
                        color="primario"
                        label="Contraseña"
                        filled
                        rounded
                      ></v-text-field>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <v-btn
                        color="primario"
                        rounded
                        style="height: 54px; color: white; width: 100%"
                        @click="iniciarSesion()"
                        >Ingresar</v-btn
                      >
                    </td>
                  </tr>
                </table>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<style>
.text_label_sub {
  color: white;
  font-size: 32px;
}
.text_label {
  /* splash */

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 64px;
  /* identical to box height, or 145% */

  text-align: right;
  letter-spacing: 0.2px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  /*font-size: 44px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    4px 4px 4px rgba(0, 0, 0, 0.4), 4px 4px 4px rgba(0, 0, 0, 0.4);*/
}
.principal_wrap > div[data-app="true"] {
  /*background-color: #5e8936;
  background-image: linear-gradient(270deg, #5e8936 0%, #1c4535 100%);*/

  background-color: #125138;
  background-image: linear-gradient(135deg, #125138 0%, #5e8936 100%);

  /*background: url("../assets/back4.png") no-repeat center center fixed !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;*/
}
.table_login {
  width: 100%;
}
.table_login td {
  padding: 0px;
}
.table_login .v-text-field--filled > .v-input__control > .v-input__slot {
  background: none !important;
  /*opacity: 0.75;*/
  border: 1px solid var(--v-primario);
}
.table_login
  .v-text-field--filled
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot
  > .v-label {
  font-size: 16px;
  color: var(--v-contentmenu);
}
</style>

<script>
export default {
  computed: {
    cssProps() {
      var themeColors = {};
      Object.keys(this.$vuetify.theme.themes.light).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.light[color];
      });
      return themeColors;
    },
  },

  methods: {
    iniciarSesion() {
      // let result = this.validarUsuario();
      // let login = { usuario: String(this.usuario) };
      this.$store.state.usuario = "admin";
    },
  },

  name: "Login",
  data() {
    return {
      overlay: false,
      usuario: "",
      password: null,
      //   cadenaUsuario: [
      //     (v) => v.length <= 15 || "Maximo 15 caracteres",
      //     (v) =>
      //       /^[A-Za-z0-9]*$/.test(v) || "no se permiten caracteres especiales",
      //   ],
    };
  },
};
</script>
