import { useEffect, useState } from "react";
import { commerce } from '../../lib/commerce.js';
import Checkout from "./checkout.js";

const Token = ({ cart, captureCheckout }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect(() => {
        const generateCheckoutToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'})
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateCheckoutToken();
    }, [cart]);

    return (
        <Checkout token={checkoutToken} checkout={captureCheckout} cart={cart}/>
    )
}

export default Token;