/* eslint-disable no-unused-vars */

export class Bus {
  constructor(routeID, busID, routeDir) {
    this.routeID = routeID
    this.busID = busID
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
