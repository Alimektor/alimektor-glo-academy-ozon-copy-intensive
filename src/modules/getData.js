const getData = () => {
    return fetch("https://test-c7ae2-default-rtdb.europe-west1.firebasedatabase.app/goods.json")
        .then(response => response.json())
}

export default getData;
