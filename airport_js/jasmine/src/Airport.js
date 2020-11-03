class Airport {
  constructor() {
    this.planes = []
  }

  land(plane) {
    if (this.isFull()) {
      throw new Error('Airport is full.')
    }
    plane.land(self)
    this.planes.push(plane)
  }

  takeoff(plane) {
    plane.takeoff
    const index = this.planes.indexOf(plane)
    this.planes.splice(index, 1)
  }

  isFull() {
    return this.planes.length == 1
  }
}
