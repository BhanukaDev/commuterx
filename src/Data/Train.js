/* eslint-disable no-unused-vars */

export class Train {
  constructor(uid, trainID, start, stop) {
    this.role = "Bus"
    this.uid = uid
    this.trainID = trainID
    this.start = start
    this.stop = stop
  }

  trainStations = []

  getLocationInformation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return position.coords
    })
  }
}
