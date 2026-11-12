/*
 * Con el array `temperatures` (una por día):
 *   - Con `for...of`, calcula `sum` y después `average`.
 *   - Con `forEach`, muestra cada temperatura con su día ("Día 1: 18").
 *   - Con un `for` clásico, muestra solo las de las posiciones 0, 2 y 4.
 */

const temperatures = [18, 21, 25, 19, 16, 21];

let sum = 0;
for (const temperature of temperatures) {
  sum += temperature;
}
let average = sum / temperatures.length;
console.log(`Average: ${average}`);

temperatures.forEach((temperature, i) => console.log(`Día ${i + 1}: ${temperature}`));

for (let i = 0; i < temperatures.length; i += 2) {
  console.log(temperatures[i]);
}
