function newfunc(){
    console.log("hi");
    
}

// newfunc()

// function add(a,b) {
//     console.log(a+b);    
// }


function add(a,b) {
    return a+b    
}
const result = add(3,8)
// console.log(result);

//rest operator 

//without rest

function retrnnumber(val1){
    return val1
}

// console.log(retrnnumber(3));

//with rest

function retrnmultiplenumbers(...val1){ 
    return val1
}

// console.log(retrnmultiplenumbers(100,200,300));

//together

function retrnmultiplenumbers2(val1, ...val2){ 
    return val2
}

// console.log(retrnmultiplenumbers2(100,200,300));


//  handaling objects in functions

user = {
    username: "jubin",
    dept: "CS"
}

function handleObjects(anyobject){
    console.log(`Username : ${anyobject.username} \nDept : ${anyobject.dept}`);
}

// handleObjects(user)

// //directly defineing an object inside the function
// handleObjects({
//     username : "Harry",
//     dept: "Mechanical"
// })

//      handing array
const myarray = [100,200,300,400]
function returnsecondelement(anyarray){
    return anyarray[1]
}

// console.log(`Second element of ${myarray} is ${returnsecondelement(myarray)}`);


//===================================================

function addone(num){
    return num +1
}

console.log(addone(5))
//or

const addtwo = function(num){
    return num +2
}
console.log(addtwo(5))