/*
 * Completa `isValidDni(dni)` para que devuelva true o false:
 *   1. Con una expresión regular, comprueba que tiene 8 dígitos y una letra.
 *   2. Comprueba que la letra es la correcta: LETTERS[número % 23].
 * Pista: el número son los 8 primeros caracteres (`slice(0, 8)`) y la letra el último.
 */

const LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";

function isValidDni(dni) {
  // TODO
  return false;
}

console.log(isValidDni("12345678Z")); // true
console.log(isValidDni("00000000T")); // true
console.log(isValidDni("12345678A")); // false: letra incorrecta
console.log(isValidDni("1234567Z"));  // false: faltan dígitos
