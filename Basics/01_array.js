//Arrays
const myArr = [1,2,3,4,5,6];
const fruits = new Array("Apple","Banana");

console.log(myArr[0])


const myArr2 = myArr;

console.log(myArr[0]);

myArr2[0] = 10;

console.log(myArr[0]);
console.log(myArr2[0]);

console.log(myArr)



myArr.push(7);
myArr.push(8);
myArr.unshift(100);
console.log(myArr);
myArr.shift()
myArr.pop();

console.log(myArr);
