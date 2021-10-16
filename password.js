const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`  _______             __                  __ 
 |   _   .-----.-----|__.-----.--.--.----|  |
 |.  1   |  _  |     |  |  _  |  |  |   _|__|
 |.  _   |_____|__|__|  |_____|_____|__| |__|
 |:  1    \\         |___|                    
 |::.. .  /                                  
 \`-------'       `)

console.log('Welcome!');
reader.question("Please enter your password for validation \nPasswords must be at least 10 characters long and contain Upper and Lower case letters and numbers \nEnter password: ", function(input){
	tokens = input;
    character = '';
    numCheck = false;
    upCaseCheck = false;
    lowCaseCheck = false;
    
    for (let i = 0; i < tokens.length; i++) {
        character = tokens.charAt(i);
        if (!isNaN(character * 1)) {
            numCheck = true;
        } else { 
           if (character === character.toUpperCase()) {
            upCaseCheck = true;
           }
           if (character === character.toLowerCase()) {
               lowCaseCheck = true;
           }
        }
    }

    if (tokens.length >= 10 && numCheck == true && upCaseCheck == true && lowCaseCheck == true) {
        console.log('Password validated, success!');
console.log(`  _______                              __         __ 
 |   _   .-----.-----.-----.----.---.-|  |_.-----|  |
 |.  1___|  _  |     |  _  |   _|  _  |   _|__ --|__|
 |.  |___|_____|__|__|___  |__| |___._|____|_____|__|
 |:  1   |           |_____|                         
 |::.. . |                                           
 \`-------'`);
        
    } else {
        console.log('Validation failed =[');
console.log(`  _______                _______             __       
 |       .----.--.--.   |   _   .-----.---.-|__.-----.
 |.|   | |   _|  |  |   |.  1   |  _  |  _  |  |     |
 \`-|.  |-|__| |___  |   |.  _   |___  |___._|__|__|__|
   |:  |      |_____|   |:  |   |_____|               
   |::.|                |::.|:. |                     
   \`---'                \`--- ---'`);
      
    }

    reader.close()

})

