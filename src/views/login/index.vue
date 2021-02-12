<template>
  <div>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <div v-if="ForgotPass == false">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Lösenord"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn
            class="mt-2"
            dark
            :disabled="!valid"
            :loading="loading"
            color="success"
            @click="login"
          >
            <v-icon left>account_box</v-icon>Logga in
          </v-btn>

          <v-btn
            class="mt-2"
            dark
            :disabled="!valid"
            :loading="loading"
            color="indigo darken-3"
            @click="registera"
          >
            <v-icon left>done</v-icon>Registera
          </v-btn>

          <v-flex>
            <p @click="ForgotPass = true">Glömt lösenord?</p>
          </v-flex>
        </div>
        <div v-else>
          <v-flex xs12>
            <v-btn
              class="mt-2"
              depressed
              :disabled="!valid"
              :loading="loading"
              color="success"
              @click="ResetPassword"
            >
              <v-icon left>vpn_key</v-icon>
              Begär nytt lösenord!</v-btn
            >
          </v-flex>
          <v-flex>
            <p @click="ForgotPass = false">Tillbaka</p>
          </v-flex>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    ForgotPass: false,
    show1: false,
    loading: false,
    valid: true,
    password: "",
    email: "",
    passwordRules: [(v) => !!v || "Obligatoriskt fält"],
    emailRules: [
      (v) => !!v || "Du måste fylla i E-mail",
      (v) => /.+@.+/.test(v) || "Fel format",
    ],
  }),
  watch: {},
  computed: {},
  methods: {
    ...mapActions(["showErrorSnackbar", "showSuccessSnackbar"]),
    registera() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.loading = false;
            this.showSuccessSnackbar(`Konto skapat för ${this.email}`);
          })
          .then(() => {
            this.$router.replace("/homeuser");
          })
          .catch((error) => {
            this.loading = false;
            const errorMessage = error.message || "Någonting gick fel";
            this.showErrorSnackbar(errorMessage);
            this.reset();
          });
      }
    },
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let temp = this;
        var auth = firebase.auth();
        auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.loading = false;
            console.log("logga in!");
            temp.showSuccessSnackbar(
              `Välkommen ${this.email}, du loggas nu in`
            );
            this.$router.replace("/homeuser");
          })
          .catch((err) => {
            this.loading = false;
            this.showErrorSnackbar(err.message);
            this.reset();
          });
      }
    },

    ResetPassword() {
      var auth = firebase.auth();
      let temp = this;
      auth
        .sendPasswordResetEmail(this.email)
        .then(function () {
          temp.showSuccessSnackbar(
            `Ett nytt lösenord har skickats till din mail.`
          );

          temp.ForgotPass = false;
        })
        .catch(function (error) {
          console.log(error);
          this.showErrorSnackbar(error.message);
          console.log("Error" + error);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>
