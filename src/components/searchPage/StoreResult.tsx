import ShellCardProduct from "../HomePage/ShellCardProduct";
import CardStore from "./CardStore";

export default function StoreResult() {
  return (
    <ShellCardProduct className="grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      {Array.from({ length: 20 }).map((_, i) => (
        <CardStore key={i} />
      ))}
    </ShellCardProduct>
  );
}
