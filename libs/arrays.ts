const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ["Sedan", "Medan", "Jedan"],
  ["Yedan", "Ledan", "Kedan"],
];

// Help with inference when extracting values
const car = carMakers[0];
console.log(car);

const myCar = carMakers.pop();
console.log(myCar);

// Prevent incompitable
carMakers.push("ossa");

// Help with map
const ups = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(ups);

// Flexible types
const importantDates: (Date | String)[] = [new Date(), "2030-10-10"];
importantDates.push("2002-9-9");
importantDates.push(new Date());
console.log(importantDates);
