import renderCart from "./renderCart.js";
import postData from "./postData.js";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = document.querySelector('.cart-close');
    const cartTotal = document.querySelector('.cart-total > span');
    const cartSendBtn = document.querySelector('.cart-confirm');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartCounter = document.querySelector('.counter');

    const updateCounter = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartCounter.textContent = cart.length;
    }

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';
        renderCart(cart);
        cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);
    }

    const closeCart = () => {
        cartModal.style.display = 'none';
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(goodItem => goodItem.id === +key);
            cart.push(goodItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCounter();
        }
    });

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = event.target.closest('.card');
            const key = card.dataset.key;
            const goodItem = cart.find(goodItem => goodItem.id === +key);
            cart.splice(cart.indexOf(goodItem), 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);
            updateCounter();
        }
    });

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0;
            updateCounter();
        });
    });

    window.addEventListener('DOMContentLoaded', () => {
        updateCounter();
    })

    window.addEventListener('storage', (event) => {
        updateCounter();
    })
}

export default cart;
