const marvel_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // this method give array in array not combine both
// console.log(marvel_heros);

// marvel_heros.concat(dc_heros) //also this same if u use without making new variable
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros) //its work
// console.log(allheros);

//***spread method**//
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const arrayInArray = [1,2,3,4,[5,6,7],9,[10,11,12],13,[14]]
// now change in sinle array
const singleArr = arrayInArray.flat(Infinity) // infinity define deepth
console.log(singleArr);

console.log(Array.isArray("saddam"));
console.log(Array.from("saddam"));
