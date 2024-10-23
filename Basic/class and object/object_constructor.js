// constructor function

function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.displayInfo = function() {
        return `${this.brand} ${this.model} ${this.year}`;
    };
}


// creating objects

let car1 = new Car('Toyota', 'Camry', 2021);
let car2 = new Car('Honda', 'Accord', 2019);

console.log(car1.displayInfo()); // Output: Toyota Camry 2021
console.log(car2.displayInfo()); // Output: Honda Accord 2019