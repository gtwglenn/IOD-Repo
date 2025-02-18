// variables for subNum(): sub1 & sub2 
// variables for addNum(): add1 & add2
// variables for divNum(): div1 & div2 
// variables for multiNum(): multi1 & multi2 


// use isNan --> check if input values are 0-9 
    //--> prompt user to re-enter if invalid?? how do? alert window? 



function subNum () {

    var num1 = parseInt(document.getElementById("sub1").value); 
    var num2 = parseInt(document.getElementById("sub2").value); 

    subResult = num1 - num2; 

    console.log(subResult);

        //if NaN --> "please enter numerals 0-9"
        /*

        isNum? or check if integer == false --> prompt new input 
        if (parseInt(subResult) = False) {
            document.getElementById("subResult").innerText= "Please use numerals 0-9";
        }
        */
    document.getElementById("subResult").innerText= "Result: " + subResult;

}


function addNum () {

    var num1 = parseInt(document.getElementById("add1").value); 
    var num2 = parseInt(document.getElementById("add2").value); 

    addResult = num1 + num2; 

    console.log(addResult);

    document.getElementById("addResult").innerText= "Result: " + addResult;

}


function divNum () {

    var num1 = document.getElementById("div1").value; 
    var num2 = document.getElementById("div2").value; 

    divResult = num1 / num2; 

    console.log(divResult);

    document.getElementById("divResult").innerText= "Result: " + divResult;

}


function multiNum () {

    var num1 = document.getElementById("multi1").value; 
    var num2 = document.getElementById("multi2").value; 

    multiResult = num1 * num2; 

    console.log(multiResult);

    document.getElementById("multiResult").innerText= "Result: " + multiResult;

}


function logName () {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value; 

    fullName = firstName + ' ' + lastName; 

    console.log(fullName);

    document.getElementById("fullNameSubmit").innerText= "Your name is: " + fullName; 

}