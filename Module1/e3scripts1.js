// used ChatGPT to help write the following JS functions 

function changeColumn1() {

    var column1 = document.getElementById("column1");
    column1.style.backgroundColor = "crimson";
        // background color --> crimson

    const heading1 = document.getElementById("heading1");
    heading1.textContent = newText;
        // change heading text

    const image1 = document.getElementById("image1");
    image1.src = "alien1.PNG";
        // change image 

    }

    function changeColumn2() {

    var column2 = document.getElementById("column2");
    column2.style.backgroundColor = "crimson";
        // background color --> crimson 

    const heading2 = document.getElementById("heading2");
    heading2.textContent = "Earthlings";
        // change heading text 

    const image1 = document.getElementById("image1");
    image2.src = "alien2.PNG";
        // change image 

    }


    function changeColumn1Again() {

    var column1 = document.getElementById("column1");
    column1.style.backgroundColor = "goldenrod";
        // background color --> goldenrod

    const heading1 = document.getElementById("heading1");
    heading1.textContent = "Hello";
        // change heading text

    const image1 = document.getElementById("image1");
    image1.src = "ex3img1.PNG";
        // change image 

}

    function changeColumn2Again() {

    var column2 = document.getElementById("column2");
    column2.style.backgroundColor = "goldenrod";
        // background color --> goldenrod

    const heading2 = document.getElementById("heading2");
    heading2.textContent = "World";
        // change heading text

    const image2 = document.getElementById("image2");
    image2.src = "ex3img2.PNG";
        // change image 

}



function changeText1() {

    //console.log(document.getElementById('newText1').value);

    var newText = document.getElementById("newText1").value;

    updateHeadingText1(newText);

}

function updateHeadingText1(newText) {

    document.getElementById("headingText").innerText = newText; 


}