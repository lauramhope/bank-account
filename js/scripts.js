//Business Logic for Accounts
function Account(accountName, initialDeposit)  {
  this.name = accountName;
  this.amount = initialDeposit;
  this.history = [initialDeposit];
}

Account.prototype.logTransaction = function(newAmount,isDeposit)  {
  if (newAmount !== 0) {
    if(isDeposit) {
      this.history.push(newAmount + " ↑");
    } else {
      this.history.push(newAmount + " ↓")
    }
  }
}

Account.prototype.withdraw = function(amountToWithdraw) {
  amountToWithdraw = this.verify(amountToWithdraw);
  if (amountToWithdraw > this.amount) {
    this.amount -= this.amount;
  } else {
  this.amount -= amountToWithdraw; 
  }
  this.logTransaction(amountToWithdraw,false);
}

Account.prototype.deposit = function(amountToDeposit) {
  amountToDeposit = this.verify(amountToDeposit);
  this.amount += amountToDeposit; 
  this.logTransaction(amountToDeposit,true);
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

//User Interface Logic
let newAccount;

function handleFormSubmission(event){
  event.preventDefault();
  const inputtedAccountName = document.querySelector("input#accountName").value;
  const inputtedInitialDeposit = parseInt(document.querySelector("input#initialDeposit").value);
  newAccount = new Account(inputtedAccountName, inputtedInitialDeposit);
  document.querySelector("input#accountName").value = null; 
  document.querySelector("input#initialDeposit").value = null;
  updateBalance(newAccount.amount);
  document.querySelector("span#greeting").innerText = "Hello, " + inputtedAccountName + "!";
}

function handleNewTransaction(event){
  event.preventDefault();
  const inputtedDeposit = parseInt(document.querySelector("input#deposit").value);
  const inputtedWithdraw = parseInt(document.querySelector("input#withdraw").value);
  newAccount.deposit(inputtedDeposit);
  newAccount.withdraw(inputtedWithdraw);
  updateBalance(newAccount.amount);
}

function updateBalance(balance){
  document.querySelector("#the-balance").innerText = "$"+balance;
}

window.addEventListener("load", function(){
  document.querySelector("#add-member").addEventListener("click", handleFormSubmission);
  document.querySelector("#make-transaction").addEventListener("click", handleNewTransaction);
});