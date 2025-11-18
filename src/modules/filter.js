import renderGoods from "./renderGoods.js";
import getData from "./getData.js";
import {
    priceFilter,
    hotSaleFilter
} from "./filters.js";

const filter = () => {
    const minPriceInput = document.querySelector('#min.filter-price_input');
    const maxPriceInput = document.querySelector('#max.filter-price_input');
    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    function renderFiltered() {
        getData().then(data => {
            const minPrice = minPriceInput.value;
            const maxPrice = maxPriceInput.value;
            const filteredByHotSale = hotSaleFilter(data, checkboxInput.checked);
            const filteredData = priceFilter(filteredByHotSale, minPrice, maxPrice);
            renderGoods(filteredData);
        });
    }

    minPriceInput.addEventListener('input', () => {
        renderFiltered();
    });
    maxPriceInput.addEventListener('input', () => {
        renderFiltered();
    });
    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        renderFiltered();
    })
}

export default filter;
