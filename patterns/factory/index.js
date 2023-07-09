// Estratégias
import RectangleStrategy from "./factories/strategies/rectangle-strategy.js";
import TriangleStrategy from "./factories/strategies/triangle-strategy.js";
import CircleStrategy from "./factories/strategies/circle-strategy.js";

// Fábricas
import ShapeFactory from "./factories/shape-factory.js";

// Cria instâncias das estratégias
const rectangleStrategy = new RectangleStrategy();
const triangleStrategy = new TriangleStrategy();
const circleStrategy = new CircleStrategy();

// Cria fábricas de formas usando as estratégias correspondentes
const rectangleFactory = new ShapeFactory(rectangleStrategy);
const triangleFactory = new ShapeFactory(triangleStrategy);
const circleFactory = new ShapeFactory(circleStrategy);

// Cria formas usando as fábricas
const rectangle = rectangleFactory.createShape(10, 20);
const triangle = triangleFactory.createShape(4, 12);
const circle = circleFactory.createShape(10);

rectangle.setColor("azul");
rectangle.draw();

circle.setColor("azul");
circle.draw();

triangle.setColor("azul");
triangle.draw();
