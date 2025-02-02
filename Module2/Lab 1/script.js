

//marketBox id: marketBox --> value is marketYes

//Submit Button - id="submitBtn" class="button"












/*      BUT WHO CHECKS THE CHECKBOX CHECKER?    */ 

//constant variables for event listener 
const checkbox = document.getElementById("marketBox"); 
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("formId");

//event listener for form submission 
form.addEventListener("submit", function(event) {

    if (!checkbox.checked)  {   //if NOT checked 

        //or marketBox == marketYes

        event.preventDefault(); //prevent submission

        console.log("WARNING! Uncooperative user detected.");

        alert("Please reconsider subscribing to our lovely... what did our lawyers tell me to call them... suggestions! (Please check the box so that you can't sue us. Well, you could still sue us. But you should check the box anyways. To make it fair.)");

    } else {

        console.log("Satisfactory_boop_sound.mp3"); 

    }

}); 

