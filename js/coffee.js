"use strict";

const output = document.querySelector("#output");

/* Parent Coffee class */
class Coffee {
  constructor(size, isDecaf) {
    this.size = size;
    this.isDecaf = isDecaf;
  }

  serveIt() {
    output.innerHTML += `
      Here is your ${this.size}
      ${this.isDecaf ? "Decaf" : "Regular"} coffee.<br>
    `;
  }
}

/* Mocha subclass */
class Mocha extends Coffee {
  constructor(size, isDecaf, shots, flavour) {
    super(size, isDecaf);

    this.shots = shots;
    this.flavour = flavour;
  }

  mochaDesc() {
    return `A ${this.size} ${
      this.isDecaf ? "decaf" : "regular"
    } Mocha with ${this.shots} shot(s) and ${this.flavour} syrup.`;
  }
}

/* Create at least two Mocha objects */
const mocha1 = new Mocha("Large", false, 2, "Caramel");
const mocha2 = new Mocha("Small", true, 1, "Vanilla");

/* Call inherited and custom methods */
mocha1.serveIt();
output.innerHTML += `${mocha1.mochaDesc()}<br><br>`;

mocha2.serveIt();
output.innerHTML += `${mocha2.mochaDesc()}<br><br>`;
