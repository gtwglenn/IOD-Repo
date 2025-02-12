//Module 3 - JS Advanced - Question 8
//Garrard Glenn 


function validateStringArg(fn) {

    return function (...args) {

        // Check if all arguments are strings
        args.forEach(arg => {

            if (typeof arg !== 'string') {

                throw new Error('Argument must be a string');
            }   // end if 

        }); // end forEach 

        // If validation passes, call the original function
        return fn(...args);

    };  // return original function 

} // end validateStringsArg

// Extend orderItems to handle multiple items using the rest operator
function orderItems(...itemNames) {

    return `Order placed for: ${itemNames.join(", ")}`;

}   // end function orderItems()

// Create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

// Test with try-catch block to handle errors
try {

    console.log(validatedOrderItem("Apple Watch", "iPhone", "MacBook")); // should run the function
    console.log(validatedOrderItem("Apple Watch", 123)); // should throw an error

} catch (error) {

    console.error(error.message); // handle the error, e.g., log the error message
    
}