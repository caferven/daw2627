/*
 * Con el objeto `user`:
 *   - Muestra `name` mediante punto y `email` mediante corchetes.
 *   - Muestra la propiedad cuyo nombre está en la variable `field`.
 *   - Añade la propiedad `city` con el valor "Valencia" y muestra `user`.
 *   - Comprueba que `other` no tiene `city`.
 *   - Borra la propiedad `age` y comprueba con `in` si sigue existiendo.
 *   - Muestra `user[0]`.
 */

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const user = new User("Ana", "ana@mail.com", 28);
const other = new User("Luis", "luis@mail.com", 35);
const field = "age";

console.log(user.name);
console.log(user["email"]);
console.log(user["field"]);

user.city = "Valencia";
console.log(user);
console.log(`Other city: ${other.city}`);

delete user.age;
console.log(`Has age? ${"age" in user}`);

console.log(`user[0]: ${user[0]}`);
