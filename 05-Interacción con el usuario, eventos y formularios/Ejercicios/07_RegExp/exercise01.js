/*
 * Escribe las expresiones regulares y comprueba que los resultados de `test`
 * coinciden con los comentarios:
 *   - `zipRe`: código postal, exactamente 5 dígitos.
 *   - `mobileRe`: móvil, empieza por 6 o 7 y tiene 9 dígitos en total.
 *   - `dniRe`: DNI, 8 dígitos y una letra (sin distinguir mayúsculas).
 *   - `plateRe`: matrícula, 4 dígitos y 3 letras mayúsculas
 *     (de momento, cualquier letra de la A a la Z).
 */

const zipRe = /TODO/;
const mobileRe = /TODO/;
const dniRe = /TODO/;
const plateRe = /TODO/;

console.log("zip", zipRe.test("46001"), zipRe.test("4600"), zipRe.test("46001a"));
// true false false
console.log("mobile", mobileRe.test("612345678"), mobileRe.test("712345678"), mobileRe.test("912345678"));
// true true false
console.log("dni", dniRe.test("12345678Z"), dniRe.test("12345678z"), dniRe.test("1234567Z"));
// true true false
console.log("plate", plateRe.test("1234BCD"), plateRe.test("1234bcd"), plateRe.test("123BCD"));
// true false false
