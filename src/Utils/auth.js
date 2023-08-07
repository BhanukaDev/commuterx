import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import app from "../firebase"

export const auth = getAuth(app)

const authProvider = new GoogleAuthProvider()

// export const signInWithGoogle = () => {
//   return signInWithPopup(auth, authProvider)
// }
// export const signUp = (navigate) => {
//   signInWithGoogle()
//     .then((result) => {
//       const isNewUser = result._tokenResponse?.isNewUser
//       console.log(result)
//       if (isNewUser) {
//         setTimeout(() => {
//           setTimeout(navigate, 0, "/profile", { replace: true })
//         }, 10)
//       } else {
//         setTimeout(() => {
//           setTimeout(navigate, 0, "/showmap", { replace: true })
//         }, 10)
//       }
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }
// export const signInWithToken = (userCredential) => {
//   console.log(authProvider)
//   signInWithCredential(auth, GoogleAuthProvider.credential(userCredential))
// }

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, authProvider)
    .then((result) => {
      const isNewUser = result._tokenResponse?.isNewUser
      console.log(result)
      if (isNewUser) {
        setTimeout(() => {
          setTimeout(navigate, 0, "/profile", { replace: true })
        }, 10)
      } else {
        setTimeout(() => {
          setTimeout(navigate, 0, "/showmap", { replace: true })
        }, 10)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
export const logOut = (navigate) => {
  signOut(auth)
  setTimeout(() => navigate("/showmap"), 10)
}
