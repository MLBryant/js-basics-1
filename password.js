const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome!');
reader.question("Please enter your password for validation: ", function(input){
	tokens = input;

    if (tokens.length >= 10) {
        console.log('Password validated, success!');
    } else {
        console.log('Validation failed =[');
    }

    reader.close()

})