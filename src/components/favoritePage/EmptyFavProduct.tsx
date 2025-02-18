import CardEmpty from "../CardEmpty";
import CardCart from "../cartpage/CardCart";

export default function EmptyFavProduct() {
  return (
    <CardCart className="w-[45rem] h-full flex shadow-md items-center justify-center mt-4">
      <CardEmpty
        src="/out-of-stock.png"
        size={150}
        title="You can see your favorite product here"
      >
        Find Your product
      </CardEmpty>
    </CardCart>
  );
}
