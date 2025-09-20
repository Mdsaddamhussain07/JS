// Arrays

const myArr = [0,1,2,3,4,5]

// const student = ["student1","student2"]
// const myArr2 = new Array(1,2,3,4)


// console.log(myArr[0]);
// console.log(myArr2[2]);

//Array method
// myArr.push(6) // add element at ending index
// myArr.push(7)
// myArr.push(10)
// myArr.pop() // its remove last element in array
// myArr.unshift(9) // its add element at starting
// myArr.shift() // removes element at starting index
// console.log(myArr);
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // change into string
// console.log(newArr);

// slice,splice
console.log("A",myArr);

const mynewArr1 = myArr.slice(1,3)

console.log(mynewArr1);
console.log("B", myArr);

 const mynewArr2 = myArr.splice(1,3)

console.log(mynewArr2);
console.log("c", myArr);

//splice change original array