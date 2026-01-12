import { products } from "../data/products";
import { productCard } from "./productCard";
import "../teszt1.css";

const grid = document.querySelector("#productsGrid");
if (!grid) throw new Error("Missing #productsGrid in teszt1.html");

grid.innerHTML = products.map(productCard).join("");
document.addEventListener("click", (e) => {
  const back = (e.target as HTMLElement).closest(".card-back");
  if (!back) return;

  const card = back.closest(".product-card") as HTMLElement | null;
  if (!card) return;

  setTimeout(() => card.blur(), 150);
});