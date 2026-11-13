/*
 * Usa `filter`:
 *   - `evens`: los números pares de `numbers`.
 *   - `longWords`: las palabras de `words` con más de 3 letras.
 */

const numbers = [3, 8, 12, 5, 7, 20];
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

const words = ["sol", "montaña", "mar", "bosque", "río"];
let longWords = words.filter((word) => word.length > 3);
console.log(longWords);
