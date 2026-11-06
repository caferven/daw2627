/*
 * Convierte cada texto a decimal con `parseInt`, indicando la base correcta:
 *   - `hex`: "ff" está en hexadecimal.
 *   - `binary`: "1010" está en binario.
 *   - `octal`: "777" está en octal.
 *   - `year`: "2026abc" está en decimal.
 *
 * Salida esperada:
 *   ff -> 255
 *   1010 -> 10
 *   777 -> 511
 *   2026abc -> 2026
 */

let hex = parseInt("ff", 16);
console.log(`ff -> ${hex}`);

let binary = parseInt("1010", 2);
console.log(`1010 -> ${binary}`);

let octal = parseInt("777", 8);
console.log(`777 -> ${octal}`);

let year = parseInt("2026abc", 10);
console.log(`2026abc -> ${year}`);
