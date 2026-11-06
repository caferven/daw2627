/*
 * Con el array `colors`:
 *   - `first`: el primer elemento.
 *   - `last`: el último elemento sin usar su índice explícitamente.
 *   - `total`: el número de elementos.
 *   - Cambia el segundo color por "purple" y muestra el array.
 */

const colors = ["red", "green", "blue", "yellow"];

let first = colors[0];
console.log(`First: ${first}`);

let last = colors[colors.length - 1];
console.log(`Last: ${last}`);

let total = colors.length;
console.log(`Total: ${total}`);

colors[1] = "purple";
console.log(colors);
