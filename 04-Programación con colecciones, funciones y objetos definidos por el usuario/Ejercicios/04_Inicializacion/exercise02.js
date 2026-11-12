/*
 * Partiendo del array vacío `scores`:
 *   - Añade con `push` las puntuaciones 7, 9 y 4, una en cada llamada.
 *     Guarda en `newLength` lo que devuelve la última llamada.
 *   - Añade 10 y 6 con una sola llamada a `push`.
 *   - Recupera `lastIndex`: el índice del último elemento.
 */

const scores = [];

scores.push(7);
scores.push(9);
let newLength = scores.push(4);
console.log(scores);
console.log(`Length after last push: ${newLength}`);

scores.push(10, 6);
console.log(scores);

let lastIndex = scores.length - 1;
console.log(`Last index: ${lastIndex}`);
