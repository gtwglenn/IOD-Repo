// Module 3 Labs -- JS Intermediate 

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





// 2.)      I don't like directions like these because wtf is the max length? 20? 30? 40? 
        // make function truncate(str, max) --> truncates string IF total length > max length 
            // return either: truncated text, shortened w/ ellipses
                // or original text 

    



    function truncateMyString (string, maxLength) {

        if (string.length > maxLength)  {

            return string.slice(0, maxLength) + "...";      //function reads string from starting index (0) and slices once it reaches maxLength -> adds ellipses 

        }   // end if 

        return string; 


    }                   // end function 




    let randomString = "So, Sally can wait. She knows it's too late as we're walking on by.";       // this string should be truncated by function 
    let randomString1 = "I got my head shaved. By a jumbo jet.";                                    // this string should not be truncated 

    let truncatedString = truncateMyString(randomString, 37); 

    let truncatedString1 = truncateMyString(randomString1, 37); 

    console.log(truncatedString, truncatedString1); 


    // 2.) b.) use truncate fucntion that makes use of a conditional operator 

            // as if you can make one WITHOUT a conditional operator??? 



    function truncateMyString (string, maxLength) {


        return string.length > maxLength ? string.slice(0, maxLength) + "..." : string; 
        // set expression parameters --> ifTrue : ifFalse --> in this case, ifFalse -- return string (do nothing to it)
 
    }     
    



    // 3.)  - add 2 new values to end, - add 2 to beginning, - sort alphabetically 
            // write function --> replaces the middle value of array w/ a new value 
            // write function --> returns new array containing all animals that begin w/ beginsWith string ?? *make it work upper and lower case 

    
            const animals = ['Tiger', 'Giraffe']; 
            console.log(animals);

            animals.push("Kangaroo", "Elephant");
            animals.unshift("Beaver", "Racoon");

            console.log(animals);

            animals.sort();

            // using 'animals' as array --> need to find middle value of array 

            function replaceMiddleAnimal (newValue) {

                let middleNum = ( animals.length / 2 );  // total length of array divided by two --> "middle" number 
                let indexNum = Math.floor(middleNum);   // round middleNum down (in case of odd number) --> indexNum value can be used for splice(indexNum)

                //indexNum --> splice() @ "median" but not really but who is counting
                
                animals.splice(indexNum, 1, newValue); // should splice animals array @ indexNum --> remove 1 value --> replace with 'newValue' (Monkey) 
                
                let newAnimals = animals;               // create new array 'newAnimals' from modified 'animals' array 
                return newAnimals;                      // returns newAnimals 
            }       // end function

           
           
            let newAnimals = replaceMiddleAnimal("Monkey");  //calls function w/ "Monkey" set as 'newValue' 

            console.log(newAnimals);                        //print new array w/ newValue 


                // using array newAnimals as a modified version of animals array in following function


            function findMatchingAnimals(beginsWith) {

                const lowerCaseBeginsWith = beginsWith.toLowerCase();       //beginsWith argument -> lower case (in case it isn't already)
                    // creating new value lowerCaseBeginsWith --> use later in filter() method 

                return newAnimals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith)); //using lowerCaseBeginsWith to filter animals that start w/ beginsWith argument ? I think?  

            }


            let matchingAnimals = findMatchingAnimals("m");     // "m" = 'beginsWith' argument for findMatchingAnimals()
                console.log(matchingAnimals);  

                matchingAnimals = findMatchingAnimals("t");     // "t" = 'beginsWith' argument for findMatchingAnimals()
                console.log(matchingAnimals);  

                matchingAnimals = findMatchingAnimals("b");     // "b" = 'beginsWith' argument for findMatchingAnimals()
                console.log(matchingAnimals);

            // so using 'let' *once* lets you redifine that value each time you call the function ? 


