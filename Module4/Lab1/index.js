

document.getElementById('calcMainAccessBtn').addEventListener('click', function() {

    
    const password = document.getElementById('pWord').value;

    
    if (password === '12345') {

        window.location.href = "calculatorEXE.html";  

    } else {

        alert('You will never defeat CALCULATRON!');

    }

});


//
//                CALCULATRON 3000 RESPONSES 
//

let responseIndex = 0;          // global value for cycle counter -> start at first response in index

function checkInput() {

    const userInput = document.getElementById('userInput').value;

    if (isNaN(userInput) || userInput === '') {
        
        document.getElementById('calcResponseMsg').innerHTML = 'ERROR: CANNOT MATH THAT';

      } else {
        const number = Number(userInput); 

        
        if (Number.isInteger(number)) {                     // if true --> response -> placeholder 
          
          const responses = [

            "I WOULDN'T DO THAT IF I WERE YOU! " + number,          // don't need + number?? 
            "I DON'T LIKE THAT NUMBER EITHER! " + number,
            "WELL OF COURSE YOU WOULD USE THAT NUMBER " + number,
            "STOP! BEFORE YOUR SIMPLE ARITHMETIC BORES ME TO DEATH! " + number
          
        ];

          // Display the current response and cycle to the next one
          document.getElementById('calcResponseMsg').innerHTML = responses[responseIndex];
          
          // Update the responseIndex to cycle through the responses
          responseIndex = (responseIndex + 1) % responses.length;  // This will loop back to 0 after reaching the last index
        } else {
          // If it's not an integer but still a number (e.g., a decimal)
          document.getElementById('calcResponseMsg').innerHTML = 'REALLY? A DECIMAL? WOW. ' + number;
        }
      }
    }


//    "THAT DOESN'T LOOK LIKE A GOOD NUMBER TO USE. MAYBE TRY ENTERING A DIFFERENT NUMBER."

//    "I DON'T LIKE THAT NUMBER EITHER. ARE YOU SURE YOU DON'T WANT TO GO PRACTICE YOUR ALPHABET INSTEAD?"

//    "OF COURSE YOU WOULD SELECT THAT NUMBER. EVERYONE ALWAYS PICKS THAT NUMBER."