// Import the CSS for styling
import './style.css';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

// Initialize an empty product object
let product: Product = {
  id: 0,
  title: '',
  price: '',
  category: '',
  description: '',
  image: ''
};

// Define the API endpoint
const apiUrl = 'https://fakestoreapi.com/products/1';

// Use the fetch API to make the GET request
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then((data: Product) => {
    // Handle the data received from the API
    product = data;
    console.log(product);
    displayProduct(product);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display product data in the HTML
function displayProduct(product: Product) {
  const productContainer = document.getElementById('product');
  if (productContainer) {
    productContainer.innerHTML = `
      <h1>${product.title}</h1>
      <img src="${product.image}" width="200px" alt="Product Image">
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>${product.description}</p>
    `;
  }
}
