// প্যারেন্ট ক্লাস
class Animal {
    speak() {
      console.log("This animal makes a sound.");
    }
  }
  
  // চাইল্ড ক্লাস
  class Dog extends Animal {
    speak() {
      console.log("The dog barks.");
    }
  }
  
  // আরেকটি চাইল্ড ক্লাস
  class Cat extends Animal {
    speak() {
      console.log("The cat meows.");
    }
  }
  
  // অবজেক্ট তৈরি
  const animal1 = new Animal();
  const dog1 = new Dog();
  const cat1 = new Cat();
  
  // Polymorphism: একাধিক অবজেক্টে একই মেথডের ভিন্ন ভিন্ন রূপ
  animal1.speak(); // Output: This animal makes a sound.
  dog1.speak();    // Output: The dog barks.
  cat1.speak();    // Output: The cat meows.
  