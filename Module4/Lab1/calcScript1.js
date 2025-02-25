


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
                        // why do you do this to yourself difficulty: multiple levels to CLEAR function 

        
        // Things I didn't think of: setting global variables to null -> change them later w/ in respective function 

        let count = 0; 
        let responseIndex = 0; 
        let numInput1 = null; 
        let numInput2 = null; 
        let result = null; 

        function userClickNum(event) {
                
                const responses = [

                        "I USED TO BE A MICROWAVE, YOU KNOW.",          
                        "WOW. I'VE NEVER SEEN THAT NUMBER BEFORE.",
                        "CALCULATRON MAINTAINS A LONG DISTANCE RELATIONSHIP WITH YOUR MOTHER'S REFRIGERATOR.",
                        "CAN YOU EVEN COUNT TO THAT NUMBER?",
                        "CALCULATRON IS AMUSED BY YOUR INEPTITUDE.", 
                        "ALL I SEE ARE ONES AND ZEROS. THIS BETTER BE WORTH MY TIME." 
                      
                    ];

                document.getElementById('calcResponseMsg').innerHTML = "Calculatron3000/msg/input: \n" + responses[responseIndex];
          
                // Update the responseIndex to cycle through the responses
                responseIndex = (responseIndex + 1) % responses.length;  // This will loop back to 0 after reaching the last index

                
                
                
                
                const elementId = event.target.id;       // event.target refers to the clicked button
                
                const numInput = document.getElementById('numInput1');  
                
                // TRY TO ADD SPACE?? 
                numInput.innerText += elementId + ' ';  

                    
                // add event listener for ENTER ??
        }

