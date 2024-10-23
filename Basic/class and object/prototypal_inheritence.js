// প্যারেন্ট অবজেক্ট
const animal = {
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  };
  
  // চাইল্ড অবজেক্ট ইনহেরিট করা animal থেকে
  const dog = Object.create(animal);
  dog.name = "Buddy";
  dog.speak(); // Output: Buddy makes a sound.
  