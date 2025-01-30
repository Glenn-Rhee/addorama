"use client";
import Image from "next/image";
import CardCart from "./CardCart";
import ShellCart from "./ShellCart";
import SummaryCard from "./SummaryCard";
import { useRouter } from "next/navigation";
import ProductRec from "./ProductRec";

export default function EmptyCart() {
  const router = useRouter();
  return (
    <ShellCart>
      <CardCart className="w-full h-full flex shadow-md items-center justify-center mt-1">
        <div className="flex items-center gap-x-3">
          <Image
            src={"/empty-cart.png"}
            alt="Empty cart picture"
            width={200}
            height={200}
            className="w-auto aspect-square"
          />
          <div className="flex flex-col gap-y-3">
            <h5 className="font-bold text-lg md:text-xl text-myBlack">
              Your cart is empty
            </h5>
            <span className="text-sm font-semibold text-gray-500">
              Do you want something? Add it to your cart now!
            </span>
            <button
              onClick={() => {
                router.push("/");
              }}
              className="rounded-lg bg-myBlue py-2 max-w-[200px] font-bold text-white"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </CardCart>
      <SummaryCard isEmpty className="mt-1" />
      <ProductRec />
    </ShellCart>
  );
}
