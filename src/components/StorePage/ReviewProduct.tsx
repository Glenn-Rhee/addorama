import Image from "next/image";
import Link from "next/link";
import Review from "../ProductPage/Review";

export default function ReviewProduct() {
  return (
    <>
      <div className="border grid grid-cols-[25%_1fr] gap-x-3 gap-y-10 border-gray-400/20 rounded-sm p-2">
        <Link href={"/product?id=123"} className="flex max-w-[200px] flex-col">
          <Image
            src={
              "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
            }
            alt="Product"
            width={500}
            height={500}
            className="w-auto rounded-sm aspect-square"
          />
          <h6 className="text-myBlack font-bold">
            Laptop Acer yang sangat mantap wadidaw
          </h6>
        </Link>
        <Review />
      </div>
    </>
  );
}
