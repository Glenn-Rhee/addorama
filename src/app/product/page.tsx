import Container from "@/components/Container";
import BreadCrumbNav from "@/components/ProductPage/BreadCrumbNav";
import Product from "@/components/ProductPage/Product";
import { ResponsePayload, TProductDetail } from "@/types";
import Image from "next/image";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

interface ParamsProduct {
  id?: string;
}

export default async function ProductPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = (await props.searchParams) as ParamsProduct;
  const productId = searchParams.id;

  try {
    const dataResponse = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/user/products?productId=${productId}`,
      { method: "GET", headers: { from: "e-commerce" } }
    );
    // const APIkey = process.env.NEXT_PUBLIC_SHIPPING_DELIVERY;
    // const response = await fetch("https://api-sandbox.collaborator.komerce.id/tariff/api/v1/destination/search", {
    //   method: "GET",
    //   redirect: "follow",
    //   headers: {
    //     "x-api-key": APIkey as string,
    //   },
    // });

    // const dataResponseShipping = await response.json();

    // console.log("Shipping Data", dataResponseShipping);

    const product = (await dataResponse.json()) as ResponsePayload;
    if (product.status === "failed") {
      throw new Error(product.message);
    }

    return (
      <Container className="lg:px-20 md:px-[70px] px-6">
        <BreadCrumbNav />
        <Product data={product.data as TProductDetail} />
      </Container>
    );
  } catch (error) {
    let errorMsg = "";
    if (error instanceof Error) {
      errorMsg = error.message.includes("failed")
        ? "Failed to get data, please try again!"
        : error.message;
    } else {
      errorMsg = "Internal Server Error";
    }

    return (
      <Container className="lg:px-20 md:px-[70px] px-6">
        <div className="w-full flex items-center mt-8 flex-col justify-center h-[70vh]">
          <Image
            src={"/no-results.png"}
            alt="No results Image"
            width={200}
            height={200}
          />
          <h1 className="text-myBlue mt-1  font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            {errorMsg}
          </h1>
        </div>
      </Container>
    );
  }
}
