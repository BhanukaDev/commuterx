/* eslint-disable no-unused-vars */

export class Bus {
  constructor(routeID, busID, routeDir) {
    this.routeID = routeID;
    this.busID = busID;
    this.routeDir = routeDir;
  }

  busStops = [];

  getLocationInformation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
    });
  }
}
