const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getName (){
  rl.question("What's your name? ",(name)=>{
    getNumb(name);
})}

function getNumb(name) {
  rl.question("What's your number? ", (number) => {
    if (validator.isMobilePhone(number, "id-ID") == false) {
      getNumb(name)
    } else {
      getEmail(name, number)
    }
  })
}

function getEmail(name, number) {
  rl.question("What's your email? ", (email) => {
    if (validator.isEmail(email) == false) {
      getEmail(name, number)
    } else {
      console.log(`Hi, ${name}. Your number is ${number}. Your email is ${email}`)
      rl.close();
    }
  })
}

getName();