//Module 3 - JS Advanced - Question 1
//Garrard Glenn 


function makeCounter( startFrom = 0, incrementBy = 1)   {

    let currentCount = startFrom; 

    return function() {

        currentCount += incrementBy;    // increment at startFrom by incrementBy value 
        console.log(currentCount); 
        return currentCount; 

    }; //end increment function 

}   // end function


let counter1 = makeCounter(5, 2);       // call makeCounter to create counter1 w/ specific arguments 
counter1();                             // returns result of first iteration  
counter1();                             // returns result of second iteration 

let counter2 = makeCounter(10, 3);      // same as above --> start at 10 -- increment by 3
counter2();                             // first iteration 
counter2();                             // second iteration 


