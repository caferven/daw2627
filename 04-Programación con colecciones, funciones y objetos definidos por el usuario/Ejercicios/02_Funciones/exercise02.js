/*
 * Completa las funciones:
 *   - `greet(name, greeting)`: con "Hola" como valor por defecto de greeting y devuelve "<greeting>, <name>!".
 *   - `ageGroup(age)`: devuelve "menor" si `age` es menor que 18 y "adulto" en
 *     otro caso. Intenta hacerlo sin un "else".
 *
 * Salida esperada:
 *   Hola, Ana!
 *   Buenos días, Luis!
 *   Hola, undefined!
 *   menor
 *   adulto
 */

function greet(name, greeting = "Hola") {
  return `${greeting}, ${name}!`;
}

function ageGroup(age) {
  if (age < 18) {
    return "menor";
  }
  return "adulto";
}

console.log(greet("Ana"));
console.log(greet("Luis", "Buenos días"));
console.log(greet());
console.log(ageGroup(15));
console.log(ageGroup(30));
