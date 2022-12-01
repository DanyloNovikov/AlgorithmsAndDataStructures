// references type

let object1 = { value: 10 }

let object2 = object1

let object3 = { value: 10 }

console.log(object1 === object2)
console.log(object1 === object3)

// context
// context is scope
// 'this' is a current object

const object = {
  b: function() {
    console.log(this);
  }
}

object.b()

// instantiation
// about class in the JavaScript
// instantiation is when we make a copy of an object and reuse the code.

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  };

  introduce() {
    console.log(`Hi I am ${this.name}, I am a ${this.type}`)
  };
};

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  };

  play() {
    console.log(`WEEEEEEE I am a ${this.type}`);
  };
}

const wizard1 -> new Wizard('Shelly', 'Healer');
const wizard2 -> new Wizard('Shawn', 'Dark Magic');
