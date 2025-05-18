"use client";
import { Heart } from "lucide-react";
import { Separator } from "../ui/separator";
import Counter from "../Counter";
import { TProductDetail } from "@/types";
import { usePurchaseStore } from "@/store/purchaseStore";
import { useEffect, useState } from "react";
import ShareDialog from "./ShareDialog";

interface PurchaseCardProps {
  product: TProductDetail;
}

export default function PurchaseCard(props: PurchaseCardProps) {
  const { product } = props;
  const { qty } = usePurchaseStore();
  const priceAfterDiscount =
    product.price - (product.price * product.discount) / 100;
  const [toalPrice, setTotalPrice] = useState({
    afterDiscount: priceAfterDiscount * qty,
    beforeDiscount: product.price * qty,
  });

  useEffect(() => {
    if (qty > 0 && qty <= product.stock) {
      setTotalPrice({
        afterDiscount: priceAfterDiscount * qty,
        beforeDiscount: product.price * qty,
      });
    }
  }, [priceAfterDiscount, qty, product.stock, product.price]);

  return (
    <div className="w-full bg-white px-3 py-2 border border-gray-500/20 rounded-sm mt-8">
      <h5 className="font-bold text-myBlack">Set Amounts</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-y-0 lg:gap-x-1 mt-4">
        <div className="grid grid-cols-[70%_1fr] lg:grid-cols-[55%_1fr] items-center gap-x-2 w-full">
          <Counter stock={product.stock} />
          <div className="flex items-center justify-self-end lg:justify-self-start text-sm font-semibold text-myBlack">
            <span>
              Stock: <span className="font-bold">{product.stock}</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between w-full mt-4 items-end">
          <span className="text-sm lg:text-base text-gray-500">Subtotal</span>
          <div className="flex flex-col items-end justify-between">
            <span className="text-sm line-through text-gray-500 font-semibold">
              Rp{toalPrice.beforeDiscount.toLocaleString("id-ID")}
            </span>
            <span className="text-base lg:text-lg font-bold text-myBlack">
              Rp{toalPrice.afterDiscount.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-2 mt-4 md:mt-8">
        <button className="w-full bg-myBlue/10 border border-myBlue/90 text-myBlue text-base hover:bg-white transition-colors duration-100 font-bold rounded-md py-2">
          Buy Now
        </button>
        <button className="w-full bg-myBlue text-white hover:bg-[rgb(31,113,167)] transition-colors duration-100 font-bold rounded-md py-2">
          Add to Cart
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
        <ShareDialog product={product} />
      </div>
    </div>
  );
}
