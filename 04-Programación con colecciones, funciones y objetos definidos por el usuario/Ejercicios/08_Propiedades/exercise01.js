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

// TODO: name con punto
// TODO: email con corchetes
// TODO: la propiedad indicada por `field`

// TODO: añade city
console.log(user);
console.log(`Other city: ${undefined /* TODO */}`);

// TODO: borra age
console.log(`Has age? ${undefined /* TODO */}`);

console.log(`user[0]: ${undefined /* TODO */}`);
