import firestore, { firebase } from "@/firebase";

export default {
  state: {
    user: null,
    snackbar: false,
    snackbarText: "",
    snackbarColor: ""
  },
  getters: {
    user: state => state.user,
    userDisplayName: state => (state.user ? state.user.email : "Gäst"), //Roligare om man faktiskt har en collection för användardata där man kan ha ett namn.
    uid: state => state.user.uid,
    snackbar: state => state.snackbar,
    snackbarText: state => state.snackbarText,
    snackbarColor: state => state.snackbarColor
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SHOW_SNACKBAR(state, show) {
      state.snackbar = show;
    },
    SET_SNACKBAR_TEXT(state, text) {
      state.snackbarText = text;
    },
    SET_SNACKBAR_COLOR(state, color) {
      state.snackbarColor = color;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    logoutUser({ commit }) {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          commit("SET_USER", null);
        });
    },
    SHOWSNACKBAR({ commit }, show) {
      commit("SHOW_SNACKBAR", show);
    },
    showPostSnackbar({ commit }) {
      commit("SET_SNACKBAR_TEXT", "Fråga skapad");
      commit("SET_SNACKBAR_COLOR", "success");
      commit("SHOW_SNACKBAR", true);
    },
    showDeleteSnackbar({ commit }) {
      commit("SET_SNACKBAR_TEXT", "Fråga borttagen");
      commit("SET_SNACKBAR_COLOR", "error");
      commit("SHOW_SNACKBAR", true);
    },
    showPutSnackbar({ commit }) {
      commit("SET_SNACKBAR_TEXT", "Fråga uppdaterad");
      commit("SET_SNACKBAR_COLOR", "warning");
      commit("SHOW_SNACKBAR", true);
    },
    showSuccessSnackbar({ commit }, msg) {
      commit("SET_SNACKBAR_TEXT", msg);
      commit("SET_SNACKBAR_COLOR", "success");
      commit("SHOW_SNACKBAR", true);
    },
    showOwnSnackbar({ commit }, data) {
      commit("SET_SNACKBAR_TEXT", data.msg);
      commit("SET_SNACKBAR_COLOR", data.color);
      commit("SHOW_SNACKBAR", true);
    },
    showWarningSnackbar({ commit }, msg) {
      commit("SET_SNACKBAR_TEXT", msg);
      commit("SET_SNACKBAR_COLOR", "warning");
      commit("SHOW_SNACKBAR", true);
    },
    showErrorSnackbar({ commit }, msg) {
      commit("SET_SNACKBAR_TEXT", msg);
      commit("SET_SNACKBAR_COLOR", "error");
      commit("SHOW_SNACKBAR", true);
    }
  }
};
