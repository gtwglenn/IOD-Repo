//Module 3 - JS Advanced - Question 3
//Garrard Glenn 


function debounce(func, ms = 1000) {

    let timeout;
    
    return function(...args) {
        // Clear the previous timeout (if any)
        clearTimeout(timeout);
        
        // Set a new timeout to call func after `ms` milliseconds of inactivity
        timeout = setTimeout(() => {

            func(...args);

        }, ms); // end timeout arguments 

    };  // end function 

}   // end function debounce 


function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);      // printMe function that is being debounced 
}

// Apply debounce to printMe with a custom delay of 1500ms
printMe = debounce(printMe, 1500);

// Fire off 3 calls to printMe within 300ms (only the LAST one should print after 1500ms of inactivity)
setTimeout(() => printMe('Message 1'), 100);
setTimeout(() => printMe('Message 2'), 200);
setTimeout(() => printMe('Message 3'), 300);
