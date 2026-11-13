/*
 * Usa expresiones regulares con los métodos de String:
 *   - `numbers`: con `match` y el modificador g, todos los números de `address`.
 *   - `firstDigit`: con `search`, la posición del primer dígito de `address`.
 *   - `cleaned`: `messy` con los espacios repetidos reducidos a uno (`replace`).
 *   - `tags`: `tagList` separado por comas o puntos y coma (`split`).
 */

const address = "Calle Mayor 12, piso 3, puerta 7";
const messy = "Too    many   spaces  here";
const tagList = "js,html;css,dom";

const numbers = []; // TODO
console.log(numbers); // ["12", "3", "7"]

const firstDigit = -1; // TODO
console.log(firstDigit); // 12

const cleaned = ""; // TODO
console.log(cleaned); // "Too many spaces here"

const tags = []; // TODO
console.log(tags); // ["js", "html", "css", "dom"]
