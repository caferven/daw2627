/*
 * Calcula con métodos de `Math`:
 *   - `rounded`: `value` redondeado a `decimals` decimales (usa `round` y `pow`).
 *   - `hypotenuse`: hipotenusa del triángulo rectángulo de catetos `a` y `b`
 *     (usa `sqrt` y `pow`).
 *
 * Salida esperada:
 *   3.14
 *   5
 *   floor: ?, ceil: ?, round: ?
 */

const value = Math.PI;
const decimals = 2;
const factor = Math.pow(10, decimals);
const rounded = Math.round(value * factor) / factor;
console.log(rounded);

const a = 3;
const b = 4;
const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(hypotenuse);

console.log(`floor: ${Math.floor(-2.5)}, ceil: ${Math.ceil(-2.5)}, round: ${Math.round(-2.5)}`);
