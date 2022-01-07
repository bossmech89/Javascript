console.log("For learning");
var name = "Baskar";
var age = 30;
console.log(name, age);

const myAge = 15;
if(myAge >= 17){
    console.log("True")
} else {
    const limit = 18 - myAge;
    console.log(`Message is false with ${limit} limit`)
};

// Equality operators

const old = 18;
if(old === 18) {
    console.log("My age is:" + old)
};

// Validate the equality operator condition is String or Number
const numberOfAge = Number(prompt("What is my age:"));
if(numberOfAge === 18){
    console.log("Exact")
} else if (numberOfAge == 18){
    console.log("correct")
} else {
    console.log("Wrong")
};
