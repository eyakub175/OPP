const personProto = {

    greet : function () {
        console.log('Hello, this is ${this.name}');
    }
}

const person1 = Object.create(personProto);

person1.name = 'Eyakub Ali';
person1.greet();