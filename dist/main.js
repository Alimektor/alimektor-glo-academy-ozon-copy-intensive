/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter.js */ \"./src/modules/filter.js\");\n\n\n\n\n\n\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_filter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart.js */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData.js */ \"./src/modules/postData.js\");\n\n\n\nconst cart = () => {\n    const cartBtn = document.getElementById('cart');\n    const cartModal = document.querySelector('.cart');\n    const cartCloseBtn = document.querySelector('.cart-close');\n    const cartTotal = document.querySelector('.cart-total > span');\n    const cartSendBtn = document.querySelector('.cart-confirm');\n    const goodsWrapper = document.querySelector('.goods');\n    const cartWrapper = document.querySelector('.cart-wrapper');\n    const cartCounter = document.querySelector('.counter');\n\n    const updateCounter = () => {\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n        cartCounter.textContent = cart.length;\n    }\n\n    const openCart = () => {\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n        cartModal.style.display = 'flex';\n        (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n        cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);\n    }\n\n    const closeCart = () => {\n        cartModal.style.display = 'none';\n    }\n\n    cartBtn.addEventListener('click', openCart);\n    cartCloseBtn.addEventListener('click', closeCart);\n\n    goodsWrapper.addEventListener('click', (event) => {\n        if (event.target.classList.contains('btn-primary')) {\n            const card = event.target.closest('.card');\n            const key = card.dataset.key;\n            const goods = JSON.parse(localStorage.getItem('goods'));\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n            const goodItem = goods.find(goodItem => goodItem.id === +key);\n            cart.push(goodItem);\n            localStorage.setItem('cart', JSON.stringify(cart));\n            updateCounter();\n        }\n    });\n\n    cartWrapper.addEventListener('click', (event) => {\n        if (event.target.classList.contains('btn-primary')) {\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n            const card = event.target.closest('.card');\n            const key = card.dataset.key;\n            const goodItem = cart.find(goodItem => goodItem.id === +key);\n            cart.splice(cart.indexOf(goodItem), 1);\n            localStorage.setItem('cart', JSON.stringify(cart));\n            (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\n            cartTotal.textContent = cart.reduce((acc, item) => acc + item.price, 0);\n            updateCounter();\n        }\n    });\n\n    cartSendBtn.addEventListener('click', () => {\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];\n        (0,_postData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\n            localStorage.removeItem('cart');\n            (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\n            cartTotal.textContent = 0;\n            updateCounter();\n        });\n    });\n\n    window.addEventListener('DOMContentLoaded', () => {\n        updateCounter();\n    })\n\n    window.addEventListener('storage', (event) => {\n        updateCounter();\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n    const btnCatalog = document.querySelector('.catalog-button');\n    const catalogModal = document.querySelector('.catalog');\n    const catalogModalItems = document.querySelectorAll('.catalog li');\n\n    let isOpen = false;\n\n    btnCatalog.addEventListener('click', () => {\n        if (isOpen) {\n        isOpen = !isOpen;\n            catalogModal.style.display = '';\n            return;\n        }\n        catalogModal.style.display = 'block';\n    });\n\n    catalogModalItems.forEach(item => {\n        item.addEventListener('click', () => {\n            const text = item.textContent;\n            (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text).then(data => {\n                const filteredData = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text);\n                (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filteredData);\n            });\n        });\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\n\n\n\nconst filter = () => {\n    const minPriceInput = document.querySelector('#min.filter-price_input');\n    const maxPriceInput = document.querySelector('#max.filter-price_input');\n    const checkboxInput = document.getElementById('discount-checkbox');\n    const checkboxSpan = document.querySelector('.filter-check_checkmark');\n\n    function renderFiltered() {\n        (0,_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => {\n            const minPrice = minPriceInput.value;\n            const maxPrice = maxPriceInput.value;\n            const filteredByHotSale = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked);\n            const filteredData = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(filteredByHotSale, minPrice, maxPrice);\n            (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredData);\n        });\n    }\n\n    minPriceInput.addEventListener('input', () => {\n        renderFiltered();\n    });\n    maxPriceInput.addEventListener('input', () => {\n        renderFiltered();\n    });\n    checkboxInput.addEventListener('change', () => {\n        if (checkboxInput.checked) {\n            checkboxSpan.classList.add('checked');\n        } else {\n            checkboxSpan.classList.remove('checked');\n        }\n        renderFiltered();\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/filter.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   hotSaleFilter: () => (/* binding */ hotSaleFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n    return goods.filter(goodItem => goodItem.title.toLowerCase().includes(value.toLowerCase()));\n}\n\nconst categoryFilter = (goods, value) => {\n    return goods.filter(goodItem => goodItem.category === value);\n}\n\nconst priceFilter = (goods, minValue, maxValue) => {\n    const minPrice = Number(minValue) || 0;\n    const maxPrice = Number(maxValue) || +Infinity;\n    return goods.filter(goodItem => {\n        const itemPrice = Number(goodItem.price);\n        return itemPrice >= minPrice && itemPrice <= maxPrice;\n    });\n}\n\nconst hotSaleFilter = (goods, value) => {\n    return goods.filter(goodItem => (value) ? goodItem.sale === true : goodItem.sale === false);\n}\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n    return fetch(\"https://test-c7ae2-default-rtdb.europe-west1.firebasedatabase.app/goods.json\")\n        .then(response => response.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n    const cartBtn = document.getElementById('cart');\n\n    (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n        (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        body: JSON.stringify(cart),\n        headers: {\n            'Content-Type': 'application/json, charset=utf-8'\n        }\n    }).then(response => response.json());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\n    const goodsWrapper = document.querySelector('.cart-wrapper');\n\n    goodsWrapper.innerHTML = '';\n\n    if (goods.length === 0) {\n        goodsWrapper.insertAdjacentHTML('beforeend', `\n                <div id=\"cart-empty\">\n                    Ваша корзина пока пуста\n                </div>\n        `);\n    }\n\n    goods.forEach(goodsItem => {\n        goodsWrapper.insertAdjacentHTML('beforeend', `\n                                <div class=\"card\" data-key=\"${goodsItem.id}\">\n                                    ${goodsItem.sale ? '<span class=\"card-sale\">SALE</span>' : ''}\n                                    <div class=\"card-img-wrapper\">\n                                        <span class=\"card-img-top\"\n                                            style=\"background-image: url('${goodsItem.img}')\"></span>\n                                    </div>\n                                    <div class=\"card-body justify-content-between\">\n                                        <div class=\"card-price\">${goodsItem.price} ₽</div>\n                                        <h5 class=\"card-title\">${goodsItem.title}</h5>\n                                        <button class=\"btn btn-primary\">Удалить</button>\n                                    </div>\n                                </div>\n        `);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/renderCart.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\n    const goodsWrapper = document.querySelector('.goods');\n\n    localStorage.setItem('goods', JSON.stringify(goods));\n\n    goodsWrapper.innerHTML = '';\n\n    goods.forEach(goodsItem => {\n        goodsWrapper.insertAdjacentHTML('beforeend', `\n                            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n                                <div class=\"card\" data-key=\"${goodsItem.id}\">\n                                    ${goodsItem.sale ? '<span class=\"card-sale\">SALE</span>' : ''}\n                                    <div class=\"card-img-wrapper\">\n                                        <span class=\"card-img-top\"\n                                            style=\"background-image: url('${goodsItem.img}')\"></span>\n                                    </div>\n                                    <div class=\"card-body justify-content-between\">\n                                        <div class=\"card-price\">${goodsItem.price} ₽</div>\n                                        <h5 class=\"card-title\">${goodsItem.title}</h5>\n                                        <button class=\"btn btn-primary\">В корзину</button>\n                                    </div>\n                                </div>\n                            </div>\n        `);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n    const searchInput = document.querySelector('.search-wrapper_input');\n\n    searchInput.addEventListener('input', (event) => {\n        const searchValue = searchInput.value;\n\n        (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchValue).then(data => {\n            const filteredData = (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, searchValue);\n            (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filteredData);\n        });\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n\n//# sourceURL=webpack://alimektor-glo-academy-ozon-copy-intensive/./src/modules/search.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;