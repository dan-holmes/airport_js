const CAPACITY = 10;

class Airport {

  constructor() {
    this.planes = []
  }

  land(plane) {
    if (this.isFull()) {
      throw new Error('Airport is full.')
    }
    this.planes.push(plane)
    return plane.land(self)
  }

  takeoff(plane) {
    plane.takeoff
    const index = this.planes.indexOf(plane)
    this.planes.splice(index, 1)
  }

  isFull() {
    return this.planes.length == CAPACITY
  }
}
