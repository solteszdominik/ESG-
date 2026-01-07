export type ProductCategory = "4 tojásos" | "8 tojásos";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  weightG: number;
  cookTimeMin: number;
  imageUrl: string;
  shortDesc: string;
}
