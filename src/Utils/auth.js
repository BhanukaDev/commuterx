import {
  GoogleAuthProvider,
  deleteUser,
  getAuth,
  reauthenticateWithPopup,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import app from "../firebase"
import { addToUniteDB } from "./database"

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

export const signInWithGoogle = async (navigate) => {
  let isNewUser = null
  await signInWithPopup(auth, authProvider)
    .then(async (result) => {
      isNewUser = result._tokenResponse?.isNewUser

      if (isNewUser) {
        await addToUniteDB(auth.currentUser.uid, "commuter")
        // await addCommuterToDatabase()

        setTimeout(() => {
          setTimeout(navigate, 0, "/registration", { replace: true })
        }, 10)
      } else {
        setTimeout(() => {
          setTimeout(navigate, 0, "/busmap", { replace: true })
        }, 10)
      }
    })
    .catch((error) => {
      console.log(error)
    })

  return isNewUser
}
export const logOut = (navigate) => {
  signOut(auth)
    .then(() => {
      setTimeout(() => navigate("/login"), 10)
    })
    .catch((error) => console.log(error))
}
export const deleteCurrentUser = (navigate) => {
  deleteUser(auth.currentUser)
    .then(() => {
      setTimeout(() => navigate("/"), 10)
    })
    .catch((err) => {
      console.log(err)
      reauthenticateWithPopup(auth.currentUser, authProvider).then(() => {
        deleteCurrentUser(navigate)
      })
    })
}

export const getUID = () => {
  return auth.currentUser?.uid
}
