// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

// let age = 20;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must 18+ to enter this site");
// }

// let time = 9;

// if(time < 12){
//     console.log("Good Morning!");
// }
// else{
//     console.log("Good Afternoon!");
// }

// let isStudent = true;

// if(isStudent){
//     console.log("You are a student!");
// }
// else{
//     console.log("You are NOT a student!");
// }

// let age = 20;
// let hasLicense = false;

// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You don't have your license yet!");
//     }
// }
// else{
//     console.log("You must be 16+ to have a license");
// }

// let age = 0;

// if(age >= 100){
//     console.log("You are TOO OLD to enter this site")
// }
// else if(age == 0){
//     console.log("You can't enter. You were just born");
// }
// else if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else if(age < 0){
//     console.log("Your age can't be below 0");
// }
// else{
//     console.log("You must 18+ to enter this site");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        result.textContent = `You can't enter. You were just born`;
    }
    else if(age >= 18){
        result.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        result.textContent = `Your age can't be below 0`;
    }
    else{
        result.textContent = `You must 18+ to enter this site`;
    }
}