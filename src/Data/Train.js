/* eslint-disable no-unused-vars */

export class Train {
  constructor(uid, trainName, trainID, start, stop) {
    this.role = "Train"
    this.uid = uid
    this.trainName = trainName
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
