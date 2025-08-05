class BankAccount { 
    #balance = 0; 
    constructor(owner) { 
        this.owner = owner; 
    } 
    deposit(amount) { 
        if (amount <= 0) 
            return console.log("Deposit must be positive"); 
        this.#balance += amount; 
        console.log(`Deposited: ${amount}`); 
    } 
    withdraw(amount) { 
        if (amount > this.#balance) { 
            console.log("Insufficient funds"); 
        } 
        else { this.#balance -= amount; console.log(`Withdrew: ${amount}`); 
    } 
} 
get balance() { 
    return this.#balance; 
} 
} 
const account = new BankAccount("Charlotte"); 
account.deposit(1000); 
account.withdraw(500); 
console.log(account.balance);