// for loop

// for (let i = 0; i < 10; i++){
//     console.log(i)
// };

const myarray = ["apple", "banana","grapes"]

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);  
// }

//  while loop
// let i = 0
// while (i<myarray.length) {
//     console.log(myarray[i])
//     i++
// }
// console.log("********************************************");
// // do while
// const animals = ["lion","tiger","zebra","dear"]

// let j =0
// do {
//     console.log(animals[j])
//     j++
    
// } while (j<animals.length);

// for of loop

// const arr = [1,2,3,4,5,6,7,8]

// for (const val of arr) {
//     // console.log(val)    
// }

// const msg = "Hello World"
// for (const char of msg) {
//    // console.log(char);    
// }

//maps

const map = new Map()
map.set("a",1)
map.set("a",1)
map.set("c",3)
map.set("d",4)
map.set("e",5)

// console.log(map);

for (const [key,value] of map) {
    console.log(key, '->', value);
    
}
