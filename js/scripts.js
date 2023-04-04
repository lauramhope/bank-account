//Business Logic for Accounts
function Account(accountName, initialDeposit)  {
  this.name = accountName;
  this.amount = initialDeposit;
}

Account.prototype.withdraw = function(amountToWithdraw) {
  return this.amount - amountToWithdraw; 
}



//User Interface Logic