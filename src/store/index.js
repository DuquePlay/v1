import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist";


Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage,
  reducer: (state) => ({

    usuario: state.usuario,

    //tokenKong: state.tokenKong,
  }),
});

export default new Vuex.Store({
  state: {
    usuario: null,

    /*tokenKong: {
      access_token: "",
      expires_in: 0,
      refresh_token: "",
      token_type: "",
    },*/

  },
  mutations: {
    setUsuario(state, value) {
      state.cliente = value;
    },
  },

  actions: {
    setUsuario(context) {
      context.commit("setUsuario", context);
    },
  },
  plugins: [vuexLocal.plugin],
});