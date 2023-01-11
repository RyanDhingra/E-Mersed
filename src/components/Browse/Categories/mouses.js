import React from 'react';
import { useState } from 'react';
import "./mouse.css";
import Card from './card';

function Mouse() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="mouse-page">
            <div className='search-wrapper' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <input placeholder='Search Mouse' className='searchBar' type="text" name="searchTerm" value={searchTerm} onChange={handleSearchChange}/>
                <svg className='searchIcon'>
                    <circle cx="13" cy="13" r="10" stroke="#62CAEE" stroke-width="3" fill="transparent" />
                    <path className='searchLine' d="M 17 23 L 25 40" />
                </svg>
            </div>
            <Card/>
        </div>
    );
}

export default Mouse;