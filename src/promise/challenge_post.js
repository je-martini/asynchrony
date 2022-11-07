import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function post_data(url_API, data) {
    const response = fetch(url_API, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
return response;
}

const data = {
    "title": "Jesus Product",
    "price": 416,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }
    

post_data(`${API}/products`, data)
.then(response => response.json())
.then(data =>  console.log(data))
