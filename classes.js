class OOPs {
    constructor(name) {
        this.name = name;
    }

    get langName() {
        return this.name
    }

    set langName(x) {
        this.name = x;
    }

    hello() {
        console.log(`Hello ${this.name}`)
    }
}

let obj = new OOPs('JavaScript')
console.log(obj.name);

obj.langName = 'Java';
console.log(obj.name)


// Declaration

class Rectangle {
    constructor(hight, width) {
        this.height = height;
        this.width = width;
    }
}

get area() {
    return this.calcArea();
}

calcArea() {
    return this.height * this.width;
}

getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
}

const square = new Rectangle(10, 10);

console.log(square.area);
console.log([...square.getSides()])

// // Expression; the class is anonymous but assigned to a variable

const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };