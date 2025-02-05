//Module 3 - JS Fundamentals - Question 4
//Garrard Glenn 



// 4.) += adds to previous value 
    // in the case of this code, it is trying to add a string of letters to 'result' 
        // so that it prints (a value) + (b value) is (greater than/less than - 10)

    // *for ternary ? operator --> condition ? exprIfTrue : exprIfFalse


    let a = 2, b = 3; 
    let result = `${a} + ${b} is `;
        // an example of when to use backticks
    
    result += (a + b < 10) ? 'less than 10' : 'greater than 10';
    console.log(result);
        // return result? 
    
        // output = "2 + 3 is less than 10"