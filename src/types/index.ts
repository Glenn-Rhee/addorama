export interface ResponsePayload {
  status: "success" | "failed";
  statusCode: number;
  message: string;
  data?: unknown;
}

export interface ProductMain {
  id: string;
  urlImage: string;
  productName: string;
  description: string;
  price: number;
  ratingCount: number;
  avgRating: number;
}

export type Category = "LAPTOP" | "ACCESSORIES";

export interface TProductDetail {
  id: string;
  storeId: string;
  productName: string;
  category: Category;
  brand: string;
  description: string;
  urlImage: string;
  price: number;
  stock: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
  ratingCount: number;
  avgRating: number;
  storeName: string;
  urlImageStore: string;
  countReview: number;
  countFavorite: number;
  city: string;
  zipCode: string;
}

export interface TShippingResponsePayload {
  data: DataShipping;
  meta: MetaShipping;
}

interface MetaShipping {
  message: string;
  code: number;
  status: "success" | "failed";
}

interface DataShipping {
  calculate_reguler: Shipping[];
  calculate_cargo: Shipping[];
  calculate_instan: Shipping[];
}

interface Shipping {
  etd: string;
  grandtotal: number;
  is_cod: boolean;
  net_income: number;
  service_fee: number;
  service_name: string;
  shipping_cashback: number;
  shipping_cost: number;
  shipping_cost_net: number;
  shipping_name: string;
  weight: number;
}
