class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    // পাবলিক মেথড
    startCar() {
      this._checkEngine();  // প্রাইভেট মেথড কল করা
      console.log(`${this.brand} ${this.model} is starting...`);
    }
  
    // প্রাইভেট মেথড
    _checkEngine() {
      console.log("Checking engine...");
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.startCar();  // Output: Checking engine... Toyota Corolla is starting...
  





  
  class BankAccount {
    #balance;  // প্রাইভেট প্রপার্টি
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    // পাবলিক মেথড
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
      }
    }
  
    // পাবলিক মেথড
    getBalance() {
      return this.#balance;
    }
  
    // প্রাইভেট মেথড
    #validateTransaction() {
      console.log("Validating transaction...");
    }
  }
  
  const account = new BankAccount("John", 1000);
  console.log(account.owner);  // Output: John
  console.log(account.getBalance());  // Output: 1000
  
  account.deposit(500);  // Output: Deposited: $500
  console.log(account.getBalance());  // Output: 1500
  
  // console.log(account.#balance); // এটি কাজ করবে না, কারণ #balance প্রাইভেট
  // account.#validateTransaction(); // এটি কাজ করবে না, কারণ এটি প্রাইভেট মেথড
  