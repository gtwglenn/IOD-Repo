

document.addEventListener('DOMContentLoaded', () => {
    newCard();  
});



function newCard() {

// WAY TO DEFINE YER VURIABLES YA IDJIT 

    const template = document.getElementById('jsonCardTemp'); 
    const cardList = document.getElementById('jsonCardList');  

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(json => {
            console.log(json);

            // Access and update the card content from the fetched JSON
            // clonedTemplate.querySelector('.cardTitle').innerText = json[1].title;  
            // clonedTemplate.querySelector('.cardSubtitle').innerText = `Post ID: ${json[1].id}`;  
            // clonedTemplate.querySelector('.cardText').innerText = json[1].body;  

            for (let i = 0; i < json.length; i++) {

                const clonedTemplate = document.importNode(template.content, true); 

                clonedTemplate.querySelector('.cardTitle').innerText = json[i].title;
                clonedTemplate.querySelector('.cardSubtitle').innerText = `Post ID: ${json[i].id}`;
                clonedTemplate.querySelector('.cardText').innerText = json[i].body; 
                // clonedTemplate.querySelector('').innerText = json[i].
            
                cardList.appendChild(clonedTemplate);
            }




            // Append the cloned template to the parent container
            
        })
        .catch(error => console.log('Error fetching data:', error));  // Handling any fetch errors
}
