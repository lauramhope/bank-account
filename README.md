# _Bank-Account_

#### By **Laura Hope, Joseph Wahbeh, Gareth Grindeland**_

#### Application displaying an input form for creating a bank account with an initial deposit and the ability for withdrawing and depositing money_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This application showcases Object-Oriented JavaScript skills via custom constructor functions and prototype methods for a bank account object with interactivity allowing for depositing and withdrawing various amounts while displaying the account balance._

## Setup/Installation Requirements

* _Clone “bank-account“ from the repository_
* _Open “bank-account“ directory on your desktop_
* _Open “index.html“ file in your browser_

## Tests
```
Describe Account()

Test: "It will create an empty bank account object with an initial deposit"
Code: new Account("joe", 100);
Expected Output: Account {
  accountHolder: joe;
  amount: 100
}

Describe Account.prototype.withdraw()

Test: "It will create a prototype to withdraw money."
Code: account.withdraw(5);
Expected Output: account.amount = 95;

Test: "If the user tries to withdraw more than is in their balance, it withdraws the total current balance."
Code: account.withdraw(120);
Expected output: account.amount = 0;

Describe Account.prototype.deposit()

Test: "It will create a prototype to deposit money."
Code: account.deposit(10);
Expected Output: account.amount = 10;

Describe Account.prototype.checkBalance()

Test: "It will display the current amount in the account."
Code: account.checkBalance();
Expected Output: account.amount = 10;
```
## Known Bugs

* _No known bugs as of 4/6/23_

## License

MIT License

Copyright (c) [2023] [Laura Hope, Joseph Wahbeh, Gareth Grindeland]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you run into any issues or have questions, ideas or concerns, please reach out via email: lauramhope.dpt@gmail.com, Whobbes22@gmail.com, gt.grindeland@gmail.com.  Contributions to the code are highly encouraged._
