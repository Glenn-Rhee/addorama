"use client";
import { Heart, Share2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function PurchaseCard() {
  const [qty, setQty] = useState<number>(1);
  const [disable, setDisable] = useState<boolean>(true);
  const stock = 10;

  useEffect(() => {
    if (qty === 1) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [qty]);

  return (
    <div className="w-full px-3 py-2 border border-gray-500/40 rounded-sm mt-8">
      <h5 className="font-bold text-myBlack">Set Amounts</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-y-0 lg:gap-x-1 mt-4">
        <div className="grid grid-cols-[70%_1fr] lg:grid-cols-[55%_1fr] items-center gap-x-2 w-full">
          <div className="py-0 px-3 rounded-sm border  max-w-[200px] items-center border-myBlue/40 flex justify-between">
            <button
              disabled={disable}
              onClick={() => {
                setQty((prev) => prev - 1);
              }}
              className={cn("font-semibold", {
                "text-myBlue": !disable,
                "text-gray-500/40": disable,
              })}
            >
              &ndash;
            </button>
            <span className="font-semibold text-myBlue text-lg">{qty}</span>
            <button
              className="text-myBlue font-semibold text-xl"
              onClick={() => {
                setQty((prev) => prev + 1);
              }}
            >
              &#43;
            </button>
          </div>
          <div className="flex items-center justify-self-end lg:justify-self-start text-sm font-semibold text-myBlack">
            <span>
              Stock: <span className="font-bold">{stock}</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between w-full mt-4 items-end">
          <span className="text-sm lg:text-base text-gray-500">Subtotal</span>
          <div className="flex flex-col items-end justify-between">
            <span className="text-sm line-through text-gray-500 font-semibold">
              Rp24.000.000
            </span>
            <span className="text-base lg:text-lg font-bold text-myBlack">
              Rp12.000.000
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 mt-4 md:mt-8">
        <button className="w-full bg-myBlue/10 border border-myBlue/90 text-myBlue text-base hover:bg-white transition-colors duration-100 font-bold rounded-md py-2">
          Add to cart
        </button>
        <button className="w-full bg-myBlue text-white hover:bg-[rgb(31,113,167)] transition-colors duration-100 font-bold rounded-md py-2">
          Add to cart
        </button>
      </div>
      <div className="grid grid-cols-[1fr_10%_1fr] gap-x-2 mt-4 h-5">
        <button className="flex justify-self-center items-center gap-x-2">
          <Heart size={15} />
          <span className="text-sm font-bold text-myBlack">Favorite</span>
        </button>
        <Separator
          orientation="vertical"
          className="text-myBlack justify-self-center"
        />
        <button className="flex justify-self-center items-center gap-x-2">
          <Share2 size={15} />
          <span className="text-sm font-bold text-myBlack">Share</span>
        </button>
      </div>
    </div>
  );
}
