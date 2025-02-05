//Module 3 - JS Fundamentals - Question 7
//Garrard Glenn 


/* 7.) 
        - modify each method --> chained together (?)
        - add a new method --> print the full time final score
        - add new object property --> track # of fouls, + method to increment it
            - similar, but separate to the score (?)
        -  test object by chaining all method calls t/g in different combinations (?) 


        *confused by factoring Home/Away team totals for each category 

                would it be like awayTeam.freeThrow() --> give away team a point for a free throw ??? 

*/ 


// I was confused by this one trying to work out: how do chain Home & Away functions for basketballGame object 

        // --> because there would be two teams playing in one game --> separate stat tallies needed 
        // see: line 90 for Home+Away variation 




const basketballGame = { 

    score: 0, 
    fouls: 0,

    // fouls and score categories confuse me because I don't know how you would separate HOME from AWAY team categories/property values

    freeThrow() { 
        this.score++; 
        // +1 to score per freeThrow()
        return this;
    }, 

    basket() { 
        this.score += 2; 
        // +2 to (current) score per basket()
        return this;
    }, 

    threePointer() { 
        this.score += 3; 
        // +3 to (current) score per threePointer() 
        return this;
    }, 

    halfTime() { 
        console.log('Halftime score is '+this.score);
            // + foul count 
        console.log('Number of fouls commited: '+this.fouls);
        // prints halfTime score when called  
        return this;
    },

    //new method --> print full time final score 

    fullTime() {
        console.log('The final score is: '+this.score);
            // + foul count 
        console.log('Number of fouls commited: '+this.fouls);
        // prints halfTime score when called  
        return this; 
    },
    
    personalFoul() {
        this.fouls++; 
        // +1 to fouls per personal foul 
        return this; 

    },

    
}



/*                          A   L   T   E   R   N   A   T   I   V   E   L   Y   

            - ADD SEPARATE HOME AND AWAY OBJECTS -> USE METHOD CHAINING FOR HOME/AWAY TEAM STATS            */ 





            const basketballGame = {
                home: {
                    score: 0,
                    fouls: 0,
                    
                    // Method to increase score by 1 (free throw)
                    freeThrow() {
                        this.score++;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 2 (basket)
                    basket() {
                        this.score += 2;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 3 (three-pointer)
                    threePointer() {
                        this.score += 3;
                        return this; // Enable chaining
                    },
                    
                    // Method to increment fouls
                    foul() {
                        this.fouls++;
                        return this; // Enable chaining
                    },
                    
                    // Method to print halftime score for home team
                    halfTime() {
                        console.log(`Home Team halftime score: ${this.score}, fouls: ${this.fouls}`);
                        return this; // Enable chaining
                    },
                    
                    // Method to print full-time score for home team
                    fullTime() {
                        console.log(`Home Team full-time score: ${this.score}, fouls: ${this.fouls}`);
                    }
                },
                
                away: {
                    score: 0,
                    fouls: 0,
                    
                    // Method to increase score by 1 (free throw)
                    freeThrow() {
                        this.score++;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 2 (basket)
                    basket() {
                        this.score += 2;
                        return this; // Enable chaining
                    },
                    
                    // Method to increase score by 3 (three-pointer)
                    threePointer() {
                        this.score += 3;
                        return this; // Enable chaining
                    },
                    
                    // Method to increment fouls
                    foul() {
                        this.fouls++;
                        return this; // Enable chaining
                    },
                    
                    // Method to print halftime score for away team
                    halfTime() {
                        console.log(`Away Team halftime score: ${this.score}, fouls: ${this.fouls}`);
                        return this; // Enable chaining
                    },
                    
                    // Method to print full-time score for away team
                    fullTime() {
                        console.log(`Away Team full-time score: ${this.score}, fouls: ${this.fouls}`);
                    }
                }
            };
            
            // Example of method chaining for both Home and Away teams:
            basketballGame.home
                .basket()
                .freeThrow()
                .basket()
                .threePointer()
                .foul()
                .halfTime()
                .fullTime();
            
            basketballGame.away
                .freeThrow()
                .basket()
                .foul()
                .threePointer()
                .halfTime()
                .foul()
                .fullTime();



                // B-B-B-BONUS FEATURES: 

                // could write function to print statistics all formal like using new variables 
                // ex: 
                // Half-Time Summary: '$winningTeam' is beating '$losingTeam' 'halfTimeScore' to 'halfTimeScore'     
