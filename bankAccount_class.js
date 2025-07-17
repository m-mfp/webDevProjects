class BankAccount {
    constructor(){
      this.balance = 0
      this.transactions = []
    }

    deposit(depositAmount){
      if(depositAmount > 0){
        let newDeposit = {
          type: "deposit",
          amount: depositAmount
        }
        this.transactions.push(newDeposit)
        this.balance += Number(depositAmount)
        return `Successfully deposited \$${depositAmount}. New balance: \$${this.balance}`
      } else if(depositAmount <= 0){
        return "Deposit amount must be greater than zero."
      }
    }

    withdraw(withdrawAmount){
      if(withdrawAmount > 0 && withdrawAmount <= this.balance){
        let newWithdraw = {
          type: "withdraw",
          amount: withdrawAmount
        }
        this.transactions.push(newWithdraw)
        this.balance -= Number(withdrawAmount)
        return `Successfully withdrew \$${withdrawAmount}. New balance: \$${this.balance}`
      } else if(withdrawAmount <= 0 || withdrawAmount > this.balance){
        return "Insufficient balance or invalid amount."
      }
    }

    checkBalance(){
      return `Current balance: \$${this.balance}`
    }

    listAllDeposits(){
      let strings = []
      for(let deposit of this.transactions){
        if(deposit.type == "deposit"){
          strings.push(`${deposit.amount}`)
        }
      }
      let allDeposits = "Deposits: " + strings.join(",")
      return allDeposits
    }

    listAllWithdrawals(){
      let strings = []
      for(let withdraw of this.transactions){
        if(withdraw["type"] == "withdraw"){
          strings.push(`${withdraw.amount}`)
        }
      }
      let allWithdrawals = "Withdrawals: " + strings.join(",")
      return allWithdrawals
    }
}

let myAccount = new BankAccount()
myAccount.deposit(356)
myAccount.withdraw(20)
myAccount.deposit(245)
myAccount.deposit(285)
myAccount.withdraw(50)
myAccount.deposit(245)
myAccount.withdraw(100)

console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())