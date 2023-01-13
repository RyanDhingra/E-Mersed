import { useEffect, useState } from 'react';
import "./keyboards.css";
import Card from './card';

function Keyboards({ prods, addToCart }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedProds, setSearchedProds] = useState([]);

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
        <div className="keyboard-page">
            <div className='search-wrapper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input placeholder='Search Keyboards' className='searchBar' type="text" name="searchTerm" value={searchTerm} onChange={handleSearchChange}/>
                <svg className='searchIcon'>
                    <circle cx="13" cy="13" r="10" stroke="#62CAEE" strokeWidth="3" fill="transparent" />
                    <path className='searchLine' d="M 17 23 L 25 40" />
                </svg>
            </div>
            <Card prods={searchedProds} addToCart={addToCart}/>
        </div>
    );
}

export default Keyboards;