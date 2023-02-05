import { useEffect, useState } from 'react';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import "./checkout.css"

function Checkout({ token, checkout, cart, changeRegion }) {

    const [stripePromise, setStripePromise] = useState(() => loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
    const [region, setRegion] = useState(null);
    const [country, setCountry] = useState(null);
    const [billingRegion, setBillingRegion] = useState(null);
    const [billingCountry, setBillingCountry] = useState(null);
    const [status, setStatus] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggleInfo = () => {
        setToggle(!toggle)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value)
        console.log(event.target.value)
        if (toggle) {
            setBillingRegion(event.target.value)
            changeRegion(event.target.value)
        }
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
        console.log(event.target.value)
        if (toggle) {
            setBillingCountry(event.target.value)
        }
    }

    const handleBillingRegionChange = (event) => {
        setBillingRegion(event.target.value)
        changeRegion(event.target.value)
        console.log(event.target.value)
    }

    const handleBillingCountryChange = (event) => {
        setBillingCountry(event.target.value)
        console.log(event.target.value)
    }

    useEffect(() => {
        if (region && country && !(region === "Select Province/State") && !(country === "Select Country")) {
            setStatus(true);
        } else {
            setStatus(false);
        }
    }, [region, country])

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
        console.log('submited')

        if (!status) {
            alert("MISSING INFORMATION")
            return;
        }

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } =  await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        if (error) {
            console.log(error);
        } else {
            const orderData = {
                    line_items: token.line_items,
                    customer: { firstname: event.target.firstname.value, lastname: event.target.lastname.value, email: event.target.email.value },
                    shipping: { 
                        name: 'NA', 
                        street: event.target.shipping_address.value, 
                        town_city: event.target.city.value, 
                        county_state: region, 
                        postal_zip_code: event.target.post_zip.value, 
                        country: country
                        },
                    fulfillment: { shipping_method: token.shipping_methods[0].id},
                    billing: {
                    name: !toggle ? (event.target.billing_firstname.value + " " + event.target.billing_lastname.value):(event.target.firstname.value + " " + event.target.lastname.value),
                    street: !toggle ? event.target.billing_address.value:event.target.shipping_address.value,
                    town_city: !toggle ? event.target.billing_city.value: event.target.city.value,
                    county_state: !toggle ? billingRegion:region,
                    country: !toggle ? billingCountry: country,
                    postal_zip_code: !toggle ? event.target.billing_post_zip.value:event.target.post_zip.value
                        },
                    payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                        }
                    },
                };

                checkout(token.id, orderData);
                event.target.reset();
                cardElement.clear();
            } 
        }

    return (
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe}) => (
                        <>
                            <form id="payment-form" onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                                <h1 style={{width: '100%', textAlign: 'center', fontSize: '40px'}}>
                                    Shipping Information
                                </h1>
                                <div id='name-cont'>
                                    <input className='text-input' id="firstname" name="firstname" placeholder="First Name" required={true}/>
                                    <input className='text-input' id="lastname" name="lastname" placeholder="Last Name" required={true}/>
                                </div>
                                <div className='input-cont'>
                                    <input className='text-input' id="shipping-address" name="shipping_address" placeholder="Address Line" required={true}/>
                                </div>
                                <div className='input-cont'>
                                    <input className='text-input' id="city" name="city" placeholder="City" required={true}/>
                                </div>
                                <div className='input-cont'>
                                    <select className="country-select" name="country" onChange={e => handleCountryChange(e)} required={true}>
                                        <option value={null}>Select Country</option>
                                        <option value='CA'>Canada</option>
                                    </select>
                                </div>
                                <div className='input-cont'>
                                    <select className="prov-state" name="prov_state" onChange={e => handleRegionChange(e)} required={true}>
                                        <option value={null}>Select Province/State</option>
                                        <option value='AB'>Alberta</option>
                                        <option value='BC'>British Columbia</option>
                                        <option value='MB'>Manitoba</option>
                                        <option value='NB'>New Brunswick</option>
                                        <option value='NL'>Newfoundland and Labrador</option>
                                        <option value='NS'>Nova Scotia</option>
                                        <option value='NT'>Northwest Territories</option>
                                        <option value='NU'>Nunavut</option>
                                        <option value='ON'>Ontario</option>
                                        <option value='PE'>Prince Edward Island</option>
                                        <option value='QC'>Quebec</option>
                                        <option value='SK'>Saskatchewan</option>
                                        <option value='YT'>Yukon</option>
                                    </select>
                                </div>
                                <div id='postal-cont'>
                                    <input className='text-input' id="post-zip" name="post_zip" placeholder="Postal/Zip" required={true}/>
                                </div>
                                <h1 style={{width: '100%', textAlign: 'center', fontSize: '40px'}}>
                                    Billing Information
                                </h1>
                                <div style={{display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                                    <div style={{display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'space-between', width: '85%', border: '2px solid #62CAEE', padding: '5px', borderRadius: '50px'}}>
                                        <h1 style={{margin: '0px 0px 0px 5px', fontSize: '25px', fontWeight: 'normal'}}>Use Shipping Information</h1>
                                        <label style={{pointerEvents: "none"}} className="switch">
                                            <input type="checkbox"/>
                                            <span style={{pointerEvents: 'auto'}} onClick={handleToggleInfo} className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div style={toggle ? {overflow: 'hidden', maxHeight: '0%', transition: 'max-height 0.5s'}:{overflow: 'hidden', transition: 'max-height 0.5s', maxHeight: '100%'}}>
                                    <div id='name-cont'>
                                        <input className='text-input' id="firstname" name="cardholder_firstname" placeholder="First Name" required={!toggle}/>
                                        <input className='text-input' id="lastname" name="cardholder_lastname" placeholder="Last Name" required={!toggle}/>
                                    </div>
                                    <div className='input-cont'>
                                        <input className='text-input' id="billing-address" name="billing_address" placeholder="Address Line" required={!toggle}/>
                                    </div>
                                    <div className='input-cont'>
                                        <input className='text-input' id="city" name="billing_city" placeholder="City" required={!toggle}/>
                                    </div>
                                    <div className='input-cont'>
                                        <select className="country-select" name="billing_country" onChange={e => handleBillingCountryChange(e)} required={!toggle}>
                                            <option value={null}>Select Country</option>
                                            <option value='CA'>Canada</option>
                                        </select>
                                    </div>
                                    <div className='input-cont'>
                                        <select className="prov-state" name="billing_prov_state" onChange={e => handleBillingRegionChange(e)} required={!toggle}>
                                            <option value={null}>Select Province/State</option>
                                            <option value='AB'>Alberta</option>
                                            <option value='BC'>British Columbia</option>
                                            <option value='MB'>Manitoba</option>
                                            <option value='NB'>New Brunswick</option>
                                            <option value='NL'>Newfoundland and Labrador</option>
                                            <option value='NS'>Nova Scotia</option>
                                            <option value='NT'>Northwest Territories</option>
                                            <option value='NU'>Nunavut</option>
                                            <option value='ON'>Ontario</option>
                                            <option value='PE'>Prince Edward Island</option>
                                            <option value='QC'>Quebec</option>
                                            <option value='SK'>Saskatchewan</option>
                                            <option value='YT'>Yukon</option>
                                        </select>
                                    </div>
                                    <div id='postal-phone-cont'>
                                        <input className='text-input' id="post-zip" name="billing_post_zip" placeholder="Postal/Zip" required={!toggle}/>
                                    </div>
                                </div>
                                <h1 style={{width: '100%', textAlign: 'center', fontSize: '40px'}}>
                                    Contact Information
                                </h1>
                                <div className='input-cont'>
                                    <input className='text-input' type='email' id="email" name="email" placeholder="Email Address" required={true}/>
                                </div>
                                <div className='input-cont'>
                                    <input className='text-input' id="number" name="number" placeholder="Phone Number" required={true}/>
                                </div>
                                <h1 style={{width: '100%', textAlign: 'center', fontSize: '40px'}}>
                                    Payment Information
                                </h1>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div className="card-elem">
                                        <CardElement 
                                            options={{
                                                    hidePostalCode: true, 
                                                    style: {
                                                            base: {
                                                                color: '#62CAEE',
                                                                fontSize: '25px',
                                                                fontFamily: 'Tempest Apache',
                                                                '::placeholder': {
                                                                    color: '#62CAEE',
                                                                    fontFamily: 'Tempest Apache'
                                                                }
                                                            },
                                                            invalid: {
                                                                color: '#62CAEE',
                                                                fontFamily: 'Tempest Apache',
                                                            }
                                                        }
                                                    }
                                                }
                                            />
                                    </div>
                                </div>
                            </form>
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', height: '15%'}}>
                                <button form='payment-form' className="submit" type="submit" variant="contained" disabled={!stripe || !token}>
                                    {token ? "Order Now":"Loading..."}
                                </button>
                            </div>
                        </>
                    )}
                </ElementsConsumer>
            </Elements>
        );
}

export default Checkout;