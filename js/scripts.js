//Business Logic for Accounts
function Account(accountName, initialDeposit)  {
  this.name = accountName;
  this.amount = initialDeposit;
  this.history = [initialDeposit];
}

Account.prototype.logTransaction = function(newAmount)  {
  this.history.push(newAmount);
}

// function updateHistory(obj){
//   obj.history.push(obj.amount);
// }

Account.prototype.withdraw = function(amountToWithdraw) {
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
  this.logTransaction(this.amount);
}

Account.prototype.deposit = function(amountToDeposit) {
  this.amount += amountToDeposit; 
  console.log(this.amount);
  // updateHistory(this);
  this.logTransaction(this.amount);
}

Account.prototype.checkBalance = function (){
  return this.amount; 
}


//User Interface Logic

function handleNewMember(){

}

function handleNewTransaction()

window.addEventListener("load", function(){
  document.querySelector("#add-member").addEventListener("click", handleNewMember);
  document.querySelector("#make-transaction").addEventListener("click", handleNewTransaction);
});