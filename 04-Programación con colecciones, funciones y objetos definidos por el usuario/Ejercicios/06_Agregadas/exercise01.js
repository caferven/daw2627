/*
 * Usa `map`:
 *   - `fahrenheit`: cada temperatura de `celsius` pasada a Fahrenheit
 *     (F = C * 9 / 5 + 32).
 *   - `upperNames`: cada nombre de `names` en mayúsculas.
 */

const celsius = [0, 25, 100, -10];
let fahrenheit = celsius.map((c) => c * 9 / 5 + 32);
console.log(fahrenheit);

const names = ["ana", "luis", "marta"];
let upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames);

console.log(names);
