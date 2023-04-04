Describe Account()

Test: "It will create an empty bank account object with an initial deposit"
Code: 
let account1 = new Account("joe", "100");
account 1;
Expected Output: Account {
  accountHolder: joe;
  amount: 100
}

Describe Account.prototype.withdraw()

Test: "It will create a prototype to withdraw money."
Code: account1.withdraw("5");
Expected Output: account1.amount = 95;