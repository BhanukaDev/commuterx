import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import app from "../firebase"

const auth = getAuth(app)

const authProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, authProvider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}
