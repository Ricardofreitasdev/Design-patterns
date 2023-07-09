import Circle from "../../shapes/circle.js";

class CircleStrategy {
  createShape(...args) {
    return new Circle(...args);
  }
}

export default CircleStrategy;
