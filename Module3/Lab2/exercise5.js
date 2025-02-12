//Module 3 - JS Intermediate - Question 5
//Garrard Glenn 


// 5.) a.) Why does
console.log(fixedTwenty + fixedTen)
//                  return the wrong answer? 

// It does not provide a sum value because 'fixedTwenty' and 'fixedTen' are being stored as string values, not numeral values.
// So that final console.log() command is combining two strings, not adding two numbers. 

// b.) function currencyAddition(float1, float2) --> *safely* adds the two decimal numbers --> returns correct float result 

//keyword: safely --> .00 ?
function currencyAddition(float1, float2) {

    safeFloat1 = Math.round(float1 * 100) / 100; 
    safeFloat2 = Math.round(float2 * 100) / 100;

    // now have two values rounded to .00 precision 

    subSum = safeFloat1 + safeFloat2; 

    safeSum = Math.round(subSum * 100) / 100; // keyword: safely 

    return safeSum; 

}       //end function 



// c.) function currencyOperation(float1, float2, operation) --> returns correct float result 

    // basically just +, -, * b/t two values (float1 & float2)


function currencyOperation(float1, float2, operation, decimalPoint) {

    // switch case function to cover all bases (+ - / *) 

        // float1 -- switch for operation -- float2  

        if (typeof numDecimals !== 'number' || numDecimals < 1 || numDecimals > 10) {       // if --> check for decimal value 

            throw new Error("decimalPoint must be an integer between 1 and 10.");

        }   // end if

    let result; 

    switch (operation) {

        case '+':
            result = float1 + float2;
            break; 
        
        case '-':
            result = float1 - float2;
            break; 
        
        case '*':
            result = float1 * float2;
            break; 

        case '/':
            result = float1 / float2;
            break; 

        if (float2 === 0)   {

            throw new Error("Unacceptable mathematical computation. Alert. Alert.");
        }   // end if 

        result = float1 / float2;
        break; 
        default:
            throw new Error("Improper use of arithmetic. Please re-initialize when you have more brain.");


    }       // end switch 

    
    return parseFloat(result.toFixed(decimalPoint)); 

}       // end function 


// d.) extend part C to include fourth argument --> currencyOperation(float1, float2, operation, numDecimals)
        // numDecimals --> allows operation to support different amounts of decimal places (1-10)



