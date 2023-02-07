import { useEffect, useState } from 'react';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
import Token from './token.js';

function Cart({ cart, captureCheckout, updateQuantity, removeItem }) {
    const [dcode, setDcode] = useState("");
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [region, setRegion] = useState("Select Province/State");
    const [tax, setTax] = useState("...");
    const [total, setTotal] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const handleDcodeChange = event => {
        setDcode(event.target.value)
    }

    useEffect(() => {
        setItems(cart?.line_items)
        console.log(cart)
        const startTotal = cart?.subtotal? cart?.subtotal.raw:0;
        setTotal((startTotal + 10).toFixed(2))
        if (cart.line_items) {
            setLoaded(true)
        }
    }, [cart])

    const taxCalc = () => {
        const price = cart?.subtotal ? cart.subtotal.raw : 0;
        const rates = {
            "AB": 0.05,
            "BC": 0.12,
            "MB": 0.12,
            "NB": 0.15,
            "NL": 0.15,
            "NS": 0.15,
            "NT": 0.05,
            "ON": 0.13,
            "PE": 0.15,
            "QC": 0.14975,
            "SK": 0.11,
            "YT": 0.05,
            "NU": 0.05
        }

        if (region !== "Select Province/State") {
            const currRate = rates[region]
            const currTax = price * currRate
            setTax(currTax.toFixed(2))
            const total = currTax + 10 + price
            setTotal(total.toFixed(2))
        }
    }

    useEffect(() => {
        taxCalc()
    }, [region])

    const handleDecreaseQuantity = (id, quantity) => {
        if (quantity === 1) {
            removeItem(id)
        } else {
            updateQuantity(id, quantity - 1)
        }
        setLoaded(false)
    }

    const handleIncreaseQuantity = (id, quantity) => {
        updateQuantity(id, quantity + 1)
        setLoaded(false)
    }

    return (
        <>
            <div style={{zIndex: 2, width: '100%', height: '100vh', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', visibility: !loaded ? "visible":"hidden"}}>
                <h1 style={{color: '#62CAEE', fontSize: '5rem'}}>Loading...</h1>
            </div>
            <div style={{zIndex: 1,backgroundColor: 'black', width: '100%', height: '100vh', opacity: 0.8, position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', visibility: !loaded ? "visible":"hidden"}}>
            </div>
            <div className='cartPage'>
                <div className='summary-cont'>
                    <div className='order'>
                        <div className='cart-ls'>
                            <div className='prods'>
                                <div className={items?.length > 0 ? 'notEmpty': 'isEmpty'}>
                                    <h1 style={{fontSize: '50px'}}>CART IS EMPTY</h1>
                                </div>
                                <div className={items?.length > 0 ? 'items':'items empty'}>
                                    {items?.map((prod, index) => (
                                        <div key={index}>
                                            <h1 style={{margin: '0px'}}>{prod.name}</h1>
                                            <div style={{display: 'flex', height: '35px', marginTop: '15px', marginBottom: '20px', justifyContent: 'center'}}>
                                                <div style={{width:'35px', height:'35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                    <svg className='quantity' width='30px' height='5px'>
                                                        <polygon onClick={() => handleDecreaseQuantity(prod.id, prod.quantity)} points={"0,0 30,0 30,5 0,5"} style={{fill: '#62CAEE', cursor: 'pointer'}}/>
                                                    </svg>
                                                </div>
                                                <h1 style={{margin: '0px 20px 0px 15px'}}>{prod.quantity}</h1>
                                                <svg className='quantity' width='35px'>
                                                    <polygon onClick={() => handleIncreaseQuantity(prod.id, prod.quantity)} points={"0,15 15,15 15,0 20,0 20,15 35,15 35,20 20,20 20,35 15,35 15,20 0,20"} style={{fill: '#62CAEE', cursor:  'pointer'}}/>
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={items?.length > 0 ? 'prices':'prices empty'}>
                                    {items?.map((prod, index) => (
                                        <div key={index}>
                                            <h1 style={{margin: '0px'}}>{prod.price.formatted_with_symbol}</h1>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 style={{paddingLeft: "20px", paddingTop: "20px", borderTop: "5px solid #62CAEE", marginTop: '0px'}}>Subtotal: {cart ? cart.subtotal ? cart.subtotal.formatted_with_symbol: "...": "..."}</h1>
                                <h1 style={{paddingLeft: "20px"}}>Tax: {tax === "..." ? tax: "$" + tax}</h1>
                                <h1 style={{paddingLeft: "20px"}}>Shipping: $10.00</h1>
                                <h1 style={{paddingLeft: "20px", paddingTop: "20px", borderTop: '5px solid #62CAEE'}}>Total: ${total}</h1>
                            </div>
                        </div>
                        <div className='cart-rs'>
                            <Token cart={cart} captureCheckout={captureCheckout} region={setRegion}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;