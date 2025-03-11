


// user clicks button --> function to display click 
//                              --> function reads element ID --> knows which number to print 

//                              that should save me from writing 9 separate functions


// may actually need to make (at least two) separate functions 
// first placeholder text = first number 
// second placeholder text = second number 
    // computer don't know the difference if you use the same function for both?



  



    // boolean argument --> if first number has been entered 
            // ENTER --> isNaN ? store value as variable : error message 
                    // validation shouldn't be as difficult now that user input is restricted 

    // --> proceed to second number/userInput2 --> repeat 

    // separate functions for CLEAR and ENTER 
            // clear 1x -> clears current entry 
                    // if you're on second entry + 'clear' -> resets second entry ONLY 
            // clear 2x -> clears current AND previous entry 

            // OR just make it clear back to start 





            // BIG BIG MEGA BRAIN MOVE 

            // move EVERYTHING inside of a FOR loop + counter --> count the number of times 'enter' has been pressed 

                // i = 0 --> first entry 
                // i = 1 --> second entry 
                // i = 2 --> print result 

                // *have response messages triggered after each button press

                        // ENTER x1 -> 
                                //  -> numInput1 stored as variable
                                //  -> prompt for numInput2 

                        // ENTER x2 -> 
                                //  -> numInput2 stored as variable 
                                //  -> calculate sum based on operator 
                                        // -> maybe prompt / advise user about operator selection? 

                //*break/switch case for -> CLEAR 
                        // easy difficulty: CLEAR resets all input 
                        // why do you do this to yourself difficulty: multiple levels to CLEAR function (cycle back to previous step)


                //catch errors for: pressing enter w/ no value entered --> null or 0? can't be null so... ? 
                        // enter 2x --> calcFunction *** unless null value? like if you press "8 - ENTER - ENTER"
                                                                        // is that "8 + 0" ? 
                                        // that's the only issue -- if I want the functionality tied to the ENTER button, then I have to accomodate for null values 
                                        // do I want an error/prompt? or just replace null with 0? 
                        // OR enter 2x w/out entering any numbers --> error/prompt user? or just 0?? 
        
        // Things I didn't think of: setting global variables to null -> change them later w/ in respective function 

        // NEEDS: -function for ENTER, -function for CLEAR 
                        //*how do make into FOR loop + counter? (see ENTER presses above)

                        // event listener for ENTER --> for loop + counter 

                

let count = 0; // Track how many times 'ENTER' is clicked
let numInput1 = null; // First number
let numInput2 = null; // Second number
let result = null; // Calculation result
let operator = null; // Operator selected from dropdown

function userClickNum(event) {

        const responses = [
        "I USED TO BE A MICROWAVE, YOU KNOW.",
        "WOW. I'VE NEVER SEEN THAT NUMBER BEFORE.",
        "CALCULATRON MAINTAINS A LONG DISTANCE RELATIONSHIP WITH YOUR MOTHER'S REFRIGERATOR.",
        "CAN YOU EVEN COUNT TO THAT NUMBER?",
        "CALCULATRON IS AMUSED BY YOUR INEPTITUDE.", 
        "ALL I SEE ARE ONES AND ZEROS. THIS BETTER BE WORTH MY TIME."
        ];

        // Get the number clicked and update the display
        const elementId = event.target.id;
        const numInput = count === 0 ? document.getElementById('numInput1') : document.getElementById('numInput2');

        // Update display text for current input
        numInput.innerText += elementId + ' '; 

        // Update the response message
        let responseIndex = Math.floor(Math.random() * responses.length);
        document.getElementById('calcResponseMsg').innerHTML = "Calculatron3000/msg/input: \n" + responses[responseIndex];
}

function ENTER_FUNCTION_NAME(event) {
        // Handle logic based on how many times ENTER is clicked
        if (count === 0) {
        numInput1 = document.getElementById('numInput1').innerText.trim(); // Store first number
        if (isNaN(numInput1) || numInput1 === "") {
                alert("Please enter a valid first number!");
                return;
        }

        document.getElementById('num1').innerHTML += numInput1;         
        count++;

        //prompt for second number
        document.getElementById('numInput1').innerText = "[Hint] Enter a second number...";
        document.getElementById('calcResponseMsg').innerHTML = "Calculatron3000/msg/input: I DARE YOU TO THINK OF A DIFFERENT NUMBER THAN THAT PUNY DIGIT!";
        } else if (count === 1) {
        numInput2 = document.getElementById('numInput2').innerText.trim(); // Store second number
        if (isNaN(numInput2) || numInput2 === "") {
                alert("Please enter a valid second number!");
                return;
        }
        operator = document.getElementById('operator').value; // Get selected operator
        count++;

        calculateResult();
        }
}

function calculateResult() {
        // Convert numInput1 and numInput2 to numbers
        numInput1 = parseFloat(numInput1);
        numInput2 = parseFloat(numInput2);

        // Perform the calculation based on selected operator
        switch (operator) {
        case 'add':
                result = numInput1 + numInput2;
                break;
        case 'subtract':
                result = numInput1 - numInput2;
                break;
        case 'multiply':
                result = numInput1 * numInput2;
                break;
        case 'divide':
                result = numInput2 !== 0 ? numInput1 / numInput2 : "Error: Division by zero";
                break;
        default:
                result = "Invalid operator!";
        }

        // Display the result
        document.getElementById('result').innerText = "Result: " + result;
        //resetInputs();
}


// following function will be a problem moving forward into Module 5 -- it resets the numInput values 

function resetInputs() {
        // Reset all inputs and counter for new calculation
        count = 0;
        numInput1 = null;
        numInput2 = null;
        operator = null;
        document.getElementById('numInput1').innerText = "";            // leave these empty (and others) because legacy code reasons 
        document.getElementById('numInput2').innerText = "";
        //document.getElementById('calcResponseMsg').innerText = "";
}

let clearCount = 0; // Track how many times CLEAR is pressed

function CLEAR_FUNCTION_NAME(event) {
    clearCount++; // Increment the counter each time CLEAR is pressed

    if (clearCount === 1) {
        // If it's the first press, just reset the current entry
        if (count === 0) {
            document.getElementById('numInput1').innerText = "";
        } else if (count === 1) {
            document.getElementById('numInput2').innerText = "";
        } else {
            resetInputs();
        }
    } else if (clearCount === 2) {
        // If it's the second press, refresh the page
        location.reload(); // This reloads the current page
    }
}

                        

