/*
 * Cambia `fullName` para que cada palabra empiece por mayúscula y el resto vaya
 * en minúscula:
 *   1. Separa las palabras con `split(" ")`.
 *   2. Recorre el array con un `for` y sustituye cada palabra por su versión
 *      capitalizada. Usa `charAt`, `substring`, `toUpperCase` y `toLowerCase`.
 *   3. Vuelve a unirlas con `join(" ")` y guarda el resultado en `fullName`.
 *
 * Salida esperada:
 *   aNA maRÍA lóPEZ
 *   Ana María López
 */

let fullName = "aNA maRÍA lóPEZ";
fullName.toUpperCase(); // para pasarlo a mayúscula -> fullName = fullName.toUpperCase()
console.log(fullName);

const words = fullName.split(" ");
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  words[i] = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}
fullName = words.join(" ");

console.log(fullName);
