//Module 3 - JS Intermediate - Question 9
//Garrard Glenn 


// function = sumSalaries(salaries) --> calculates/returns sum total of all salaries 

// function = topEarner(salaries) --> calculates/returns name of highest earning employee 

let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
    }; 

function sumSalaries(salaries) {

    let payrollTotal = Object.values(salaries).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return payrollTotal;

}   // end function 

console.log(sumSalaries(salaries));


function topEarner(salaries) {
  
    let topPerson = Object.entries(salaries).reduce((highest, current) => {           // Convert the object to an array of [name, salary] pairs and find the person with the highest salary
        return current[1] > highest[1] ? current : highest;                            // Compare salaries
    });

    
    return topPerson[0];                                                                // The name is at index 0 of the [name, salary] pair
}

console.log(topEarner(salaries));