import CardCart from "./CardCart";
import ShellCart from "./ShellCart";
import SummaryCard from "./SummaryCard";
import ProductRec from "./ProductRec";
import CardEmpty from "../CardEmpty";

export default function EmptyCart() {
  return (
    <ShellCart>
      <CardCart className="w-full h-full flex shadow-md items-center justify-center mt-1">
        <CardEmpty
          src="/empty-cart.png"
          title="Your cart is empty"
          description="Do you want something? Add it to your cart now!"
        >
          Start Shopping
        </CardEmpty>
      </CardCart>
      <SummaryCard isEmpty className="mt-1" />
      <ProductRec />
    </ShellCart>
  );
}
