const fruits = ["Mango","Orange","Grape"];
const veggies = ["Potato","Cucumber"];

// fruits.push(veggies);
// console.log(fruits);


const allFood = fruits.concat(veggies);
console.log(allFood);

//Spread Operator
const AllNewFood = [...fruits,...veggies];
console.log(AllNewFood);

//flat fun

const nums = [1,2,3,[4,5],[5,6,7],8,9,[10,[11,12]]];

const flatArr = nums.flat(Infinity);
console.log(flatArr);

//from

let demo = "Harshit";
console.log(Array.from(demo));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));