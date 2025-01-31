let lastResult = null;  // Variable to store the previous result

// Function to generate a random number between 1 and 6 (simulating a dice roll)
function generateRandomNumber() {
    const newD6Result = Math.floor(Math.random() * 6) + 1;
    return newD6Result;
}

// Function to append the result to the results list and print the previous result
function appendResult(newD6Result) {
    const resultList = document.getElementById('resultList');

    // Create a new list item
    const newItem = document.createElement('li');

    // If there's a previous result, display it
    if (lastResult !== null) {
        newItem.textContent = `Previous: ${lastResult}, New: ${newD6Result}`;
    } else {
        newItem.textContent = `New: ${newD6Result}`;
    }

    // Append the new item to the results list
    resultList.appendChild(newItem);

    // Update the lastResult with the current newD6Result for the next round
    lastResult = newD6Result;
}

// Set up event listener for the button
document.getElementById('generateBtn').addEventListener('click', function() {
    const newD6Result = generateRandomNumber();  // Generate new random number
    appendResult(newD6Result);  // Pass it to the function that appends to the Results Tab
});