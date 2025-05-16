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
}
