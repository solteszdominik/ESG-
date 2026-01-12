import type { Product } from "../types";

const availableAtDemo = ["SPAR", "Helyi kisboltok", "Viszonteladók"];

export function productCard(p: Product): string {
  return `
  <article class="product-card" data-id="${p.id}" tabindex="0" aria-label="${
    p.name
  } termékkártya">
    <span class="product-badge">${p.category}</span>

    <div class="card-inner">
      <!-- FRONT -->
      <div class="card-face card-front">
        <img class="product-card__img" src="${p.imageUrl}" alt="${
    p.name
  }" loading="lazy" />
        <div class="product-card__body">
          <h3 class="product-card__title">${p.name}</h3>
          <p class="product-card__desc">${p.shortDesc}</p>

          <ul class="product-card__meta">
            <li>${p.weightG} g</li>
            <li>${p.cookTimeMin} perc</li>
          </ul>

          <small class="hint">Vidd fölé a kurzort: Hol kapható?</small>
        </div>
      </div>

      <!-- BACK -->
      <div class="card-face card-back">
        <div class="card-back__body">
          <h4 class="card-back__title">Hol kapható?</h4>

          <ul class="availability">
            ${availableAtDemo.map((x) => `<li>${x}</li>`).join("")}
          </ul>

          <div class="card-back__cta">
            <a class="btn-mini btn-mini--accent" href="#contact">Kapcsolat</a>
          </div>
        </div>
      </div>
    </div>
  </article>`;
}
