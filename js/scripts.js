//Business Logic for Accounts
function Account(accountName, initialDeposit)  {
  this.name = accountName;
  this.amount = initialDeposit;
  this.history = [initialDeposit];
}

Account.prototype.logTransaction = function(newAmount)  {
  console.log("newAmount =",newAmount,typeof(newAmount));
  if (newAmount !== 0) {
      this.history.push(newAmount);
  }
}

Account.prototype.withdraw = function(amountToWithdraw) {
  amountToWithdraw = this.verify(amountToWithdraw);
  console.log("hi",typeof(this.amount),amountToWithdraw);
  if (amountToWithdraw > this.amount) {
    this.amount -= this.amount;
    console.log(this.amount);
    console.log("you are broke!");
  } else {
  this.amount -= amountToWithdraw; 
  console.log(this.amount);
  }
 // this.history.push(this.amount);
  // updateHistory(this);
  this.logTransaction(amountToWithdraw);
}

Account.prototype.deposit = function(amountToDeposit) {
  amountToDeposit = this.verify(amountToDeposit);
  this.amount += amountToDeposit; 
  console.log(this.amount);
  // updateHistory(this);
  this.logTransaction(amountToDeposit);
}

Account.prototype.checkBalance = function (){
  return this.amount; 
}

Account.prototype.verify = function (checkVariable) {
  if (isNaN(checkVariable)) {
    return 0;
  }
  return checkVariable;
}

let newAccount;

//User Interface Logic
function handleFormSubmission(event){
  event.preventDefault();
  const inputtedAccountName = document.querySelector("input#accountName").value;
  const inputtedInitialDeposit = parseInt(document.querySelector("input#initialDeposit").value);
  newAccount = new Account(inputtedAccountName, inputtedInitialDeposit);
  console.log(newAccount)
  document.querySelector("input#accountName").value = null; 
  document.querySelector("input#initialDeposit").value = null; 
}

function handleNewTransaction(event){
  event.preventDefault();
  console.log(newAccount);
  const inputtedDeposit = parseInt(document.querySelector("input#deposit").value);
  const inputtedWithdraw = parseInt(document.querySelector("input#withdraw").value);
  newAccount.deposit(inputtedDeposit);
  newAccount.withdraw(inputtedWithdraw);
  console.log(newAccount);
}

function updateBalance(balance){
  document.querySelector("#the-balance").innerText = "$"+balance;
}

window.addEventListener("load", function(){
  document.querySelector("#add-member").addEventListener("click", handleFormSubmission);
  document.querySelector("#make-transaction").addEventListener("click", handleNewTransaction);
});