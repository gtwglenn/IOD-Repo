let count = 0; 
let numInput1 = null; 
let numInput2 = null; 
let result = null; 
let operator = null; 


                                                        // function --> display responses upon each number click 
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
    numInput.innerText += elementId + ' ';                  // this should add a space between the numbers that are displayed but it doesn't ??? 

    // Update the response message
    let responseIndex = Math.floor(Math.random() * responses.length);
    document.getElementById('calcResponseMsg').innerHTML = "Calculatron3000/msg/input: \n" + responses[responseIndex];
}

                                                        // function that cycles for each ENTER press 
function ENTER_FUNCTION_NAME(event) {

    if (count === 0) {
        numInput1 = document.getElementById('numInput1').innerText.trim(); // Store first number

        if (isNaN(numInput1) || numInput1 === "") {
            alert("Please enter a valid first number!");
            return;
        }

        document.getElementById('num1').innerHTML += numInput1;         
        count++;

        // Prompt for second number
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

        // Send the request to the server
        calculateResult();

        console.log('numInput1', numInput1);
        console.log('numInput2', numInput2);
        console.log('operator', operator);

    }
}


// lines 37 & 52 --> maybe rather have input changed to '0' rather than prompting user ?? 




function calculateResult() {
    // Prepare the URL for the backend API based on the operator
    const url = `http://localhost:3000/calculator/${operator}?num1=${numInput1}&num2=${numInput2}`;

    // Send request to the backend API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                // If successful, show the result from the backend
                result = data.result;
                document.getElementById('result').innerText = "Result: " + result;
            } else {
                // If there's an error (e.g., division by zero), show the error message
                document.getElementById('result').innerText = "Error: " + data.error;
            }
        })
        .catch(error => {
            // Handle network errors or other issues
            document.getElementById('result').innerText = "Error with the server.";
            console.error(error);
        });
}

// Following function will be a problem moving forward -- it resets the numInput values 

function resetInputs() {
    // Reset all inputs and counter for new calculation
    count = 0;
    numInput1 = null;
    numInput2 = null;
    operator = null;
    document.getElementById('numInput1').innerText = "";            // leave these empty (and others) because legacy code reasons 
    document.getElementById('numInput2').innerText = "";
}

// Handle the clear button behavior
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
