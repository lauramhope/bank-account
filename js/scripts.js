//Business Logic for Accounts
function Account(accountName, initialDeposit)  {
  this.name = accountName;
  this.amount = initialDeposit;
}

Account.prototype.withdraw = function(amountToWithdraw) {
  this.amount -= amountToWithdraw; 
  console.log(this.amount);
}

Account.prototype.deposit = function(amountToDeposit) {
  this.amount += amountToDeposit; 
  console.log(this.amount);
}

Account.prototype.checkBalance = function (){
  return this.amount; 
}

//User Interface Logic