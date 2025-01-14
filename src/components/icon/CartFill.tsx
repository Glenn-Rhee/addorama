import { ShoppingCart } from "lucide-react";

interface CartFillProps {
  size?: number;
}

export default function CartFill(props: CartFillProps) {
  const { size = 35 } = props;
  return (
    <div className="relative cursor-pointer ">
      <div className="absolute z-10 rounded-full flex items-center justify-center -right-2 w-[17px] h-[17px] -top-1 aspect-square text-xs font-bold p-[.5px] bg-white text-[#1B6392]">
        <span>9</span>
      </div>
      <ShoppingCart size={size} className="relative" />
    </div>
  );
}
