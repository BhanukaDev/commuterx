import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
  signInWithPopup,
} from "firebase/auth"
import app from "../firebase"

export const auth = getAuth(app)

const authProvider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, authProvider)
    .then((result) => {
      console.log(result)
      // localStorage.setItem("JWTTOKEN", result.user.accessToken)
      // localStorage.setItem("JWTTOKEN", result._tokenResponse.idToken)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const signInWithToken = (userCredential) => {
  console.log(authProvider)
  signInWithCredential(auth, GoogleAuthProvider.credential(userCredential))
}
