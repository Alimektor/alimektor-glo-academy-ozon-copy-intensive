import renderGoods from "./renderGoods.js";
import getData from "./getData.js";
import {
    priceFilter
} from "./filters.js";

const filter = () => {
    const minPriceInput = document.querySelector('#min.filter-price_input');
    const maxPriceInput = document.querySelector('#max.filter-price_input');

    function priceRender() {
        getData().then(data => {
            const minPrice = minPriceInput.value;
            const maxPrice = maxPriceInput.value;
            const filteredData = priceFilter(data, minPrice, maxPrice);
            renderGoods(filteredData);
        });
    }

    minPriceInput.addEventListener('input', () => {
        priceRender();
    });
    maxPriceInput.addEventListener('input', () => {
        priceRender();
    });
}

export default filter;
