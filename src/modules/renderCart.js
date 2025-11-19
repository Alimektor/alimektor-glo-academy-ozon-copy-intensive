const renderCart = (goods) => {
    const goodsWrapper = document.querySelector('.cart-wrapper');

    goodsWrapper.innerHTML = '';

    if (goods.length === 0) {
        goodsWrapper.insertAdjacentHTML('beforeend', `
                <div id="cart-empty">
                    Ваша корзина пока пуста
                </div>
        `);
    }

    goods.forEach(goodsItem => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
                                <div class="card" data-key="${goodsItem.id}">
                                    ${goodsItem.sale ? '<span class="card-sale">SALE</span>' : ''}
                                    <div class="card-img-wrapper">
                                        <span class="card-img-top"
                                            style="background-image: url('${goodsItem.img}')"></span>
                                    </div>
                                    <div class="card-body justify-content-between">
                                        <div class="card-price">${goodsItem.price} ₽</div>
                                        <h5 class="card-title">${goodsItem.title}</h5>
                                        <button class="btn btn-primary">Удалить</button>
                                    </div>
                                </div>
        `);
    });
}

export default renderCart;
