import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import Counter from "../Counter";

interface ProductCartProps {
  discount: number;
}

export default function ProductCart(props: ProductCartProps) {
  const { discount } = props;
  const stock = 4;
  return (
    <div className="grid grid-cols-[1fr_40%]">
      <div className="flex gap-x-4">
        <Checkbox className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue" />
        <div className="relative">
          <Image
            src={
              "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
            }
            alt="Product"
            width={100}
            height={100}
            className="aspect-square"
          />
          {discount ? (
            <div className="absolute top-9 left-4 w-8 flex items-center justify-center rounded-r-xl text-xs font-semibold text-white bg-red-500">
              {discount}%
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="text-xs md:text-sm font-bold textmy text-orange">
            Sisa 4
          </span>
          <Link
            href={"/product"}
            className="text-xs md:text-sm text-myBlack font-[500]"
          >
            Laptop Lenovo yang mantap aduhai
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 items-end justify-between py-3">
        <div className="flex flex-col gap-y-1 w-full items-end ">
          <h6 className="font-bold text-myBlack text-base md:text-lg">
            Rp 4.000.000
          </h6>
          {discount > 0 ? (
            <div className="flex items-center text-sm">
              <span className="text-gray-500 font-semibold">{discount}%</span>
              <span className="text-gray-500 font-semibold line-through ml-2">
                Rp 5.000.000
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex items-center gap-x-4 w-full justify-end">
          <button>
            <Heart color="gray" size={20} />
          </button>
          <button>
            <Trash2 color="gray" size={20} />
          </button>
          <Counter className="w-[120px] rounded-xl" stock={stock} />
        </div>
      </div>
    </div>
  );
}
