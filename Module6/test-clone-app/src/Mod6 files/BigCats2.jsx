import { useState } from 'react'; 
import './BigCats.css'

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
];


function SingleCat({id, name, latinName, image, onRemoveCat}) {

    return (
        <li>
            <img src={image} width="400" alt={name} />
            <h3>{name}</h3>
            <em>({latinName})</em>&nbsp; 
            <a onClick={() => onRemoveCat(id)}>Delete</a>
        </li>
    )
}


function AddCatForm({onAddCat}) {

    const [name, setName] = useState(''); 
    const [latinName, setLatinName] = useState(''); 
    const [imageURL, setImageURL] = useState(''); 

    const handleAddCat = (e) => {

        e.preventDefault(); 
        onAddCat({name, latinName, image: imageURL});

    }

    return (

        <form onSubmit={handleAddCat}> 
            <h3>Add New Cat</h3>
            <label>
                Name: 
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label><br/>
            <label>
                Latin Name: 
                <input name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
            </label><br/>
            <label>
                Image URL:
                <input name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            </label><br/>
            <button>Add Cat</button>
        </form>
    )
}


function BigCats() {


    const [currentCats, setCurrentCats] = useState(cats); 

    const handleSortCats = () => {

        let newCats = [...currentCats]; 
        newCats.sort((cat1, cat2) => cat1.name < cat2.name ? -1 : 1 ); 
        setCurrentCats(newCats);

    }


    const handleReverseCats = () => {

        let newCats = [...currentCats];
        newCats.reverse(); 
        setCurrentCats(newCats); 

    }

    const handleFilterCats = () => {

        let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera')); 
        setCurrentCats(newCats); 

    }

    const handleResetCats = () => {

        setCurrentCats(cats); 

    }

    const handleAddCat = (newCat) => {

        newCat.id = currentCats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1; 
        setCurrentCats([...currentCats, newCat]);

    }

    const handleRemoveCat = (deleteId) => {

        let newCats = currentCats.filter(cat => cat.id != deleteId);
        setCurrentCats(newCats); 

    }

    const catList = currentCats.map(cat => (

        <SingleCat name={cat.name} latinName={cat.latinName} key={cat.id} image={cat.image} id={cat.id} onRemoveCat={handleRemoveCat}/>

    ))



    return (
        <div className="BigCats">
            <h2>Big Cats</h2>
            <ul>{catList}</ul>
            <div>
                <button onClick={handleSortCats}>Sort Alphabetically</button>
                <button onClick={handleReverseCats}>Reverse List</button>
            </div>
            <div>
                <button onClick={handleFilterCats}>Filter Pantheras</button>
                <button onClick={handleResetCats}>Reset List</button>
            </div>
            <AddCatForm onAddCat={handleAddCat}/>
        </div>
    )



}


export default BigCats
