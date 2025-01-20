import Image from "next/image";
import ProductDetail from "./ProductDetail";
import RatingCard from "./RatingCard";

export default function Product() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 min-w-full gap-x-2">
        <Image
          src={
            "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
          }
          alt="Product Image"
          width={500}
          height={500}
          className="w-auto aspect-square justify-self-center"
        />
        <ProductDetail />
      </div>
      <div className="flex flex-col gap-y-3 py-2 px-4">
        <h5 className="text-lg md:text-xl font-bold text-myBlack">Rating</h5>
        <RatingCard />
      </div>
    </section>
  );
}
