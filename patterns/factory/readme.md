# Shape Factory

O projeto Shape Factory é um exemplo de utilização do padrão Factory e Strategy para criar diferentes formas geométricas.

- O arquivo `index.js` é o ponto de entrada do projeto, onde ocorre a criação dos objetos Shape utilizando a Factory e as Strategies.
- A pasta `shapes` contém as definições das classes relacionadas às formas (Shape, Rectangle, Circle e Triangle).
- A pasta `factories` contém as definições das classes relacionadas à fábrica e às estratégias (ShapeFactory, RectangleStrategy, CircleStrategy e TriangleStrategy).

## Funcionamento

O projeto permite criar objetos das seguintes formas geométricas:

- Retângulo: definido pela largura e altura.
- Círculo: definido pelo raio.
- Triângulo: definido pela base e altura.

Ao criar objetos das formas utilizando a Factory, é possível definir a cor da forma e chamá-la para desenhar.
