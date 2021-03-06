import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="pproduct__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>

            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book" />

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
