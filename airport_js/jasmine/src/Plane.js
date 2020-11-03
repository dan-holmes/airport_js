class Plane {
  constructor() {
    this.airport
  }

  land(airport) {
    this.airport = airport
  }

  takeoff() {
    this.airport = null
  }
}