/* eslint-disable no-unused-vars */

export class Bus {
  constructor(routeID, busID, routeDir) {
    this.routeID = routeID
    this.busID = busID
    this.routeDir = routeDir
  }

  busStops = []

  getLocationInformation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return position.coords;
    })
  }

  getLoc() {
    return navigator.geolocation.getCurrentPosition.coords;
  }
}
