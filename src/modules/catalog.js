import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter, priceFilter } from "./filters.js";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');
    const minPriceInput = document.querySelector('#min.filter-price_input');
    const maxPriceInput = document.querySelector('#max.filter-price_input');

    let isOpen = false;

    async function renderPrice() {
        getData().then(data => {
            const minPrice = minPriceInput.value;
            const maxPrice = maxPriceInput.value;
            const filteredData = priceFilter(data, minPrice, maxPrice);
            renderGoods(filteredData);
        });
    }

    btnCatalog.addEventListener('click', () => {
        if (isOpen) {
        isOpen = !isOpen;
            catalogModal.style.display = '';
            return;
        }
        catalogModal.style.display = 'block';
    });

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            getData(text).then(data => {
                const filteredData = categoryFilter(data, text);
                renderGoods(filteredData);
            });
        });
    });

    minPriceInput.addEventListener('input', () => {
        renderPrice();
    });
    maxPriceInput.addEventListener('input', () => {
        renderPrice();
    });
}

export default catalog;
