// primitive data type
// 7 types: string,number,boolean,null,undefined,symbol,BigInt

const score = "100";
const scorevalue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

const bigNumber = 3425838492382n;
//Reference(non primitive)

//Array,Objects,Function
const name = ["mohammad", "Saddam", "hussain"];

let myobj = {
  name: "saddam",
  age: 20,
};
const myFunction = function () {
  console.log("hello saddam");
};
