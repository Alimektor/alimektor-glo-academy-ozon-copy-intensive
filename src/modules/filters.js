export const searchFilter = (goods, value) => {
    return goods.filter(goodItem => goodItem.title.toLowerCase().includes(value.toLowerCase()));
}

export const categoryFilter = (goods, value) => {
    return goods.filter(goodItem => goodItem.category === value);
}
