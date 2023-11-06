class Airport {
  #plane;
  static airportCode = "LHR";
  constructor(name, planes = []) {
    this.name = name;
    this.#plane = planes;
  }

  getPlanes() {
    return this.#plane;
  }

  addPlane(plane) {
    this.#plane.push(plane);
  }
}

module.exports = Airport;
