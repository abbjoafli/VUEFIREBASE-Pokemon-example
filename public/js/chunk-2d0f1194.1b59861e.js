(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1194"],{"9ed6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-container",[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),0==e.ForgotPass?s("div",[s("v-text-field",{attrs:{"append-icon":e.show1?"visibility":"visibility_off",rules:e.passwordRules,type:e.show1?"text":"password",name:"input-10-1",label:"Lösenord",counter:"",required:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("v-btn",{staticClass:"mt-2",attrs:{dark:"",disabled:!e.valid,loading:e.loading,color:"success"},on:{click:e.login}},[s("v-icon",{attrs:{left:""}},[e._v("account_box")]),e._v("Logga in\n        ")],1),s("v-btn",{staticClass:"mt-2",attrs:{dark:"",disabled:!e.valid,loading:e.loading,color:"indigo darken-3"},on:{click:e.registera}},[s("v-icon",{attrs:{left:""}},[e._v("done")]),e._v("Registera\n        ")],1),s("v-flex",[s("p",{on:{click:function(t){e.ForgotPass=!0}}},[e._v("Glömt lösenord?")])])],1):s("div",[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{staticClass:"mt-2",attrs:{depressed:"",disabled:!e.valid,loading:e.loading,color:"success"},on:{click:e.ResetPassword}},[s("v-icon",{attrs:{left:""}},[e._v("vpn_key")]),e._v("\n            Begär nytt lösenord!")],1)],1),s("v-flex",[s("p",{on:{click:function(t){e.ForgotPass=!1}}},[e._v("Tillbaka")])])],1)],1)],1)],1)},o=[],r=s("dc59"),a=s("2f62");function i(e,t){var s=Object.keys(e);return Object.getOwnPropertySymbols&&s.push.apply(s,Object.getOwnPropertySymbols(e)),t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(s,!0).forEach(function(t){c(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var d={data:function(){return{ForgotPass:!1,show1:!1,loading:!1,valid:!0,password:"",email:"",passwordRules:[function(e){return!!e||"Obligatoriskt fält"}],emailRules:[function(e){return!!e||"Du måste fylla i E-mail"},function(e){return/.+@.+/.test(e)||"Fel format"}]}},watch:{},computed:{},methods:l({},Object(a["b"])(["showErrorSnackbar","showSuccessSnackbar"]),{registera:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,r["b"].auth().createUserWithEmailAndPassword(this.email,this.password).then(function(){e.loading=!1,e.showSuccessSnackbar("Konto skapat för ".concat(e.email))}).then(function(){e.$router.replace("/homeuser")}).catch(function(t){e.loading=!1;var s=t.message||"Någonting gick fel";e.showErrorSnackbar(s),e.reset()}))},login:function(){var e=this;if(this.$refs.form.validate()){this.loading=!0;var t=this,s=r["b"].auth();s.signInWithEmailAndPassword(this.email,this.password).then(function(){e.loading=!1,console.log("logga in!"),t.showSuccessSnackbar("Välkommen ".concat(e.email,", du loggas nu in")),e.$router.replace("/homeuser")}).catch(function(t){e.loading=!1,e.showErrorSnackbar(t.message),e.reset()})}},ResetPassword:function(){var e=r["b"].auth(),t=this;e.sendPasswordResetEmail(this.email).then(function(){t.showSuccessSnackbar("Ett nytt lösenord har skickats till din mail."),t.ForgotPass=!1}).catch(function(e){console.log(e),this.showErrorSnackbar(e.message),console.log("Error"+e)})},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}})},u=d,f=s("2877"),h=Object(f["a"])(u,n,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0f1194.1b59861e.js.map