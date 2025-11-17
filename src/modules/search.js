import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { searchFilter } from "./filters.js";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');

    searchInput.addEventListener('input', (event) => {
        const searchValue = searchInput.value;

        getData(searchValue).then(data => {
            const filteredData = searchFilter(data, searchValue);
            renderGoods(filteredData);
        });
    });
}

export default search;
