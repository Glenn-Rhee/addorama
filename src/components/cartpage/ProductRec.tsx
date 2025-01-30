import CardProduct from "../HomePage/CardProduct";
import ShellCardProduct from "../HomePage/ShellCardProduct";

export default function ProductRec() {
  return (
    <div className="space-y-4 mt-8">
      <h1 className="text-lg md:text-2xl font-bold text-myBlack">For you</h1>
      <ShellCardProduct className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <CardProduct key={i} className="bg-white shadow-xl rounded-md" />
        ))}
      </ShellCardProduct>
    </div>
  );
}
