class Airport {
  constructor() {
    this.planes = []
  }

  land(plane) {
    plane.land(self)
    this.planes.push(plane)
  }

  takeoff(plane) {
    plane.takeoff
    const index = this.planes.indexOf(plane)
    this.planes.splice(index, 1)
  }
}