describe("Airport", function () {
  var plane
  var airport

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land'])
    plane2 = jasmine.createSpyObj('plane', ['land'])
    plane.land.and.returnValue('test');
  })

  it("can land a plane", function () {
    result = airport.land(plane)
    expect(result).toEqual('test2')
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
    for (let i = 1; i <= CAPACITY; i++) {
    const clonePlane = { ...plane };
    airport.land(clonePlane)
    }
    console.log(airport)
    expect(function() {airport.land(plane)}).toThrowError(/Airport is full/)
  })

});
