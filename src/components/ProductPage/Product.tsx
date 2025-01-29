import Image from "next/image";
import ProductDetail from "./ProductDetail";
import RatingCard from "./RatingCard";
import Reviews from "./Reviews";
import FilterReview from "./FilterReview";

export default function Product() {
  return (
    <section className="mt-4">
      <div className="grid overflow-visible grid-cols-1 md:grid-cols-2 min-w-full gap-x-2">
        <Image
          src={
            "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
          }
          alt="Product Image"
          width={500}
          height={500}
          className="w-auto sticky top-24 left-0 aspect-square justify-self-center"
        />
        <ProductDetail />
      </div>
      <section className="flex flex-col gap-y-3 py-2 px-4 mt-4">
        <h5 className="text-lg md:text-xl font-bold text-myBlack">Rating</h5>
        <RatingCard />
      </section>
      <section className="mt-8 overflow-visible grid grid-cols-[30%_1fr] px-4 py-2 gap-x-4">
        <FilterReview />
        <Reviews />
      </section>
    </section>
  );
}
