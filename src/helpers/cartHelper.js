import { toast } from 'react-toastify';

const sid = [];
let quantity = 1;
const carts = [];
const cart = (id, price, category, name) => {
  if (localStorage.getItem('cart')) {
    for (let i = 0; i < carts.length; i += 1) {
      sid.push(carts[i].id);
    }
    const n = sid.includes(id);
    if (n === true) {
      const pos = carts.findIndex(x => x.id === id);
      quantity = carts[pos].quantity;
      quantity += 1;
      carts.splice(pos, 1, { id, name, price, quantity, category });
      localStorage.setItem('cart', JSON.stringify(carts));
      toast(`you now have ${quantity}  ${name} in the cart`);
    } else {
      carts.push({ id, name, price, quantity: 1, category });
      localStorage.setItem('cart', JSON.stringify(carts));
      toast(`product ${name} successfully added to cart`);
    }
  } else {
    carts.push({ id, name, price, quantity: 1, category });
    localStorage.setItem('cart', JSON.stringify(carts));
    toast(`product ${name} successfully added to cart`);
  }
};

export default cart;
