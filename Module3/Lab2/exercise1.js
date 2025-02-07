//Module 3 - JS Intermediate - Question 1 
//Garrard Glenn 


// 1.) function that uses a string as a parameter --> returns string w/ first character of each word capitalized 
        // there are definitely multiple ways to do this 


        let words = [ 'one', 'two', 'three', 'four', 'five' ]; 
        // create an array with values 
    let wordsString = words.join(', '); 
        // arguments in .join() --> how separators will be used in string value 
            // ', ' --> adds a comma at the end of each value followed by a space, so the string reads like a list 
    
    console.log(wordsString); // prints newly created string from array values 
    
    
    // function to capitalize first letter of each word 
    
    function capitalizeFirstLetter (string) {
        return string
    
        .split(' ')         // split string into array (?)
        .map(word => {      // use map to create iterations of the words in the array 
    
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
    
        }) 
    
                            // charAt(0) ?? 
    
        .join(' ');         // joins array back into a string ??? 
    
    }
    
    
    let capitalizedString = capitalizeFirstLetter(wordsString);     // creates new string --> should copy the results of passing 'wordsString' to function 
    console.log(capitalizedString);                                 // to make sure that it works 
    
    
    