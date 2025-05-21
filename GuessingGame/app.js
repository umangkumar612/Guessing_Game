const number = prompt("Enter a maximum number");
console.log(number);

const random = Math.floor(Math.random() * number);
console.log(random);

let guess = prompt("guessing a number");

while(true){
    if(guess == 'quit'){
        console.log("user Quit");
        break;
    }
    if(guess == random){
        console.log("congrats - you are right : random number is",random );
        break;
    }
    else if(guess < random){
        guess = prompt("your guess is smaller : please try again");
    }
    else {
       guess = prompt("your guess is  larger : please try again");
    }
}