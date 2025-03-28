import React from 'react'; 
import SingleCat from './SingleCat'; 


function BigCats() {

    const bigCatsData = [

        { name: 'Lion', imgUrl: 'https://www.shutterstock.com/image-photo/majestic-lion-sits-morning-light-260nw-2471606605.jpg' },
        { name: 'Tiger', imgUrl: 'https://www.shutterstock.com/image-photo/close-wild-south-china-tiger-260nw-2471709659.jpg' },
        { name: 'Leopard', imgUrl: 'https://www.shutterstock.com/image-photo/leopard-tree-260nw-115975144.jpg' },
    ];


    return (

        <div>
            <h1>Big Cats</h1>

            {bigCatsData.map((cat, index) => (

                    <SingleCat key={index} name={cat.name} imgUrl={cat.imgUrl}  />

            ))}

        </div>

    ); 

}



export default BigCats; 