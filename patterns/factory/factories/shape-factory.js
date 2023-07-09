class ShapeFactory {
  constructor(strategy) {
    this.strategy = strategy;
  }

  createShape(...args) {
    return this.strategy.createShape(...args);
  }
}

export default ShapeFactory;
