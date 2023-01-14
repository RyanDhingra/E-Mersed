import { useEffect, useState } from "react";
import { commerce } from '../../../lib/index.js';
import Checkout from "./checkout.js";

const Checkout = ({ cart, captureCheckout }) => {
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

export default Checkout