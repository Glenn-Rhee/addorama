import CardCart from "@/components/cartpage/CardCart";
import ProductCart from "@/components/cartpage/ProductCart";
import StoreCart from "@/components/cartpage/StoreCart";
import Container from "@/components/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Addroma Shop",
  description: "Your cart in Addroma Shop",
};

export default function CartPage() {
  return (
    <Container className="lg:px-20 md:px-[70px] px-6">
      <h3 className="text-lg md:text-2xl text-myBlack font-bold">Cart</h3>
      <div className="grid grid-cols-[1fr_40%]">
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
            <ProductCart discount={0}/>
          </CardCart>
          <CardCart className="space-y-4">
            <StoreCart />
            <ProductCart discount={20} />
          </CardCart>
        </div>
      </div>
    </Container>
  );
}
