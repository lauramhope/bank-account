Describe Account()

Test: "It will create an empty bank account object with an initial deposit"
Code: 
let account1 = new Account("joe", 100);
account 1;
Expected Output: Account {
  accountHolder: joe;
  amount: 100
}

Describe Account.prototype.withdraw()

Test: "It will create a prototype to withdraw money."
Code: account1.withdraw(5);
Expected Output: account1.amount = 95;

Test: "If the user tries to withdraw more than is in their balance, it withdraws the total current balance."
code:
let account1.amount = 100;
account1.withdraw(120);
Expected output
account1.amount = 0;

Describe Account.prototype.deposit()

Test: "It will create a prototype to deposit money."
Code: account1.deposit(10);
Expected Output: account1.amount = 105;

Describe Account.prototype.checkBalance()

Test: "It will display the current amount in the account."
Code: account1.checkBalance();
Expected Output: account1.amount = 105;