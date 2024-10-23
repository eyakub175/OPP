class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }


    //Getter methods

    getAge() { return this.age; }


    //Setter methods

    setAge(newAge) {
        if (newAge >= 0 && newAge <= 150) {
            this.age = newAge;
        } else {
            throw new Error("Age must be between 0 and 150.");
        } 
    }
    
}


const person1  = new person('Eyakub', 30);
person1.greet();

console.log(person1.getAge()); // Output: 30

person1.setAge(100);

console.log(person1.getAge()); // Output: 100


