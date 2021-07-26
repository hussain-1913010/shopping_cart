import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';

import { CartContext } from "./Cart";

const ContextCart = () => {


    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="images/arrow.png" alt="arrow-icon" className="arrow-icon" />
                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="images/cart.png" alt="cart icon" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping cart</h1>
                <p className="total-items">You have <span className="total-items-count">{totalItem}</span> in the cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                item.map((curr) => {
                                    return <Items key={curr.id} {...curr} />
                                })
                            }
                        </Scrollbars>
                    </div>
                </div>
                <div className="cart-total">
                    <h3>Cart total amount: <span>{totalAmount} </span> TK</h3>
                    <button>Checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
            <br/><br/>
        </>
    );
};

export default ContextCart;