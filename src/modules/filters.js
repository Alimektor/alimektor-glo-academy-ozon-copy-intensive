export const searchFilter = (goods, value) => {
    return goods.filter(goodItem => goodItem.title.toLowerCase().includes(value.toLowerCase()));
}

export const categoryFilter = (goods, value) => {
    return goods.filter(goodItem => goodItem.category === value);
}

export const priceFilter = (goods, minValue, maxValue) => {
    const minPrice = Number(minValue) || 0;
    const maxPrice = Number(maxValue) || 0;
    return goods.filter(goodItem => {
        const itemPrice = Number(goodItem.price);
        return itemPrice >= minPrice && itemPrice <= maxPrice;
    });
}
