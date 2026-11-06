/*
 * Para cada valor, calcula con `isNaN` y `isFinite`:
 *   - `ageIsNaN` / `ageIsFinite` para `age`.
 *   - `nameIsNaN` / `nameIsFinite` para `testName`.
 *   - `divisionIsNaN` / `divisionIsFinite` para `division`.
 *   - `emptyIsNaN` / `emptyIsFinite` para `empty`.
 */

const age = "25";
let ageIsNaN = isNaN(age);
let ageIsFinite = isFinite(age);
console.log(`"${age}" -> isNaN: ${ageIsNaN}, isFinite: ${ageIsFinite}`);

const testName = "Lucía";
let nameIsNaN = isNaN(testName);
let nameIsFinite = isFinite(testName);
console.log(`"${testName}" -> isNaN: ${nameIsNaN}, isFinite: ${nameIsFinite}`);

const division = 10 / 0;
let divisionIsNaN = isNaN(division);
let divisionIsFinite = isFinite(division);
console.log(`${division} -> isNaN: ${divisionIsNaN}, isFinite: ${divisionIsFinite}`);

const empty = "";
let emptyIsNaN = isNaN(empty);
let emptyIsFinite = isFinite(empty);
console.log(`"${empty}" -> isNaN: ${emptyIsNaN}, isFinite: ${emptyIsFinite}`);
