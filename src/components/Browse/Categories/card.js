import { useEffect, useState } from 'react';
import "./card.css"

function Card({ prods }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(prods)
    }, [prods])

    return (
        <section class="neon bd-container">
            <div class="neon__container">
                {items.map((prod, index) => (
                    <div class="neon__card">
                        <img style={{width: '200px', height: '100px'}} src={prod.image.url} alt='Keyboard'/>
                        <h1 class="neon__title">{prod.name}</h1>
                        <p class="neon__description" dangerouslySetInnerHTML={{__html: prod.description}}></p>
                        <a style={{textDecoration: 'none'}} href="/browse/keyboards" class="neon__button">
                            Add to cart
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Card;