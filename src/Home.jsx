import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={require("./assets/img/fondo__amazon.png")} alt="imagenFondo" />

                <div className="home__row">
                    <Product />
                    {/* Producto */}
                </div>

                <div className="home__row">
                    {/* Producto */}
                    {/* Producto */}
                    {/* Producto */}
                </div>

                <div className="home__row">
                    {/* Producto */}
                </div>

            </div>
        </div>
    )
}

export default Home
