let student = {
  name: 'Jaisai Pothula'
};
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

console.log(student.getKeys()); 
