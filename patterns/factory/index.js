import RectangleStrategy from "./factories/rectangle-strategy.js";
import CircleStrategy from "./factories/circle-strategy.js";
import ShapeFactory from "./factories/shape-factory.js";
import TriangleStrategy from "./factories/triangle-strategy.js";

const rectangleStrategy = new RectangleStrategy();
const circleStrategy = new CircleStrategy();
const triangleStrategy = new TriangleStrategy();

const rectangleFactory = new ShapeFactory(rectangleStrategy);
const circleFactory = new ShapeFactory(circleStrategy);
const triangleFactory = new ShapeFactory(triangleStrategy);

const rectangle = rectangleFactory.createShape(10, 20);
rectangle.setColor("azul");
rectangle.draw();

const circle = circleFactory.createShape(10);
circle.setColor("azul");
circle.draw();

const triangle = triangleFactory.createShape(4, 12);
triangle.setColor("azul");
triangle.draw();
