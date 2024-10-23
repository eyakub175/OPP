// প্যারেন্ট ক্লাস: BankAccount
class BankAccount {
    constructor(owner, balance = 0) {
      this.owner = owner;
      this.balance = balance;
    }
  
    // মেথড: ব্যালেন্স চেক
    checkBalance() {
      console.log(`${this.owner} has a balance of $${this.balance}`);
    }
  
    // মেথড: ডিপোজিট
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
      } else {
        console.log("Invalid deposit amount");
      }
    }
  
    // মেথড: উইথড্র
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Invalid withdraw amount or insufficient balance");
      }
    }
  }
  
  // চাইল্ড ক্লাস: SavingsAccount
  class SavingsAccount extends BankAccount {
    constructor(owner, balance, interestRate) {
      super(owner, balance); // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল
      this.interestRate = interestRate; // ইন্টারেস্ট রেট যোগ করা
    }
  
    // মেথড: ইন্টারেস্ট যোগ করা
    addInterest() {
      const interest = this.balance * (this.interestRate / 100);
      this.balance += interest;
      console.log(`Added interest: $${interest}`);
    }
  }
  
  // চাইল্ড ক্লাস: CurrentAccount
  class CurrentAccount extends BankAccount {
    constructor(owner, balance, overdraftLimit) {
      super(owner, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    // উইথড্র মেথড ওভাররাইড
    withdraw(amount) {
      if (amount > 0 && (this.balance - amount) >= -this.overdraftLimit) {
        this.balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Exceeds overdraft limit or invalid amount");
      }
    }
  }
  
  // Savings Account Example
  const rahimSavings = new SavingsAccount("Rahim", 1000, 5);
  rahimSavings.checkBalance(); // Output: Rahim has a balance of $1000
  rahimSavings.deposit(500);   // Output: Deposited: $500
  rahimSavings.addInterest();  // Output: Added interest: $75
  rahimSavings.checkBalance(); // Output: Rahim has a balance of $1575
  
  // Current Account Example
  const karimCurrent = new CurrentAccount("Karim", 500, 200);
  karimCurrent.checkBalance(); // Output: Karim has a balance of $500
  karimCurrent.withdraw(600);  // Output: Withdrew: $600
  karimCurrent.checkBalance(); // Output: Karim has a balance of $-100
  