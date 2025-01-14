import { ShoppingCart } from "lucide-react";

interface CartFillProps {
  size?: number;
}

export default function CartFill(props: CartFillProps) {
  const { size = 35 } = props;
  return (
    <div className="relative cursor-pointer w-fit">
      <div className="absolute z-10 rounded-full flex items-center justify-center -right-2 w-[14px] h-[14px] lg:w-[17px] lg:h-[17px] -top-1 aspect-square text-[10px] font-bold p-[.5px] bg-red-500 text-white">
        <span>9</span>
      </div>
      <ShoppingCart size={size} className="relative" />
    </div>
  );
}
