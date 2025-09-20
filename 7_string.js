const name ="Muhammad Saddam Hussain"
const repoCount = 50

//console.log(name  +  repoCount   + "value");

console.log(`Hello my name is ${name} and my reppo count is ${repoCount}`);

const gamename = new String('saddam hussain')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.length);
console.log(gamename.charAt(10));
console.log(gamename.indexOf('a'));
const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Saddam hussain   "
console.log( newStringOne);
console.log( newStringOne.trim());

const url = "https://saddamhussain.com/waanihussain"
console.log(url.replace('waani','sukriti'));

console.log(url.includes('saddam'));

console.log(gamename.split('-'));