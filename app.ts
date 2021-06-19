// Primitive
const apples: number = 5;
const speed: string = "fast";

// Built in objects
const now: Date = new Date();

// Array
const colors: string[] = ["red", "green", "blue"];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false];

// Classes
class Car {}
let sedan: Car = new Car();

// Object literal
const point: { x: number; y: number | string } = {
  x: 10,
  y: "yo",
};

// Function
const logNumber = (i: number): void => console.log(i);
const sum = (a: number, b: number): number => a + b;

// When to use annotations
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
