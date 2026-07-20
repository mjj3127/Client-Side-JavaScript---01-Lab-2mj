"use strict";

const output = document.querySelector("#output");

/* STEP 1: Parent Coffee class */
class Coffee {
  constructor(size, isDecaf) {
    this.size = size;
    this.isDecaf = isDecaf;
  }

  /* Parent class method */
  serveIt() {
    output.innerHTML += `Here is your ${this.size} ${this.isDecaf ? "Decaf" : "Regular"} coffee.<br>`;
  }
}

/* STEP 2: Create a Coffee object */
const coffee1 = new Coffee("Medium", false);

/* STEP 3: Call the parent method */
coffee1.serveIt();

/* STEP 4: Create a subclass */
class Mocha extends Coffee {
  constructor(size, isDecaf, shots, flavour) {
    super(size, isDecaf);

    this.shots = shots;
    this.flavour = flavour;
  }

  /* Custom subclass method */
  mochaDesc() {
    return `A ${this.size} ${this.isDecaf ? "Decaf" : "Regular"} Mocha with ${this.shots} espresso shot(s) and ${this.flavour} syrup.`;
  }
}

/* STEP 5: Create at least two Mocha objects */
const mocha1 = new Mocha("Large", false, 2, "Caramel");
const mocha2 = new Mocha("Small", true, 1, "Vanilla");

/* STEP 6: Call inherited method and custom method */
mocha1.serveIt();
output.innerHTML += mocha1.mochaDesc() + "<br><br>";

mocha2.serveIt();
output.innerHTML += mocha2.mochaDesc() + "<br><br>";

/* STEP 7: Create another object for testing */
const mocha3 = new Mocha("Medium", false, 3, "Hazelnut");

mocha3.serveIt();
output.innerHTML += mocha3.mochaDesc() + "<br><br>";

/*
Console Testing

mocha3.serveIt();
console.log(mocha3.mochaDesc());
*/
