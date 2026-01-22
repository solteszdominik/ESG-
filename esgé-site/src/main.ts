import "./style.css";
import { products } from "./data/products";
import { productCard } from "./components/productCard";

function qs<T extends Element>(selector: string): T {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el as T;
}

function qsa<T extends Element>(selector: string): T[] {
  return Array.from(document.querySelectorAll(selector)) as T[];
}

function renderProducts() {
  const grid = qs<HTMLDivElement>("#productsGrid");
  grid.innerHTML = products.map(productCard).join("");
}

function getPerView() {
  const w = window.innerWidth;
  if (w < 560) return 1;
  if (w < 980) return 2;
  if (w < 1180) return 3;
  return 4;
}

function initProductsCarousel() {
  const track = qs<HTMLDivElement>("#productsGrid");
  const viewport = qs<HTMLDivElement>(".pc-viewport");
  const btnPrev = qs<HTMLButtonElement>(".pc-prev");
  const btnNext = qs<HTMLButtonElement>(".pc-next");
  const dotsWrap = qs<HTMLDivElement>("#productsDots");

  const GAP = 16;

  let perView = getPerView();
  let index = 0; // <-- MOST: SLIDE index (nem oldal)
  let maxIndex = 0;
  let slideW = 320;

  function buildDots() {
    // DOTS: slideokra
    dotsWrap.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      const b = document.createElement("button");
      b.className = "pc-dot";
      b.type = "button";
      b.setAttribute("aria-label", `${i + 1}. termék`);
      b.setAttribute("aria-current", String(i === index));
      b.addEventListener("click", () => {
        index = Math.min(i, maxIndex);
        apply();
      });
      dotsWrap.appendChild(b);
    }
  }

  function apply() {
    const step = slideW + GAP;
    const x = index * step;
    track.style.transform = `translateX(${-x}px)`;

    btnPrev.disabled = index <= 0;
    btnNext.disabled = index >= maxIndex;

    qsa<HTMLButtonElement>(".pc-dot").forEach((d, i) => {
      d.setAttribute("aria-current", String(i === index));
      // a nem elérhető dotokat halványítom, ha sok a dot
      d.disabled = i > maxIndex;
      d.style.opacity = i > maxIndex ? "0.25" : "";
      d.style.cursor = i > maxIndex ? "not-allowed" : "";
    });
  }

  function measure() {
    perView = getPerView();

    const vw = viewport.clientWidth;
    slideW = Math.floor((vw - (perView - 1) * GAP) / perView);
    track.style.setProperty("--slide-w", `${slideW}px`);

    // max index: utolsó olyan slide, hogy még legyen perView darab
    maxIndex = Math.max(0, products.length - perView);
    index = Math.min(index, maxIndex);

    buildDots();
    apply();
  }

  function prev() {
    index = Math.max(0, index - 1);
    apply();
  }
  function next() {
    index = Math.min(maxIndex, index + 1);
    apply();
  }

  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);
  window.addEventListener("resize", measure);

  measure();
}

renderProducts();
initProductsCarousel();
