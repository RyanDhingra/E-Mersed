import { useState } from 'react';
import "./cart.css";

function Cart() {
    const [dcode, setDcode] = useState("");

    const handleDcodeChange = event => {
        setDcode(event.target.value)
    }

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
                            <div style={{display: 'flex'}}>
                                <h1>Total:</h1> 
                                <h1 style={{fontFamily: 'Pirulen'}}>$16.99</h1>
                            </div>
                            <div style={{display: 'flex'}}>
                                <h1>HST:</h1>
                                <h1 style={{fontFamily: 'Pirulen'}}>$16.99</h1>
                            </div>
                            <div>
                                <h1>Shipping: ?</h1>
                            </div>
                            <h1>Discount Code:</h1>
                            <input placeholder='Enter Code' className='dcode' type="text" name="dcode" value={dcode} onChange={handleDcodeChange}/>
                        </div>
                        <div className='proceed'>
                            <div style={{display: 'flex'}}>
                                <h1>Total:</h1>
                                <h1 style={{fontFamily: 'Pirulen'}}>$200.99</h1>
                            </div>
                            <button className='proceed-btn'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;