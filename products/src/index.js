import { faker } from "@faker-js/faker";

const NUM_PRODUCTS = 5;

const productNames = Array.from({ length: NUM_PRODUCTS }, () =>
  faker.commerce.productName()
);
const products = productNames.map((name) => `<div>${name}</div>`);

document.getElementById("app-products").innerHTML = `<h2>Products</h2>

${products.join("")}
`;
