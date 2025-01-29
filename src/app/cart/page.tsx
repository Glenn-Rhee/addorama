import CardCart from "@/components/cartpage/CardCart";
import ProductCart from "@/components/cartpage/ProductCart";
import StoreCart from "@/components/cartpage/StoreCart";
import Container from "@/components/Container";
import CardProduct from "@/components/HomePage/CardProduct";
import ShellCardProduct from "@/components/HomePage/ShellCardProduct";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Addroma Shop",
  description: "Your cart in Addroma Shop",
};

export default function CartPage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6 mb-[80px] overflow-visible">
      <h3 className="text-lg md:text-2xl text-myBlack font-bold">Cart</h3>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_30%] gap-x-4">
        <div className="flex flex-col gap-y-2 mt-4">
          <CardCart className="flex items-center gap-x-4 rounded-t-xl">
            <Checkbox className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue" />
            <span className="text-base md:text-lg font-semibold text-myBlack">
              Select All <span className="text-gray-400">(2)</span>
            </span>
          </CardCart>
          <CardCart className="space-y-4">
            <StoreCart />
            <ProductCart discount={0} />
            <ProductCart discount={0} />
          </CardCart>
          <CardCart className="space-y-4">
            <StoreCart />
            <ProductCart discount={20} />
          </CardCart>
        </div>
        <div className="bg-white mt-4 p-4 rounded-md md:sticky top-24 right-0 max-h-[210px]">
          <h6 className="text-myBlack font-semibold">Shopping Summary</h6>
          <div className="flex flex-col gap-y-2 mt-4">
            <div className="w-full text-gray-500 flex justify-between items-center">
              <span className="text-gray-500">Ongkir</span>
              <span className="">Rp5.000</span>
            </div>
            <div className="w-full text-gray-500 flex justify-between items-center">
              <span className="text-gray-500">Total</span>
              <span className="text-myBlack font-bold">Rp12.005.000</span>
            </div>
          </div>
          <button className="w-full bg-myBlue text-white mt-8 py-2 rounded-lg font-bold active:bg-[rgb(14,127,203)] flex items-center justify-center">
            Buy (3)
          </button>
        </div>
        <div className="space-y-4 mt-8">
          <h1 className="text-lg md:text-2xl font-bold text-myBlack">
            For you
          </h1>
          <ShellCardProduct className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <CardProduct key={i} className="bg-white shadow-xl rounded-md" />
            ))}
          </ShellCardProduct>
        </div>
      </div>
    </Container>
  );
}
