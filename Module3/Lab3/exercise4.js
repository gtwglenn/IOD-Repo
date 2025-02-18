//Module 3 - JS Advanced - Question 4
//Garrard Glenn 


// Part a - Using setInterval
function printFibonacci(limit) {        // limit is established by function argument

    let a = 1, b = 1;
    let count = 0;                      // function will iterate until count = limit 
    
    if (count < limit) {

        console.log(a);                 // print first number 
        count++;
    
    }   // end if    
    
    if (count < limit) {

        console.log(b);                 // print second number 
        count++;

    }   // end if 

    const intervalId = setInterval(() => {  // setting interval for each iteration 

        if (count >= limit) {

            clearInterval(intervalId);      // clear interval once limit is reached (by counter)
            return;
        
        }   // end if

        let next = a + b;                   // defines next number in sequence 

        console.log(next);                  // prints next number 
        a = b;
        b = next;
        count++;                            // sets variables for next iteration 

    }, 1000);                               // end intervalId --> set interval at 1000 before next iteration 

}   // end printFibonacci function 

printFibonacci(7);                          // calls printFibonacci w/ limit set at 7 





// Part b - Using setTimeout

function printFibonacciTimeouts(limit) {    // function w/ limit as argument 

    let a = 1, b = 1;                       // start sequence at 1 
    let count = 0;

    if (count < limit) {

        console.log(a);                     // print first number if count < limit 
        count++;

    }   // end if 

    if (count < limit) {

        console.log(b);                     // print second number if count < limit
        count++;

    }   // end if 

    function printNextFibonacci() {

        if (count >= limit) {

            return;

        }   // end if

        let next = a + b;                   // sets next number in sequence, prints it
        console.log(next);

        a = b;                              // sets variables for next iteration 
        b = next;
        count++;

        setTimeout(printNextFibonacci, 1000);   // print next iteration after 1000ms 
    }

    setTimeout(printNextFibonacci, 1000);       // print next iteration after 1000ms 
}

printFibonacciTimeouts(8);                  // calls printFibonacciTimeouts w/ limit set at 8
