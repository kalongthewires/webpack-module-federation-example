import { mount as mountProducts } from "products/Products";
import { mount as mountCart } from "cart/Cart";

mountProducts(document.getElementById("host-products"));
mountCart(document.getElementById("host-cart"));
