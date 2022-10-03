export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  createdAT?: string;
}

export interface Products {
  products: Product[];
}
