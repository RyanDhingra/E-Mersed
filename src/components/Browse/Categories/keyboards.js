import React from 'react';
import { useState } from 'react';
import "./keyboards.css";

function Keyboards() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="keyboard-page">
            <div className='search-wrapper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input placeholder='Search Keyboards' className='searchBar' type="text" name="searchTerm" value={searchTerm} onChange={handleSearchChange}/>
                <svg className='searchIcon'>
                    <circle cx="13" cy="13" r="10" stroke="#62CAEE" stroke-width="3" fill="transparent" />
                    <path className='searchLine' d="M 17 23 L 25 40" />
                </svg>
           </div>
        </div>
    );
}

export default Keyboards;