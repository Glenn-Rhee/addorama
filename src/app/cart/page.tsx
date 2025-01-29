import CardCart from "@/components/cartpage/CardCart";
import Container from "@/components/Container";
import Counter from "@/components/Counter";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Trash2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

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
            <div className="flex items-center gap-x-4">
              <Checkbox className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue" />
              <div className="flex items-center gap-x-1">
                <Image
                  src={"/prof.jpg"}
                  alt="Profile Store"
                  width={18}
                  height={18}
                  className="w-auto rounded-full"
                />
                <span className="text-myBlack font-semibold">
                  Electronic Raisya
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_40%]">
              <div className="flex gap-x-4">
                <Checkbox className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue" />
                <Image
                  src={
                    "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
                  }
                  alt="Product"
                  width={100}
                  height={100}
                  className="aspect-square"
                />
                <div className="flex flex-col gap-y-3">
                  <span className="text-xs md:text-sm font-bold textmy text-orange">
                    Sisa 4
                  </span>
                  <span className="text-xs md:text-sm text-myBlack font-[500]">
                    Laptop Lenovo yang mantap aduhai
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between py-3">
                <div className="flex flex-col gap-y-1 w-full items-end ">
                  <h6 className="font-bold text-myBlack text-lg">
                    Rp 5.000.000
                  </h6>
                </div>
                <div className="flex items-center gap-x-4 w-full justify-end">
                  <Heart color="gray" size={20} />
                  <Trash2 color="gray" size={20} />
                  <Counter className="w-[120px] rounded-xl"/>
                </div>
              </div>
            </div>
          </CardCart>
        </div>
      </div>
    </Container>
  );
}
