import React from 'react';
import "./menu.css"

function Menu() {
    return (
        <div className='menuPage'>
            <ol className='optns'>
                <li className='item1'><a className='itm-txt' href='browse'>Browse</a></li>
                <li className='item2'><a className='itm-txt' href='deals'>Deals</a></li>
                <li className='item3'><a className='itm-txt' href='vsd'>Explore VSD</a></li>
                <li className='item4'><a className='itm-txt' href='cart'>Cart</a></li>
            </ol>
        </div>
    );
}

export default Menu;