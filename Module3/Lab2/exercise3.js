//Module 3 - JS Intermediate - Question 3
//Garrard Glenn 


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