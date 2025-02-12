//Module 3 - JS Advanced - Question 2
//Garrard Glenn 

// a.) what order will the tests print in? 
// Original order of tests: #4, #3, #2, and #1 
//      -- the tests are issued w/ a delay; 
//      - #4 having no delay property takes precedence over #3 which does have a delay property of 0ms
//      - #2 has a delay property of 20ms < #1 w/ a delay property of 100ms



const delayMsg = (msg) => {

    console.log(`This message will be printed after a delay: ${msg}`);

};  // end function 


// set timeout messages 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

const stop5Test = setTimeout(delayMsg, 12000, '#5: Delay by 12 seconds');

clearTimeout(stop5Test); 

