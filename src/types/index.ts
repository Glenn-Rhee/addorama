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
}
