import { useEffect, useState } from 'react';
import "./mouses.css";
import Card from './card';
import cart from "../../../assets/cart.png"
import { useNavigate } from 'react-router-dom';

function Mouses({ prods }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedProds, setSearchedProds] = useState([]);
    const navigate = useNavigate();

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

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
        <div className="mouse-page">
            <div className='search-wrapper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input placeholder='Search Mouses' className='searchBar' type="text" name="searchTerm" value={searchTerm} onChange={handleSearchChange}/>
                <svg className='searchIcon'>
                    <circle cx="13" cy="13" r="10" stroke="#62CAEE" stroke-width="3" fill="transparent" />
                    <path className='searchLine' d="M 17 23 L 25 40" />
                </svg>
            </div>
            <Card prods={searchedProds}/>
            <div style={{position: 'fixed', right: '0px', top: '0px', margin: '20px'}}>
                <img onClick={() => navigate('/cart')} className='cart-btn' src={cart} alt='Cart'/>
            </div>
        </div>
    );
}

export default Mouses;