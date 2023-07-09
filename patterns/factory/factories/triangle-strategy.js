import Triangle from "../shapes/triangle.js";

class TriangleStrategy {
  createShape(...args) {
    return new Triangle(...args);
  }
}

export default TriangleStrategy;
