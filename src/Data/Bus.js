/* eslint-disable no-unused-vars */

export class Bus {
  constructor(
    uid,
    routeID,
    numberPlate,
    routeDir,
    organisationName,
    desA,
    desB
  ) {
    this.role = "bus"
    this.uid = uid
    this.routeID = routeID
    this.numberPlate = numberPlate
    this.routeDir = routeDir
    this.organisationName = organisationName
    this.desA = desA
    this.desB = desB
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
