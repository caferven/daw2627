/*
 * `grades[i]` contiene las notas del alumno `students[i]`.
 * Recorre `grades` para calcular:
 *   - La media de cada alumno.
 *   - `total`: la suma de todas las notas.
 */

const students = ["Ana", "Luis", "Marta"];
const grades = [
  [7, 8, 6],
  [5, 4, 9],
  [10, 9, 8],
];

let total = 0;

for (let i = 0; i < grades.length; i++) {
  let rowSum = 0;
  for (let j = 0; j < grades[i].length; j++) {
    rowSum += grades[i][j];
  }
  total += rowSum;
  console.log(`${students[i]}: ${rowSum / grades[i].length}`);
}

console.log(`Total: ${total}`);
