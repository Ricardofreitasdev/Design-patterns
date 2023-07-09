import Shape from "./shape.js";

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  draw() {
    console.log(
      `Desenhando um triângulo de base ${this.base} e altura ${
        this.height
      } na cor ${this.getColor()}.`
    );
  }
}

export default Triangle;
