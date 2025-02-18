//Module 3 - JS Advanced - Question 6
//Garrard Glenn 


// add new delay method via function.prototype 

Function.prototype.delay = function(ms) {

    return (...args) => {

        setTimeout(() => {      // setTimeout --> delay execution of function

            this.apply(null, args);      // call original function -> use apply() for following arguments 

        }, ms);   // end setTimeout

    }; // return new function 

};  // end function 


// original function 
function multiply(a, b, c, d) {

    console.log(a * b * c * d); 

}   // end multiply function 


multiply.delay(500)(2, 3, 4, 5);      // delay is set to 500ms -> function multiply() values set 

