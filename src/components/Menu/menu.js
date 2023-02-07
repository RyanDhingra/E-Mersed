import React from 'react';
import "./menu.css"
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    return (
        <div className='menuPage'>
            <ol className='optns'>
                <li className='item1' onClick={() => navigate('/browse')}><p className='itm-txt'>Browse</p></li>
                <li className='item2' onClick={() => navigate('/vsd')}><p className='itm-txt'>Explore VSD</p></li>
                <li className='item3' onClick={() => navigate('/cart')}><p className='itm-txt'>Cart</p></li>
            </ol>
        </div>
    );
}

export default Menu;