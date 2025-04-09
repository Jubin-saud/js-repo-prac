// Imediately Invoked function Expressions

//execute functions as soon as it is initialized

//normal execution -->

function createENV(){
    console.log("ENV created!")
}

//after defining the function we now call it
createENV();

//but to execute same immediated after being defined use IIFE

(function createUSER(){
    console.log("USER created!!");
    
})();  //this is named IIFE

// in this cases the function doesnot know where to end so use semi colon ';' at the end of each func

( () => {
    console.log("DB connected");
    
})(); //this is unnamed IIFE

//passing arguments

( (name) => {
    console.log(`Hi ${name}!`);
    
})("Jubin")
