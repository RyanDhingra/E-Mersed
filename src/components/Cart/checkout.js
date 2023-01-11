import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Checkout({ checkoutToken }) {
    
    const handleSubmit = (event, elements, stripe) => {
        event.preventDefault();

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } =  await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log(error);
        } else {
            const orderData = {

                }
            }
        }
    }

    return (
        <div>
            
        </div>
    );
}

export default Checkout;