class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("Hi there " + this.speaks);
  }
}
// console.log(Animal.speak());
let dog = new Animal("Dog", 4, "Bhow Bhow"); // Create object
let cat = new Animal("Cat", 4, "Meow");
cat.speak(); // Call function on object
