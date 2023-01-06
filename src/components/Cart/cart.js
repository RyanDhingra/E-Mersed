import React from 'react';
import "./cart.css";

function Cart() {
    return (
        <div className='cartPage'>
            <div className='summary-cont'>
                <div className='tools-panel'>

                </div>
                <div className='order'>
                    <div className='ls'>
                        <div className='items'>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                            <h1>Sample</h1>
                        </div>
                        <div className='prices'>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                            <h1>$1.99</h1>
                        </div>
                    </div>
                    <div className='rs'>
                        <div className='summary'>
                            <h1>Total: $16.99</h1>
                            <h1>HST: $16.99</h1>
                            <h1>Discount Code:</h1>
                            <input></input>
                        </div>
                        <div className='proceed'>
                            <h1>Total: $200.99</h1>
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;