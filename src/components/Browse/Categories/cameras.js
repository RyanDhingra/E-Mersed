import { useEffect, useState } from 'react';
import "./cameras.css";
import Card from './card';

function Cameras({ prods }) {
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchedProds, setSearchedProds] = useState(prods);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        setSearchedProds(prods)
    }, [prods])

    useEffect(() => {
        let searchedItems = [];

        prods.forEach(product => {
            let currName = product.name.toLowerCase();
            
            if (currName.includes(searchTerm)) {
                searchedItems.push(product)
            }   
        });

        setSearchedProds(searchedItems)
    }, [searchTerm])

    return (
        <div className="camera-page">
            <div className='search-wrapper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input placeholder='Search Cameras' className='searchBar' type="text" name="searchTerm" value={searchTerm} onChange={handleSearchChange}/>
                <svg className='searchIcon'>
                    <circle cx="13" cy="13" r="10" stroke="#62CAEE" stroke-width="3" fill="transparent" />
                    <path className='searchLine' d="M 17 23 L 25 40" />
                </svg>
            </div>
            <Card prods={searchedProds}/>
        </div>
    );
}

export default Cameras;