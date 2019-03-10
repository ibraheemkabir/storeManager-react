import { log } from 'util';
import { sale, sellCart } from './axiosCalls/sale';

const checkout = async () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const data = { productsId: `${cart[0].id}`, Total: `${cart[0].price}`, quantity: `${cart[0].quantity}` };
  console.log(data);
  const sal = fetch('https://store-maneger.herokuapp.com/api/v1/sales/', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('authentication')
    }
  })
    .then(res => res.json())
    .then(response => response);

  const saleid = await sal;
  const sales = [];

  for (let i = 1; i < cart.length; i += 1) {
    sales.push({ productsId: `${cart[i].id}`, Total: `${cart[i].price}`, quantity: `${cart[i].quantity}` });
  }
  const hello = sales.forEach((element) => {
    fetch(`https://store-maneger.herokuapp.com/api/v1/sales/cart/${saleid}`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(element),
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('authentication')

      }
    })
      .then(res => res.json())
      .then(response => response);
  });
  return sal;
};
export default checkout;
