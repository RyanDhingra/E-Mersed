import { useEffect, useState } from 'react';
import "./card.css"

function Card({ prods, addToCart }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(prods)
    }, [prods])

    const addItem = (prod) => {
        addToCart(prod);
        alert("Item added")
    }

    return (
        <section className="neon bd-container">
            <div className="neon__container">
                {items.map((prod, index) => (
                    <>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    <div key={index} className="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 className="neon__title">{prod.name}</h1>
                        <p className="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <h3 style={{textDecoration: 'none'}} onClick={() => addItem(prod)} className="neon__button">
                            Add to cart
                        </h3>
                    </div>
                    </>
                ))}
            </div>
        </section>
    );
}

export default Card;