//Stack(Primitive) and Heap(Non Primitive)



//Stack
let myName = "Harshith"

let anotherName = myName;
anotherName = "Shetty"
console.log(anotherName);
console.log(myName);



//Heap
let userOne = {
    email : "shetty@033@gmail.com"
}

let userTwo = userOne;

console.log(userTwo.email);

userTwo.email = "harshith@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);