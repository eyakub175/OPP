
//object literal 


let person = {
   first_name : 'eyakub',
   last_name : 'ali',

   //method

   getFunction: function (){
    return (`The name of the person is ${person.first_name} ${person.last_name}`);
   },
   //nested object / object within object

   phone_number : {
    mobile : '12345',
    landphone : '2525'
   }

}

console.log(person.getFunction());

console.log(person.phone_number.mobile);