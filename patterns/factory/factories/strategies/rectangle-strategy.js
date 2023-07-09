import Rectangle from "../../shapes/retangle.js";

class RectangleStrategy {
  createShape(...args) {
    return new Rectangle(...args);
  }
}

export default RectangleStrategy;
