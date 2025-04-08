const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}

//console.log(obj1, obj2);
//{ '1': 'a', '2': 'b' } { '3': 'a', '4': 'b' }

const obj3 = {obj1, obj2}
//console.log(obj3)
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2) //copies values of obj2 as source and copies them to obj1 as target
//console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2) //copies values of obj2 and obj1 as source and copies them to emply object {} as target
//console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {...obj1, ...obj2} //using spread operator
// console.log(obj6);

//object destructureing

const course = {
    coursename : "javascript",
    price : "499",
    coursepathform : "youtube"
}

const {coursepathform : cpltfrm} = course // meaning get object named coursepathform form course, ' : ' is used to rename

console.log(cpltfrm);


