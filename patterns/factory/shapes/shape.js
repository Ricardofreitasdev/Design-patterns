class Shape {
  constructor() {
    this.color = null;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    throw new Error("O método draw() deve ser implementado nas subclasses.");
  }
}

export default Shape;
