import React from 'react'; 

function SingleCat({ name, imgUrl })    {

    return (
        
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
        </div>

    );

}


export default SingleCat; 