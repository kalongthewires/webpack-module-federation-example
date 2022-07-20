import { faker } from "@faker-js/faker";

export const mount = (el) => {
  el.innerHTML = `<h2>Cart</h2>
  
  <p>You have ${faker.random.numeric()} items in your cart.</p>
  `;
};
