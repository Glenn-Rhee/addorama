import { ProductMain, ResponsePayload } from "@/types";
import CardProduct from "./CardProduct";
import ShellCardProduct from "./ShellCardProduct";

interface CardsProps {
  dataResponse: ResponsePayload;
}

export default function Cards(props: CardsProps) {
  const { dataResponse } = props;
  const data = dataResponse.data as ProductMain[];
  return (
    <ShellCardProduct>
      {data.map((product) => (
        <CardProduct data={product} key={product.id} />
      ))}
    </ShellCardProduct>
  );
}
