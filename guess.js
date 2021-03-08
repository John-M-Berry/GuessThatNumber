// GUESS THAT NUMBER

const enterNumText=`Please enter a number greater than Zero`;   // Text/message to be used throughout file

let restartGame=true    // For resarting the game

let rangeNum;           // For storing the range of the number to be guessed

let randomNum;          // For storing the number to be guessed

let attempts;           // For storing the number of attempts left

let guess;              // For storing the user's guess

let playAgain;          // For storing user's response to play again or not play again

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`)   // Starting alert message

while (restartGame){    // Game restarts as long as restartGame has a value of true

    rangeNum=parseInt(prompt(`Please enter a maximum number for the range:`))   // Asks user to enter a number to set the upper bound for the random number that will be created

    // Verifies the user's entry for a range number is a number greater than zero (NOTE: All numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false. Also, NaN has a default boolean value of false as well.)
    while(!rangeNum || rangeNum<1) {
    rangeNum=parseInt(prompt(enterNumText));
    }
    randomNum=Math.floor(Math.random()*rangeNum)+1; // Creates the random number using the range number entered by the user

    // Prompts user to enter a number of attempts allowed (AKA Number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    while(!attempts || attempts<1) {
    attempts=parseInt(prompt(enterNumText));
    }
    // Asks user to enter a guess in the range that they set
    guess=prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s)`);

    // Continues looping until the user guesses the correct number or runs out of attempts (Loops until a BREAK keyword is run)
    while(true){

        // Tries to convert the user's guess into a number
        guess=parseInt(guess);

        // Verifies the user's guess is a number, a number greater than zero, and within the range they set
        while(!guess || guess<1 || guess>rangeNum){
            guess=parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
        }

        attempts--;  // Removes an attempt


        // Checks if the user guessed correctly. If so, the game ends.
        if (guess===randomNum){
            alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER:${randomNum}`);
            break;
        }   else if (attempts===0){
            alert(`Sorry, but you have run out of attempts!   :(  
The number was ${randomNum}`);
            break;
                  // Checks if user's guess was too low and prompts user to guess again if so
                }   else if (guess<randomNum){
                    guess=prompt(`Too Low... You have ${attempts} attempt(s) left.`)
                    // Checks if user's guess was too high and prompts user to guess again if so
                }   else {
            guess=prompt(`Too High... You have ${attempts} attempt(s) left.`)

        }

    }
        // Prompts user with option to play again
        playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

        // Loop continues until user submits a valid response
        while (true){
            if (playAgain.toUpperCase() === "N"){       // Checks if the user's answer is no (AKA "N" or "n")
                alert(`Thanks for playing!   :)`);      // Alerts the user that the game is over and game does not restart
                restartGame = false;
                break;
              } else if (playAgain.toUpperCase() === "Y"){
                  break;
                // Prompts the user to enter a valid response and start the loop again
              } else {
                playAgain = prompt(`Please enter Y or N:`);
              }
        }

}

