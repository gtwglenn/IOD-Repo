


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

    document.getElementById("6result").textContent = "Result: " + randomNumber; 

    // change display image to the result of dice roll

    document.getElementById("resultList").textContent = randomNumber;

    // display result in Results Tab

    var imageFileName = "d6/d6-" + randomNumber + ".PNG";

    var imageElement = document.getElementById("d6Face");
    imageElement.src = imageFileName; 

    imageElement.style.display = "block"; 

    // fix button placement 

    const newResult = randomNumber; 
    console.log(newResult); 
    return newResult; 

    // pass newD6Result --> Results Tab 


}

function spinD12 () {
    //number generator 1-12
    
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    console.log(randomNumber); 

    document.getElementById("12result").textContent = "Result: " + randomNumber; 

    // change display image to the result of dice roll

    document.getElementById("resultList").textContent = randomNumber;

    // display result in Results Tab

    var imageFileName = "d12/d12-" + randomNumber + ".PNG";

    var imageElement = document.getElementById("d12Face");
    imageElement.src = imageFileName; 

    imageElement.style.display = "block"; 

    // fix button placement 

    const newResult = randomNumber; 
    console.log(newResult); 
    return newResult; 

    // pass newD6Result --> Results Tab
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

    const newResult = randomNumber; 
    console.log(newResult); 
    return newResult; 

    // pass newD6Result --> Results Tab
    
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




let lastResult = null; 

function appendResult (newResult) {
    console.log('start appendResult')

    const resultList = document.getElementById('resultList');

    // create new list item --> display previous result 
    const newItem = document.createElement('li');

    if (lastResult !== null) {
        newItem.textContent = 'Previous: ' + lastResult;
    } else {
        newItem.textContent = ' ';
    }

    // add new item to results list 
    resultList.appendChild(newItem); 

    // change lastResult to newD6Result for new iteration 
    lastResult = newResult; 

}

document.getElementById('d6button').addEventListener('click', function() {

    const newResult = spinD6();
    appendResult(newResult);

});

document.getElementById('d12button').addEventListener('click', function() {

    const newResult = spinD12();
    appendResult(newResult);

});

document.getElementById('d20button').addEventListener('click', function() {

    const newResult = spinD20();
    appendResult(newResult);

});

