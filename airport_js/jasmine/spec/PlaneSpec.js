describe("Plane", function () {
  var plane
  var airport

  beforeEach(function () {
    plane = new Plane;
    airport = {};
  })

  it("can land at an airport and takeoff", function () {
    plane.land(airport)
    expect(plane.airport).toEqual(airport)
    plane.takeoff()
    expect(plane.airport).toBeNull();
  });

  it("knows if it's flying", function (){
    plane.land(airport)
    expect(plane.isFlying()).toEqual(false)
    plane.takeoff()
    expect(plane.isFlying()).toEqual(true)
  } )


});
