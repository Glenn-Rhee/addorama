import CardProduct from "../HomePage/CardProduct";
import ShellCardProduct from "../HomePage/ShellCardProduct";

export default function ProductResult() {
  return (
    <ShellCardProduct className="shadow-none grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: 15 }).map((_, i) => (
        <CardProduct key={i} />
      ))}
    </ShellCardProduct>
  );
}
