"use strict";

const output = document.querySelector("#output");

/* STEP 1: Coffee class */
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

/* STEP 3 & 4: Call the inherited method */
coffee1.serveIt();

/* STEP 5: Create a subclass */
class Mocha extends Coffee {
  constructor(size, isDecaf, shots, flavour) {
    // Call the parent constructor
    super(size, isDecaf);

    // Unique subclass properties
    this.shots = shots;
    this.flavour = flavour;
  }

  /* Custom subclass method */
  mochaDesc() {
    const coffeeType = this.isDecaf ? "decaf" : "regular";

    return `A ${this.size} ${coffeeType} Mocha with ${this.shots} espresso shot(s) and ${this.flavour} syrup.`;
  }
}

/* STEP 6: Create two Mocha objects */

const mocha1 = new Mocha("Large", false, 2, "Caramel");

const mocha2 = new Mocha("Small", true, 1, "Vanilla");

/* STEP 7: Display the results */

mocha1.serveIt();
output.innerHTML += mocha1.mochaDesc() + "<br><br>";

mocha2.serveIt();
output.innerHTML += mocha2.mochaDesc() + "<br><br>";

/* STEP 8:
Create another object and test it.
This can also be satisfied the console exercise if we want
to try the methods there.
*/

const mocha3 = new Mocha("Medium", false, 3, "Hazelnut");

mocha3.serveIt();
output.innerHTML += mocha3.mochaDesc() + "<br><br>";

/*
It  can also be tested these in the browser console:

mocha3.serveIt();
console.log(mocha3.mochaDesc());

*/
