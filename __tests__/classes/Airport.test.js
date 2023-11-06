const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");

describe("Unit Test 1", () => {
  beforeEach(() => {
    airportInstance = new Airport("London Heathrow", [
      new Plane(),
      new Plane(),
    ]);
  });
  test("name is assigned to the correct value", () => {
    expect(airportInstance.name).toBe("London Heathrow");
  });
  test("planes is assigned to the correct value", () => {
    expect(airportInstance.getPlanes()).toHaveLength(2);
  });

  test("airportCode is assigned to the correct value", () => {
    expect(Airport.airportCode).toEqual("LHR"); // static property!
  });

  test("addPlane(plane) adds plane to the planes array", () => {
    const newPlane = new Plane();
    airportInstance.addPlane(newPlane);
    expect(airportInstance.getPlanes()).toContain(newPlane);
  });
});

describe("Unit Test 2", () => {
  test("planes initialises as an empty array", () => {
    const emptyAirport = new Airport();
    expect(emptyAirport.getPlanes()).toEqual([]);
  });
});
