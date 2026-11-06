/*
 * Escribe tres funciones, cada una de una forma distinta:
 *   - `rectangleArea(width, height)`: declaración de función.
 *   - `triangleArea(base, height)`: expresión de función.
 *   - `squareArea(side)`: función flecha.
 */

console.log(`Before declaration: ${rectangleArea(1, 2)}`);

function rectangleArea(width, height) {
  return width * height;
}

const triangleArea = function (base, height) {
  return (base * height) / 2;
};

const squareArea = (side) => side * side;

console.log(`Rectangle: ${rectangleArea(3, 5)}`);
console.log(`Triangle: ${triangleArea(6, 4)}`);
console.log(`Square: ${squareArea(4)}`);
