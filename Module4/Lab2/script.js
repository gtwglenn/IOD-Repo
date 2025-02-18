// Array of artist objects
const artists = [
    {
        name: "Vincent van Gogh",
        portfolio: [
            {
                title: "Portrait",
                url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
            },
            {
                title: "Sky",
                url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
            }
        ]
    },
    {
        name: "Pablo Picasso",
        portfolio: [
            {
                title: "The Old Guitarist",
                url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"
            },
            {
                title: "Three Musicians",
                url: "https://www.pablopicasso.org/assets/img/paintings/three-musicians.jpg"
            }
        ]
    },
    {
        name: "Salvador Dali",
        portfolio: [
            {
                title: "Galatea of the Spheres",
                url: "https://upload.wikimedia.org/wikipedia/en/0/08/Galaofspheres.JPG"
            },
            {
                title: "Metamorphosis of Narcissus",
                url: "https://upload.wikimedia.org/wikipedia/en/2/21/Metamorphosis_of_Narcissus.jpg"
            }
        ]
    }
];

function addCard() {
    const template = document.getElementById('artistCardTemp');
    
    if (!template) {
        console.error('Template not found!');
        return;
    }

    // Loop through the array of artists
    artists.forEach(artist => {
        // Clone the template content for each artist
        const clonedTemplate = template.content.cloneNode(true);

        // Add artist name to the card title
        clonedTemplate.querySelector('.cardTitle').innerText = artist.name;
        clonedTemplate.querySelector('.cardText').innerText = 'There is just so much to say about ' + artist.name;

        // Insert portfolio images for the artist
        const cardBody = clonedTemplate.querySelector('.cardBody');

        artist.portfolio.forEach(item => {
            const img = document.createElement('img'); // Create image element
            img.src = item.url; // Set the source URL
            img.alt = item.title; // Set the alt text
            img.title = item.title; // Set the title for hover text
            img.classList.add('portfolio-image'); // Add a class for styling
            cardBody.appendChild(img); // Append the image inside the cardBody
        });

        // Append the cloned template to the card list
        document.getElementById('cardList').appendChild(clonedTemplate);
    });
}

// Wait for the DOM to load before executing the function
document.addEventListener('DOMContentLoaded', function () {
    addCard();
});


// <!-- there I changed the file now push to my github -->