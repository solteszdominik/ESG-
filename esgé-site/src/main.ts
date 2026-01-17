import "./style.css";
import { products } from "./data/products";
import { productCard } from "./components/productCard";

function qs<T extends Element>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el as T;
}

function renderProducts() {
  const grid = qs<HTMLDivElement>("#productsGrid");
  grid.innerHTML = products.map(productCard).join("");
}

renderProducts();
