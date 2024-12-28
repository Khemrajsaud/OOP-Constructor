// constructor = special method for definding the properties and methos of object

function car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}
const car1 = new car("ford", "mustang", 2024, "red")
const car2 = new car("chaverolet", "camaro", 2025, "blue")
const car3 = new car("dodge", "charger", 2026, "silver");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);


