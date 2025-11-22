import { Product } from "./models/product.models";
import { Query } from "./models/query.model";

export const getData = async (query : Query) => {
    const response = await fetch('https://test-c7ae2-default-rtdb.europe-west1.firebasedatabase.app/goods.json');
    const data = await response.json();
    return data.filter((product : Product) => {
        if (query.category) {
            if (query.category !== product.category) {
                return false;
            }
        }
        if (query.search) {
            if (!product.title.toLowerCase().includes(query.search.toLowerCase())) {
                return false;
            }
        }
        return true;
    });
}
