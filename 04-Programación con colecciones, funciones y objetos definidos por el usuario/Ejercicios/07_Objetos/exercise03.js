/*
 * Escribe la clase `Rectangle` con un constructor que reciba `width` y
 * `height`. Crea `small` (3 × 4) y `big` (5 × 5) y calcula el área de cada uno
 * a partir de sus propiedades.
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const small = new Rectangle(3, 4);
const big = new Rectangle(5, 5);

let smallArea = small.width * small.height;
let bigArea = big.width * big.height;

console.log(`Small: ${smallArea}`);
console.log(`Big: ${bigArea}`);
