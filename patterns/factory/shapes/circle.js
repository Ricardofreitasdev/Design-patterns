import Shape from "./shape.js";

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  draw() {
    console.log(
      `Desenhando um círculo de raio ${this.radius} na cor ${this.getColor()}.`
    );
  }
}

export default Circle;
