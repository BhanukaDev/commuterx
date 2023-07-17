import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  // later replace these values with env variables
  apiKey: "AIzaSyATa2evqz0DFLnIcX1FjJtlWYtqiDdFWLA",
  authDomain: "commuterx.firebaseapp.com",
  projectId: "commuterx",
  storageBucket: "commuterx.appspot.com",
  messagingSenderId: "621006430840",
  appId: "1:621006430840:web:110e9ff68ba6334b2d438d",
})

export const auth = app.auth()
export default app
