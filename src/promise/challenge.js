import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetch_data(url_API) {
    return fetch(url_API);
}

// fetch_data(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products)
// })
// .then(()=>{console.log(`hola`)})
// .catch(error => console.log(error));

fetch_data(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products)
    return fetch_data(`${API}/products/${products[0].id}`)

})
.then(response => response.json())
.then(product => {
    console.log(console.logproduct.title)
    return fetch_data(`${API}/categories/${product.category.id}`)

})
.then(response => response.json())
.then(category => {
    return console.log(category.name);
})
.catch(error => console.log(error))
.finally(() => console.log(`end`))