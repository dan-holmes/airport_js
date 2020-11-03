describe("Airport", function () {
  var plane
  var airport

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land'])
    plane2 = jasmine.createSpyObj('plane', ['land'])
  })

  it("can land a plane", function () {
    airport.land(plane)
    expect(airport.planes[0]).toEqual(plane)
    expect(plane.land).toHaveBeenCalled()
  })

  it("can let a plane take off", function () {
    airport.land(plane)
    expect(plane.land).toHaveBeenCalled
    airport.takeoff(plane)
    expect(plane.takeoff).toHaveBeenCalled
    expect(airport.planes.length).toEqual(0)
  })

  it("won't land a plane if at capacity", function () {
    airport.land(plane)
    expect(plane.land).toHaveBeenCalled
    expect(airport.land(plane2)).toThrow(new Error("Airport is full."))
  })

});
