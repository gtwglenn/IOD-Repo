//Module 3 - JS Intermediate - Question 4
//Garrard Glenn 


// function: camelCase(cssProp) --> changes dash-separated CSS properties into camel cased 

// ex: 'margin-left' --> 'marginLeft' 

// CSS property -- as string value? --> pass string value as 'cssProp' 
        // --> check 'cssProp'/string value for any dashes (by using filter? or similar function) --> *good idea but no 
                // maybe go back and try my original idea for the sake of spaghetti code? 
                    // all of chatbots examples use split() 
                    // I still think you could use filter but it would be mega spaghetti 
            // use split() to separate string @ dash --> create array of words remaining (split() removes dash)
                // --> use counter (i) to capitalize any word after first word in array (array length = how many words are in array, not characters) 
                // --> use charAt() + toUpperCase() + slice() to amend the words in the array 




// WHAT I ORIGINALLY HAD IN MIND // 

function camelCase(cssProp) {             

    if (cssProp.includes('-'))  {       // if -> checks 'cssProp' for '-' ----- at this point, still a string value 

        let propWords = cssProp.split('-'); // create array 'words' --> take away '-' and what is left? the words w/ in the string 

        let firstWord = propWords[0];       // first word unchanged 
        
        let remainingWords = propWords.slice(1).map(word =>         // use map to create copy of word that can be edited --> then use slice() method 

            word.charAt(0).toUpperCase() + word.slice(1)

        );   // end map

        let camelCaseResult = firstWord + remainingWords.join('');

        return  camelCaseResult; 

    }   else {

        return cssProp;

    }   //end else 

}       //end function 






// HOW USEFUL ROBOTS CAN BE // 



function camelCase(cssProp) {

    let array = cssProp.split('-');     // use split() to separate string @ dash --> create array of words remaining (split() removes dash)

    for (let i = 1; 1 < array.length; i++) {        // --> use counter (i) to capitalize any word after first word in array

        array[i] = array[i].charAt(0).toUpperCase() + arr[i].slice(1);      // --> use charAt() + toUpperCase() + slice() to amend the words in the array 

    }   // end for 

    return array.join('');      // joins array --> return as string 

}       // end function 


console.log(camelCase('margin-left'));      // --> marginLeft 
console.log(camelCase('background-image')); // --> backgroundImage
console.log(camelCase('display'));          // --> display 

        

// expanding on spaghetti code idea 

// filter? or other method to search for '-' value 

    // use that as a dividing line --> send all preceding values of '-' to 'newArray1' --> all proceding values to 'newArray2' 

        // only capitalize the first character of 'newArray2' 

// *exception --> no '-' value 

    // send all characters to 'newArray' 
        
        // no need to capitalize anything because no dashes were found 


// but idk wtf For loop in there?? 

// for 'string'.includes('-') {} --> use split('-') 
        // *but split() creates ONE new array.. I want two 







// 4.) b.) different types of for loops? w/ and w/out conditional operator 

// rewritten using for... of loop: 

function camelCase(cssProp) {
    let array = cssProp.split('-');

    let result = array[0];  // Initialize with the first word in lowercase

    for (let word of array.slice(1)) {  // Iterate over the remaining words in array
        result += word.charAt(0).toUpperCase() + word.slice(1);  // Capitalize the first letter and append
    }

    return result;
}


// rewritten using forEach method: 

function camelCase(cssProp) {
    let array = cssProp.split('-');
    
    let result = array[0];  // Start with the first word in lowercase

    array.slice(1).forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1);  // Capitalize and append
    });

    return result;
}

console.log(camelCase('margin-left'));      // --> marginLeft
console.log(camelCase('background-image')); // --> backgroundImage
console.log(camelCase('display'));          // --> display