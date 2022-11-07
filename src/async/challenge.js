import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetch_data(url_API){
    const response = await fetch(url_API);
    const data = await response.json();
    return data;
}

const anothe_f = async (url_API) => {
    try{
        const products = await fetch_data(`${url_API}/products`);
        const product = await fetch_data(`${url_API}/products/${products[0].id}`);
        const category = await fetch_data(`${url_API}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anothe_f(API)