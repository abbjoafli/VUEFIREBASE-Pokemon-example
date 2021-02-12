import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#f0853e',
    secondary: '#e8e8e8',
    accent: '#9C27B0',
    error: '#FF5252',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#F2C037',
    first: '#faf323',
    second: '#dbdbd3',
    third: '#dba339',
    dark: '#1d1d1d'
  },
  customProperties: true,
  iconfont: 'md'
})
