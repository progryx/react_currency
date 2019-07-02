import * as axios from "axios/index";


let instance = axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        "Access-Control-Allow-Origin":"*"
    }
});


export const productsAPI = {
    getProductsData() {
        return instance.get(`/products`);
    },
    addToCartData(id,count) {
        return instance.post('/products/add',{id: id, count:count});
    },
    getCurrentCart() {
        return instance.get(`/products/cart`);
    }
};
