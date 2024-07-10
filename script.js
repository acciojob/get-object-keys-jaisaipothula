// Define the student object with a property called name
let student = {
  name: 'John Doe'
};

// Add a method to the Object prototype to get all keys of any object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage:
console.log(student.getKeys());  // Output: ["name"]
