import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter } from "./filters.js";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;

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
}

export default catalog;
