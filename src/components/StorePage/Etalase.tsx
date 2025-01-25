import CardProduct from "../HomePage/CardProduct";
import ShellCardProduct from "../HomePage/ShellCardProduct";
import ItemEtalase from "./ItemEtalase";
import SelectSortingProduct from "./SelectSortingProduct";

export default function Etalase() {
  return (
    <div className="flex gap-x-3 w-full mt-8">
      <section className="px-3 py-2 max-h-[133PX] bg-white border rounded-md w-[40%] max-w-[280px] border-gray-400/60">
        <h6 className="font-bold text-sm md:text-base text-myBlack">
          Etalase Toko (3)
        </h6>
        <ul className="mt-2 space-y-1 text-xs md:text-sm">
          <ItemEtalase>All Product</ItemEtalase>
          <ItemEtalase>Laptop</ItemEtalase>
          <ItemEtalase>Accessories</ItemEtalase>
        </ul>
      </section>
      <section className="w-full space-y-2">
        <div className="flex items-center w-full justify-end">
          <div className="flex items-center gap-x-2 md:gap-x-8">
            <span className="font-semibold text-myBlack">Sort By</span>
            <SelectSortingProduct />
          </div>
        </div>
        <div className="space-y-1">
          <h6 className="font-bold text-myBlack">All Product</h6>
          <ShellCardProduct className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </ShellCardProduct>
        </div>
      </section>
    </div>
  );
}
