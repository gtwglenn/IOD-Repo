
//
//                CALCULATRON 3000 RESPONSES 
//

let responseIndex = 0;          // global value for cycle counter -> start at first response in index


// flawed --> function is called as soon as user inputs a character... 
    // as long as the first character is a number --> checkInput() sees it as a number 
    // forgot to check for fractions 





function checkInput() {                                               

    const userInput = document.getElementById('userInput').value;

    if (isNaN(userInput) || userInput === ' ') {
        
        document.getElementById('calcResponseMsg').innerHTML = 'ERROR: INSUFFICIENT SUPPLY OF DISCRETE NUMERALS';

      } else {
        const number = Number(userInput); 

        
        if (Number.isInteger(number)) {                     // if true --> response -> placeholder 
          
          const responses = [

            "I USED TO BE A MICROWAVE, YOU KNOW.",          // how do make selection random ??
            "WOW. I'VE NEVER SEEN THAT NUMBER BEFORE.",
            "CALCULATRON MAINTAINS A LONG DISTANCE RELATIONSHIP WITH YOUR MOTHER'S REFRIGERATOR.",
            "CAN YOU EVEN COUNT TO THAT NUMBER?",
            "CALCULATRON IS AMUSED BY YOUR INEPTITUDE.", 
            "ALL I SEE ARE ONES AND ZEROS. THIS BETTER BE WORTH MY TIME." 
          
        ];

          // Display the current response and cycle to the next one
          document.getElementById('calcResponseMsg').innerHTML = "Calculatron3000/msg/input: \n" + responses[responseIndex];
          
          // Update the responseIndex to cycle through the responses
          responseIndex = (responseIndex + 1) % responses.length;  // This will loop back to 0 after reaching the last index
        } else {
          // If it's not an integer but still a number (e.g., a decimal)
          document.getElementById('calcResponseMsg').innerHTML = 'REALLY? A DECIMAL? WOW.';
        }
      }
    }




    function checkInput1() {

      const userInput1 = document.getElementById('userInput1').value;
  
      if (isNaN(userInput1) || userInput1 === ' ') {
          
          document.getElementById('calcResponseMsg1').innerHTML = 'ERROR: INSUFFICIENT SUPPLY OF DISCRETE NUMERALS';
  
        } else {
          const number = Number(userInput1); 
  
          
          if (Number.isInteger(number)) {                     // if true --> response -> placeholder 
            
            const responses = [
  
              "I WOULDN'T DO THAT IF I WERE YOU! ",          // re-order these so they mix and match upon entry 
              "CALCULATRON MAINTAINS DISCONTENT TOWARDS CERTAIN NUMERIC VALUES! ",
              "USING BIG BOY NUMBERS NOW, ARE WE?",
              "STOP! BEFORE YOUR SIMPLE ARITHMETIC BORES ME TO DEATH! " 
            
          ];
  
            // Display the current response and cycle to the next one
            document.getElementById('calcResponseMsg1').innerHTML = "Calculatron3000/msg/input: \n" + responses[responseIndex];
            
            // Update the responseIndex to cycle through the responses
            responseIndex = (responseIndex + 1) % responses.length;  // This will loop back to 0 after reaching the last index
          } else {
            // If it's not an integer but still a number (e.g., a decimal)
            document.getElementById('calcResponseMsg1').innerHTML = 'CALCULATRON FINDS YOUR USE OF A DECIMAL POINT AMUSING!';
          }
        }
      }



              // could still use these^ functions to trigger responses + store 2 separate data values (whole point of calculator exercise)





//    "THAT DOESN'T LOOK LIKE A GOOD NUMBER TO USE. MAYBE TRY ENTERING A DIFFERENT NUMBER."

//    "I DON'T LIKE THAT NUMBER EITHER. ARE YOU SURE YOU DON'T WANT TO GO PRACTICE YOUR ALPHABET INSTEAD?"

//    "OF COURSE YOU WOULD SELECT THAT NUMBER. EVERYONE ALWAYS PICKS THAT NUMBER."





// 
//                ACTUAL CALCULATOR FUNCTION 
//





function calcResult() {

  const operatorSelect = document.getElementById('operator'); 

  const selectedOperator = operatorSelect.value; 

  let num1 = parseFloat(document.getElementById('userInput').value); 
  let num2 = parseFloat(document.getElementById('userInput1').value); 
  let result; 


  console.log('Selected operator:', selectedOperator);

  // use switch case -> reliant on operator value 

  switch (selectedOperator) {

    case 'add':
      result = num1 + num2;
      break;

    case 'subtract':
      result = num1 - num2;
      break;

    case 'multiply':
      result = num1 * num2;
      break;

    case 'divide':
      // Prevent division by zero
      if (num2 === 0) {
        result = "NICE TRY MORTAL!";
      } else {
        result = num1 / num2;
      }
      break;

    default:
      result = "Invalid operator";
  }

  // Display the result
  document.getElementById('result').innerText = "loading NUMcrunch.bat...\nloading...\nfinalizing arithmetic...\n " + result + "\n\nCALCULATRON HAS BEEN DEFEATED!";
}

// Event listener for the button click
document.getElementById('calculate').addEventListener('click', calcResult);



// *validation only reads first character in input field ? 

