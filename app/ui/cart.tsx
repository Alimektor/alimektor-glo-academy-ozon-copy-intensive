"use client";

import { useState } from "react";
import { useCart } from "../providers/CartProvider";

export default function Cart() {
    const { cartItems, isOpen, setIsOpen, deleteCartItem } = useCart();

    return (
        <>
            <div className='cart' style={{ display: isOpen ? 'flex' : 'none' }}>
                <div className='cart-body'>
                    <div className='cart-title'>Корзина</div>
                    <div className='cart-total'>
                        Общая сумма: <span>0</span> руб
                    </div>
                    <div className='cart-wrapper'>
                        {cartItems.map((item) => (
                            <div className="card" key="{item.id}">
                                {item.sale ? <span className="card-sale">🔥 Hot Sale 🔥</span> : null}
                                <div className="card-img-wrapper">
                                    <span className="card-img-top"
                                        style={{ backgroundImage: `url(${item.img})` }}></span>
                                </div>
                                <div className="card-body justify-content-between">
                                    <div className="card-price">{item.price}₽ * {item.count} = {item.price * item.count}₽</div>
                                    <h5 className="card-title">{item.title}</h5>
                                    <button className="btn btn-primary" onClick={() => deleteCartItem(item)}>Удалить</button>
                                </div>
                            </div>
                        ))}
                        {!cartItems.length ? (<div id="cart-empty">Ваша корзина пуста</div>) : null}
                    </div>
                    <button className='btn btn-primary cart-confirm' onClick={() => setIsOpen(false)}>Оформить заказ</button>
                    <div className='cart-close' onClick={() => setIsOpen(false)}></div>
                </div >
            </div >
        </>
    )
}
