<template>
  <div>
    <v-col id="recursos" :style="cssProps">
      <v-app>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              color="primario"
              label="Buscar"
              single-line
              hide-details
              
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-app>
    </v-col>
  </div>
</template>


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
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Recurso",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Puesto", value: "puesto" },
        { text: "Tipificación", value: "tipificacion" },
        { text: "Compañia", value: "compañia" },

        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Erick Alejandro Chi Flores",
          puesto: "Desarrollador SR",
          tipificacion: "Pool",
          compañia: "IT TALENT",

          iron: "100%",
        },
        {
          name: "Irving Kadafi Sologuren Vazquez",
          puesto: "Desarrollador SR",
          tipificacion: "Pool",
          compañia: "IT TALENT",

          iron: "100%",
        },
        {
          name: "Roger Esau Castillo Chin",
          puesto: "Analista SR",
          tipificacion: "Soporte",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Eduardo Humberto Perez Becerril",
          puesto: "Desarrollador FRONT",
          tipificacion: "Pool",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Angel Eduardo Cupul Osorio",
          puesto: "Desarrollador JR",
          tipificacion: "Pool",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Luis Javier Dzib Chavez",
          puesto: "Desarrollador JR",
          tipificacion: "Pool",
          compañia: "FRD",

          iron: "0%",
        },
        {
          name: "Alvaro Emmanuel Solis Aranda",
          puesto: "Desarrollador SR",
          tipificacion: "Pool",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Carlos Manuel Canul Aguilar",
          puesto: "Desarrollador SR",
          tipificacion: "Pool",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Herman Fernando Sánchez Santiago",
          puesto: "Desarrollador SR",
          tipificacion: "Normativo",
          compañia: "FRD",

          iron: "100%",
        },
        {
          name: "Joaquin Gualberto Gamboa Perez",
          puesto: "Desarrollador SR",
          tipificacion: "Mantenimiento",
          compañia: "FRD",

          iron: "100%",
        },
      ],
    };
  },
};
</script>