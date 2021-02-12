import firebase from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDk0M7LaK4ZtjjqU36vALUl0EzoZsnSgzM",
  authDomain: "pokemonexempel.firebaseapp.com",
  projectId: "pokemonexempel",
  storageBucket: "pokemonexempel.appspot.com",
  messagingSenderId: "534391915569",
  appId: "1:534391915569:web:11b5f9d8db0efc90f84110"}
var firebaseConfig = {

}
const settings = {
  timestampsInSnapshots: true
}

firebase.initializeApp(config)
const db = firebase.firestore()
db.settings(settings)

export default db
export { firebase }
