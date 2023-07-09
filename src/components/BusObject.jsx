export class Bus {
  constructor(routeno, numberplate, organisation) {
    this.routeNo = routeno;
    this.numberPlate = numberplate;
    this.organisation = organisation;
  }

  getLocationInformation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
    });
  }
}
