//Module 3 - JS Intermediate - Question 2
//Garrard Glenn 


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

            // I will use a ternary operator for fun 



    function truncateMyString (string, maxLength) {


        return string.length > maxLength ? string.slice(0, maxLength) + "..." : string; 
        // set expression parameters --> ifTrue : ifFalse --> in this case, ifFalse -- return string (do nothing to it)
 
    }     