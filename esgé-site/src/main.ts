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

const nav = document.querySelector(".nav") as HTMLElement | null;
const toggle = document.querySelector(
  ".nav__toggle"
) as HTMLButtonElement | null;
const links = document.querySelector(".nav__links") as HTMLElement | null;

if (nav && toggle && links) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  // kattintás menün kívül → zár
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    const target = e.target as HTMLElement;
    if (target.closest(".nav")) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
}
