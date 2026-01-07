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

function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const section = document.querySelector(id);
    if (!section) return;

    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

renderProducts();
initSmoothScroll();
