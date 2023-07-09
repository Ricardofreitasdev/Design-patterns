import Shape from "./shape.js";

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log(
      `Desenhando um retângulo de largura ${this.width} e altura ${
        this.height
      } na cor ${this.getColor()}.`
    );
  }
}

export default Rectangle;
