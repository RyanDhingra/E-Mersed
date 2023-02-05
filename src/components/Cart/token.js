import { useEffect, useState } from "react";
import { commerce } from '../../lib/commerce.js';
import Checkout from "./checkout.js";

const Token = ({ cart, captureCheckout, region }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [taxRates, setTaxRates] = useState([]);

    useEffect(() => {
        console.log(checkoutToken)
    }, [checkoutToken])

    useEffect(() => {
        const generateCheckoutToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
                //const tax = await commerce.taxRates.list();
                setCheckoutToken(token);
                //setTaxRates(tax)
            } catch (error) {

            }
        }
        generateCheckoutToken();
    }, [cart]);

    return (
        <Checkout token={checkoutToken} checkout={captureCheckout} cart={cart} changeRegion={region}/>
    )
}

export default Token;