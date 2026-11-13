/*
 * Encadena `filter`, `map` y `reduce` en una sola expresión para calcular
 * `total`: la suma de los precios de `prices` mayores que 20, después de
 * aplicarles un 10 % de descuento a cada uno.
 */

const prices = [15, 40, 25, 8, 60];

let total = prices
  .filter((price) => price > 20)
  .map((price) => price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log(`Total: ${total}€`);
console.log(prices);
