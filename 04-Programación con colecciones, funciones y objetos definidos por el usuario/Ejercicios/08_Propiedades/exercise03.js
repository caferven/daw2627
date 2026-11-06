/*
 * Completa los métodos de la clase `BankAccount`:
 *   - `deposit(amount)`: suma `amount` al saldo.
 *   - `withdraw(amount)`: si hay saldo suficiente lo resta y devuelve `true`;
 *     si no, no hace nada y devuelve `false`.
 *   - `describe()`: devuelve "<owner>: <balance>€".
 */

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    // TODO
  }

  withdraw(amount) {
    // TODO
  }

  describe() {
    // TODO
  }
}

const account = new BankAccount("Ana", 100);

account.deposit(50);
console.log(account.describe());

console.log(account.withdraw(30));
console.log(account.describe());

console.log(account.withdraw(500));
console.log(account.describe());
