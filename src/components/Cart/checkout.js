import React from 'react';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Checkout({ checkoutToken, shippingData }) {
    
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } =  await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                    line_items: checkoutToken.live.line_items,
                    customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                    shipping: { 
                        name: 'Primary', 
                        street: shippingData.address, 
                        town_city: shippingData.city, 
                        county_state: shippingData.shippingSubdivision,
                        postal_zip_code: shippingData.postal_zip,
                        country: shippingData.country
                    },
                    fulfillment: { shipping_method: shippingData.shippingOption },
                    payment: {
                        gateway: 'stripe',
                        stripe: {
                            payment_method_id: paymentMethod.id
                        }
                    }
                }

                checkoutToken(checkoutToken.id, orderData);
            } 
        }

    return (
        <div>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe}) => (
                        <form>
                            <CardElement />
                            <div>
                                <button type='submit' disabled={!stripe}>
                                    Order Now
                                </button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </div>
    );
}

export default Checkout;