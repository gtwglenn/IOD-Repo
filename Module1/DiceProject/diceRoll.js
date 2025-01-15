


// onclick --> rolls dice 

    // initialize random number generator 

    // --> pull corresponding .png from dir folder 
    // --> display face 

    // --> record result(s) on Results Tab 
    // **still not complete^ 





/*     D I C E     R O L L     F U N C T I O N S      */




function spinD6 () {
    //number generator 1-6 

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber); 
    // randomNumber is generated --> 'randomNumber'

    document.getElementById("6result").textContent = "Result: " + randomNumber; 
    // change display image to the result of dice roll

    document.getElementById("resultList").textContent = randomNumber;
    // display result in Results Tab

    var imageFileName = "d6/d6-" + randomNumber + ".PNG";
    // retrieve png file of corresponding d6 face 

    var imageElement = document.getElementById("d6Face");
    imageElement.src = imageFileName; 
    imageElement.style.display = "block"; 
    //displays file in 'd6Face' placeholder 


    // fix button placement 

    const newD6Result = randomNumber; 
    console.log(newD6Result); 
    return newD6Result; 

    // pass newD6Result --> Results Tab 


}

function spinD12 () {
    //number generator 1-12
    
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log(randomNumber); 
    // randomNumber is generated --> 'randomNumber'

    document.getElementById("12result").textContent = "Result: " + randomNumber; 
    // change display image to the result of dice roll

    document.getElementById("resultList").textContent = randomNumber;
    // display result in Results Tab

    var imageFileName = "d12/d12-" + randomNumber + ".PNG";

    var imageElement = document.getElementById("d12Face");
    imageElement.src = imageFileName; 

    imageElement.style.display = "block"; 

    // fix button placement 

    const newD12Result = randomNumber; 
    console.log(newD12Result); 
    return newD12Result; 

    // pass newD12Result --> Results Tab 
}

function spinD20 () {
    //number generator 1-20

    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber); 

    document.getElementById("20result").textContent = "Result: " + randomNumber; 

    // change display image to the result of dice roll 

    document.getElementById("resultList").textContent = randomNumber;

    // display result in Results Tab

    var imageFileName = "d20/d20-" + randomNumber + ".PNG";

    var imageElement = document.getElementById("d20Face");
    imageElement.src = imageFileName; 

    imageElement.style.display = "block"; 

    // fix button placement 

    const newD20Result = randomNumber; 
    console.log(newD20Result); 
    return newD20Result; 

    // pass newD20Result --> Results Tab 
    
}




/*     S E L E C T I O N      P A G E S      */




function d6page () {

document.getElementById("d6button").addEventListener("click", function() {
    // -> d6 select screen 
    window.location.href = "d6select.html"; // on-click --> d6select page
  });

}

function d12page () {

    document.getElementById("d12button").addEventListener("click", function() {
        // -> d12 select screen 
        window.location.href = "d12select.html"; // on-click --> d6select page
    });
    
}


function d20page () {

    document.getElementById("d20button").addEventListener("click", function() {
        // -> d20 select screen 
        window.location.href = "d20select.html"; // // on-click --> d6select page
    });
        
}




/*      P R I N T      R E S U L T S     F U N C T I O N       */ 



    /* D 6  R E S U L T S   T A B */


let lastD6Result = null; 

function appendD6Result (newD6Result) {

    const resultList = document.getElementById('resultList');

    // create new list item --> display previous result 
    const newItem = document.createElement('li');

    if (lastD6Result !== null) {
        newItem.textContent = 'Previous: ' + lastD6Result;
    } else {
        newItem.textContent = ' ';
    }

    // add new item to results list 
    resultList.appendChild(newItem); 

    // change lastResult to newD6Result for new iteration 
    lastD6Result = newD6Result; 

}

document.getElementById('d6button').addEventListener('click', function() {

    const newD6Result = spinD6();
    appendD6Result(newD6Result);

});



    /* D 12  R E S U L T S   T A B */

let lastD12Result = null; 

function appendD12Result (newD12Result) {

    const resultList = document.getElementById('resultList');
    
    // create new list item --> display previous result 
    const newItem = document.createElement('li');
    
    if (lastD12Result !== null) {
        newItem.textContent = 'Previous: ' + lastD12Result;
    } else {
        newItem.textContent = ' ';
    }
    
    // add new item to results list 
    resultList.appendChild(newItem); 
    
    // change lastResult to newD6Result for new iteration 
    lastD12Result = newD12Result; 
    
}
    
document.getElementById('d12button').addEventListener('click', function() {
    
    const newD12Result = spinD12();
    appendD12Result(newD12Result);
    
});
