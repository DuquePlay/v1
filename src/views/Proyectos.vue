<template>
  <div>
    <v-col id="recursos" :style="cssProps">
      <v-app>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
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
        { text: "Programa de Pagos CIE / Conciliación", value: "cons" },
        { text: "Dondé Móvil", value: "dm" },
        { text: "FlexiPago", value: "fp" },
        { text: "CapacitaciónLakin", value: "CL" },
        { text: "Widget", value: "WD" },
        { text: "SPEI", value: "SP" },
        { text: "Desempeño Protegido", value: "DP" },
        { text: "Motor SPEI / Monitor SPEI", value: "MSP" },
        { text: "IFRS9", value: "S9" },
        { text: "Galileo", value: "GA" },
      ],
      desserts: [
        {
          name: "Erick Alejandro Chi Flores",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "100%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Irving Kadafi Sologuren Vazquez",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "100%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Roger Esau Castillo Chin",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "100%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Eduardo Humberto Perez Becerril",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "40%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "60%",
          GA: "0%",
        },
        {
          name: "Angel Eduardo Cupul Osorio",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "50%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "50%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Luis Javier Dzib Chavez",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "0%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Alvaro Emmanuel Solis Aranda",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "0%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "100%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Carlos Manuel Canul Aguilar",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "100%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Herman Fernando Sánchez Santiago",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "100%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "0%",
          S9: "0%",
          GA: "0%",
        },
        {
          name: "Joaquin Gualberto Gamboa Perez",
          cons: "0%",
          dm: "0%",
          fp: "0%",
          CL: "0%",
          WD: "0%",
          SP: "0%",
          DP: "0%",
          MSP: "100%",
          S9: "0%",
          GA: "0%",
        },
      ],
    };
  },
};
</script>