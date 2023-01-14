import React from 'react';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Checkout({ token, checkout, cart }) {

    const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
    
    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } =  await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                    line_items: token.live.line_items,
                    customer: { firstname: event.target.firstname.value, lastname: event.target.lastname.value, email: event.target.email.value },
                    shipping: { 
                        name: 'Free', 
                        street: event.target.billing_address.value, 
                        town_city: event.target.city.value, 
                        county_state: 'ON', 
                        postal_zip_code: event.target.post_zip.value, 
                        country: 'CA'
                        },
                    fulfillment: { shipping_method: token.shipping.available_options[0].id},
                    billing: {
                    name: event.target.firstname.value + " " + event.target.lastname.value,
                    street: event.target.billing_address.value,
                    town_city: event.target.city.value,
                    county_state: event.target.prov_state.value,
                    country: event.target.country.value,
                    postal_zip_code: event.target.post_zip.value
                        },
                    payment: {
                    gateway: 'Stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                        }
                    }
                };

                checkout(token.id, orderData);
                event.target.reset();
                cardElement.clear();
                token.live.line_items.clear();
            } 
        }

    return (
        <div>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe}) => (
                        <form className="payment-form" onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                        <input className="firstname" name="firstname" placeholder="First Name"/>
                        <input className="lastname" name="lastname" placeholder="Last Name"/>
                        <input className="billing-address" name="billing_address" placeholder="Address Line"/>
                        <input className="city" name="city" placeholder="City"/>
                        <input className="prov-state" name="prov_state" placeholder="Province/State"/>
                        <input className="country" name="country" placeholder="Country"/>
                        <input className="post-zip" name="post_zip" placeholder="Postal Code/Zip Code"/>
                        <input className="number" name="number" placeholder="Telephone Number"/>
                        <input className="email" name="email" placeholder="Email Address"/>
                        <br/> <br/>
                        <div className="card-elem">
                            <CardElement options={{hidePostalCode: true}}/>
                        </div>
                        <br /> <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button className="submit" type="submit" variant="contained" disabled={!stripe}>
                                {token ? "Order Now":"Loading..."}
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