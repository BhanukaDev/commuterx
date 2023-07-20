/* eslint-disable no-unused-vars */

export class Train {
  constructor(trainID, start, stop) {
    this.trainID = trainID
    this.start = start
    this.stop = stop
  }

  trainStations = []

  getLocationInformation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return position.coords;
    })
  }
}
