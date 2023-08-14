export class Commuter {
  constructor(uid, displayName, email, photoURL, phoneNumber) {
    this.role = "commuter"
    this.uid = uid
    this.name = displayName
    this.email = email
    this.photoURL = photoURL
    this.phoneNumber = phoneNumber
  }

  getLoc() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
}
