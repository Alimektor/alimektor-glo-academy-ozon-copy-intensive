const postData = () => {
    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            "title": "Ведьмак",
            "price": 3000,
            "sale": false,
            "img": "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
            "category": "Игры и софт"
        }),
        headers: {
            'Content-Type': 'application/json, charset=utf-8'
        }
    }).then(response => response.json());
}

export default postData;
