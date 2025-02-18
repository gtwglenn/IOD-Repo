//Module 3 - JS Intermediate - Question 6
//Garrard Glenn 

// function = unique(duplicatesArray)

// create function that checks one array for duplicates -> creates new array w/ only unique values 

    // use set --> automatically removes duplicates 

let duplicatesArray = [ 1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 9 ]; 
    // function should only return even numbers 



function unique(duplicatesArray) {

    return Array.from(new Set(duplicatesArray));        // create new set from duplicatesArray --> return array from that 

}   // end function 

let uniqueArray = unique(duplicatesArray);              // creates uniqueArray from executing function (contains unique values)

console.log(uniqueArray); 