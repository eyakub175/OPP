// প্রোটোটাইপ অবজেক্ট
const carProto = {
    displayInfo: function() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  };
  
  // নতুন অবজেক্ট তৈরি এবং প্রপার্টি যোগ করা
  const myCar = Object.create(carProto, {
    brand: { value: "Toyota", writable: true, enumerable: true },
    model: { value: "Corolla", writable: true, enumerable: true },
    year: { value: 2020, writable: false, enumerable: true }
  });
  
  console.log(myCar.displayInfo()); // Output: Toyota Corolla (2020)
  