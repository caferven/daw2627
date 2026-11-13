/*
 * Usa `reduce`:
 *   - `total`: la suma de los precios de `cart`.
 *   - `best`: la puntuación más alta de `scores` (sin usar Math.max).
 */

const cart = [12.5, 7.5, 30];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log(`Total: ${total}€`);

const scores = [45, 82, 67, 91, 30];
let best = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
console.log(`Best: ${best}`);
