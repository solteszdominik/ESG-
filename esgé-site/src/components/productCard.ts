import type { Product } from "../types";

export function productCard(p: Product): string {
  return `
  <article class="product-card" data-id="${p.id}">
      <img class="product-card__img" src="${p.imageUrl}" alt="${p.name}" loading="lazy" />
      <div class="product-card__body">
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__desc">${p.shortDesc}</p>
        <ul class="product-card__meta">
          <li>${p.weightG} g</li>
          <li>${p.cookTimeMin} perc</li>
          <li class="badge">${p.category}</li>
        </ul>
      </div>
    </article>`;
}
