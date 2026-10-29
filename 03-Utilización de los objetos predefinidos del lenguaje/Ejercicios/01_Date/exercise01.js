/*
 * Para cada fecha de `dates`, calcula:
 *   - `formatted`: la fecha como "D/M/YYYY" (usa `getDate`, `getMonth` y
 *     `getFullYear`).
 *   - `dayName`: el nombre del día de la semana usando `getDay()` y el array
 *     `DAY_NAMES`.
 *
 * Salida esperada:
 *   30/10/2026 is a Friday
 *   1/2/2026 is a Sunday
 */

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const october30 = new Date(2026, 9, 30);
const january32 = new Date(2026, 0, 32);
const dates = [october30, january32];

for (let i = 0; i < dates.length; i++) {
  const date = dates[i];
  let formatted = ""; // TODO
  let dayName = ""; // TODO

  console.log(`${formatted} is a ${dayName}`);
}
