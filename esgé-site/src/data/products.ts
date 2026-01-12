import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "c8",
    name: "Cérnametélt",
    category: "8 tojásos",
    weightG: 250,
    cookTimeMin: 2,
    imageUrl: "/images/Fbg.png",
    shortDesc: "Klasszikus levesbetét, házias tálaláshoz",
  },
  {
    id: "sz8",
    name: "Szélesmetélt",
    category: "8 tojásos",
    weightG: 250,
    cookTimeMin: 2,
    imageUrl: "/images/hBP09862-gallery.jpg",
    shortDesc: "Legjobb válsztás a mákos tésztához",
  },
  {
    id: "cs8",
    name: "Csigatészta",
    category: "8 tojásos",
    weightG: 200,
    cookTimeMin: 4,
    imageUrl: "/images/csiga.jpg",
    shortDesc: "Ha nem jó a cérna, van csiga",
  },
];
