/*
 * Para cada valor, calcula con `isNaN` y `isFinite`:
 *   - `ageIsNaN` / `ageIsFinite` para `age`.
 *   - `nameIsNaN` / `nameIsFinite` para `testName`.
 *   - `divisionIsNaN` / `divisionIsFinite` para `division`.
 *   - `emptyIsNaN` / `emptyIsFinite` para `empty`.
 */

const age = "25";
let ageIsNaN = false; // TODO
let ageIsFinite = false; // TODO
console.log(`"${age}" -> isNaN: ${ageIsNaN}, isFinite: ${ageIsFinite}`);

const testName = "Lucía";
let nameIsNaN = false; // TODO
let nameIsFinite = false; // TODO
console.log(`"${testName}" -> isNaN: ${nameIsNaN}, isFinite: ${nameIsFinite}`);

const division = 10 / 0;
let divisionIsNaN = false; // TODO
let divisionIsFinite = false; // TODO
console.log(`${division} -> isNaN: ${divisionIsNaN}, isFinite: ${divisionIsFinite}`);

const empty = "";
let emptyIsNaN = false; // TODO
let emptyIsFinite = false; // TODO
console.log(`"${empty}" -> isNaN: ${emptyIsNaN}, isFinite: ${emptyIsFinite}`);
