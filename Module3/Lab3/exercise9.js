//Module 3 - JS Advanced - Question 9
//Garrard Glenn 


function randomDelay() {

    return new Promise((resolve, reject) => {

        // Generate a random delay between 1 and 20 seconds (in milliseconds)
        const delay = Math.floor(Math.random() * 20000) + 1000; // 1s to 20s
        
        setTimeout(() => {
            // If delay is even, resolve the promise; if odd, reject it
            if (delay % 2 === 0) {
                resolve(delay); // Resolve with the delay value
            } else {
                reject(delay); // Reject with the delay value
            }
        }, delay); // Execute after the random delay
    });

}   // end function randomDelay()

// Test the randomDelay function
randomDelay()
    .then(delay => {
        // If the promise resolves, log the success message with the delay
        console.log(`Success! The delay was ${delay / 1000} seconds.`);
    })
    
    .catch(delay => {
        // If the promise rejects, log the failure message with the delay
        console.log(`Failure! The delay was ${delay / 1000} seconds.`);
    });
