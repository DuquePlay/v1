import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({


    theme: {
        themes: {
            light: {
                primario: "#009A3E", // #E53935
                secundario: "#94C11F", // #FFCDD2
                terciario: "#FED300", // #3F51B5
                cuaternario: "#FBB900",
                contentmenu: "#000000",
                quinario: "#ECECF5",
                sextario: "#FFFFFF",
                contornos: "#8F90A6",
                estrellas: "#EFB810",
                estrellas2: "#C4C4C4",
            },
        },
    },
});


