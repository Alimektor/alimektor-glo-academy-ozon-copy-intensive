const renderGoods = (goods) => {
    const goodsWrapper = document.querySelector('.goods');

    goodsWrapper.innerHTML = '';

    goods.forEach(goodItem => {
        goodsWrapper.insertAdjacentHTML('beforeend', `
                            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div class="card">
                                    ${goodItem.sale ? '<span class="card-sale">SALE</span>' : ''}
                                    <div class="card-img-wrapper">
                                        <span class="card-img-top"
                                            style="background-image: url('${goodItem.img}')"></span>
                                    </div>
                                    <div class="card-body justify-content-between">
                                        <div class="card-price">${goodItem.price} ₽</div>
                                        <h5 class="card-title">${goodItem.title}</h5>
                                        <button class="btn btn-primary">В корзину</button>
                                    </div>
                                </div>
                            </div>
        `);
    });
}

export default renderGoods;
