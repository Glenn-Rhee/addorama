import Category from "@/components/HomePage/Category";
import Container from "@/components/Container";
import Cards from "@/components/HomePage/Cards";
import { ResponsePayload } from "@/types";
import Image from "next/image";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function HomePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  try {
    const dataResponse = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL +
        `/user/products${
          searchParams.category !== "all"
            ? `?category=${searchParams.category?.toUpperCase()}`
            : ""
        }`,
      {
        method: "GET",
        headers: {
          from: "e-commerce",
        },
      }
    );

    if (!dataResponse.ok) {
      console.log("gagal");
    }

    const products = (await dataResponse.json()) as ResponsePayload;
    if (products.status === "failed") {
      throw new Error(products.message);
    }

    return (
      <Container className="lg:px-20 md:px-[70px] px-6">
        <Category category={searchParams.category?.toLowerCase()} />
        <Cards dataResponse={products} />
      </Container>
    );
  } catch (error) {
    let errorMsg = "";
    if (error instanceof Error) {
      if (error.message.includes("failed")) {
        errorMsg = "Failed to get data, please try again!";
      } else {
        errorMsg = error.message;
      }
    } else {
      errorMsg = "Internal Server Error";
    }
    return (
      <Container className="lg:px-20 md:px-[70px] px-6">
        <Category category={searchParams.category?.toLowerCase()} />
        <div className="w-full flex items-center mt-8 flex-col justify-center h-[70vh]">
          <Image
            src={"/error-server.png"}
            alt="Error image"
            width={200}
            height={200}
          />
          <h1 className="text-myBlue font-bold text-2xl md:text-3xl lg:text-4xl text-center">{errorMsg}</h1>
        </div>
      </Container>
    );
  }
}
