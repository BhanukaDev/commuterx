/* eslint-disable no-unused-vars */

export class Bus {
  constructor(uid, routeID, numberPlate, routeDir) {
    this.uid = uid
    this.routeID = routeID
    this.numberPlate = numberPlate
    this.routeDir = routeDir
  }

  busStops = []

  getLocationInformation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position)
        },
        (error) => {
          reject(error)
        }
      )
    })
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
