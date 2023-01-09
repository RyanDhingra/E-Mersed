import React from 'react';
import "./card.css"

function Card() {
    return (
        <section class="neon bd-container">
            <div class="neon__container">
                <div class="neon__card">
                <img style={{width: '400px', height: '200px'}} src='https://www.freepnglogos.com/uploads/keyboard-png/logitech-orion-brown-mechanical-keyboard-cherry-brown-0.png' alt='keyboard'/>
                <h1 class="neon__title">Logitech Z200</h1>
                <p class="neon__description">Pass tickets, for full access to premium movies and series for one year.</p>
                <a style={{textDecoration: 'none'}} href="#" class="neon__button">
                    Buy Now 
                </a>
                </div>
                <div class="neon__card">
                <img style={{width: '400px', height: '200px'}} src='https://www.pngall.com/wp-content/uploads/2016/04/Keyboard-Download-PNG.png' alt='keyboard'/>
                <h1 class="neon__title">Logitech X100</h1>
                <p class="neon__description">Pass tickets, for full access to premium movies and series for one year.</p>
                <a style={{textDecoration: 'none'}} href="#" class="neon__button">
                    Buy Now 
                </a>
                </div>
                <div class="neon__card">
                <img style={{width: '400px', height: '200px'}} src='https://www.freepnglogos.com/uploads/keyboard-png/origin-edition-razer-red-blackwidow-ultimate-keyboard-38.png' alt='keyboard'/>
                <h1 class="neon__title">RGB Keyboard</h1>
                <p class="neon__description">Pass tickets, for full access to premium movies and series for one year.</p>
                <a style={{textDecoration: 'none'}} href="#" class="neon__button">
                    Buy Now 
                </a>
                </div>
            </div>
        </section>
    );
}

export default Card;