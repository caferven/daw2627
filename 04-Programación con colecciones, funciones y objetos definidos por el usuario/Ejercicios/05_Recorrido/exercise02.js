/*
 * Ordenación:
 *   - `ascending`: copia de `prices` ordenada de menor a mayor.
 *   - `descending`: copia de `prices` ordenada de mayor a menor.
 *   - Muestra `prices` para comprobar que no ha cambiado.
 *   - Ordena `prices` con `sort()` sin argumentos.
 *   - Ordena `prices` con `sort()` de menor a mayor.
 *   - Ordena `names` con `sort()` sin argumentos y muestra el resultado.
 *   - Vuelve a ordenar `names`, ahora alfabéticamente.
 */

const prices = [100, 9, 25, 3, 50];
const names = ["Óscar", "ana", "Bea", "Álvaro"];

let ascending = prices.toSorted((a, b) => a - b);
console.log(ascending);

let descending = prices.toSorted((a, b) => b - a);
console.log(descending);

console.log(prices);

prices.sort();
console.log(prices);

prices.sort((a, b) => a - b);
console.log(prices);

names.sort();
console.log(names);

names.sort((a, b) => a.localeCompare(b));
console.log(names);
