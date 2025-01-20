import Image from "next/image";
import ProductDetail from "./ProductDetail";
import RatingCard from "./RatingCard";
import { Separator } from "../ui/separator";
import RatingCheckbox from "./RatingCheckbox";
import Reviews from "./Reviews";

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
      <section className="flex flex-col gap-y-3 py-2 px-4 mt-4">
        <h5 className="text-lg md:text-xl font-bold text-myBlack">Rating</h5>
        <RatingCard />
      </section>
      <section className="mt-8 grid grid-cols-[30%_1fr] px-4 py-2 gap-x-4">
        <div className="border max-h-[270px] border-gray-600/20 p-3 rounded-sm">
          <h5 className="uppercase font-semibold text-myBlack">
            Filter Review
          </h5>
          <Separator className="my-2 bg-myBlack/60" />
          <h5 className="text-sm font-bold text-myBlack">Rating</h5>
          <div className="mt-4 flex flex-col gap-y-3">
            <RatingCheckbox id="five">5</RatingCheckbox>
            <RatingCheckbox id="four">4</RatingCheckbox>
            <RatingCheckbox id="three">3</RatingCheckbox>
            <RatingCheckbox id="two">2</RatingCheckbox>
            <RatingCheckbox id="one">1</RatingCheckbox>
          </div>
        </div>
        <Reviews />
      </section>
    </section>
  );
}
