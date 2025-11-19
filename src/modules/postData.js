const postData = (cart) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json, charset=utf-8'
        }
    }).then(response => response.json());
}

export default postData;
