// index.js
import fetch from 'node-fetch';

const args = process.argv.slice(2);
const [method, endpoint, ...rest] = args;

const BASE_URL = 'https://fakestoreapi.com';

if (!method || !endpoint) {
  console.error('Uso incorrecto. Ejemplos:\nGET products\nGET products/15\nPOST products T-Shirt 300 ropa\nDELETE products/7');
  process.exit(1);
}

async function fetchData() {
  try {
    const url = `${BASE_URL}/${endpoint}`;

    if (method === 'GET') {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

    } else if (method === 'POST') {
      if (endpoint !== 'products') {
        console.error('POST solo está permitido en el endpoint "products".');
        return;
      }

      const [title, price, category] = rest;
      if (!title || !price || !category) {
        console.error('Debes proporcionar <title> <price> <category> para crear un producto.');
        return;
      }

      const newProduct = {
        title,
        price: parseFloat(price),
        description: "Producto de prueba desde Node.js",
        image: "https://i.pravatar.cc",
        category
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      const data = await res.json();
      console.log('Producto creado:', data);

    } else if (method === 'DELETE') {
      const res = await fetch(url, { method: 'DELETE' });
      const data = await res.json();
      console.log('Producto eliminado:', data);

    } else {
      console.error(`Método ${method} no soportado.`);
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchData();
