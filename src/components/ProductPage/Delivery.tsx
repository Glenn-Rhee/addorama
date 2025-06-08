import { Postage } from "@/lib/postage";
import { TProductDetail, TShippingResponsePayload } from "@/types";
import { MapPin, Truck } from "lucide-react";

interface DeliveryProps {
  product: TProductDetail;
}

export default async function Delivery(props: DeliveryProps) {
  const { product } = props;
  const priceAfterDiscount =
    product.price - (product.price * product.discount) / 100;

  const urlCountPostage = Postage.getUrlCountPostage(
    product.zipCode,
    "16418",
    200,
    priceAfterDiscount
  );

  const response = await fetch(urlCountPostage, {
    method: "GET",
    redirect: "follow",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_SHIPPING_DELIVERY as string,
    },
  });

  const dataShipping = (await response.json()) as TShippingResponsePayload;
  const shippingCost = dataShipping.data.calculate_reguler[0].shipping_cost;

  return (
    <div className="flex flex-col mt-8">
      <h5 className="font-bold text-myBlack text-lg">Pengiriman</h5>
      <div className="flex flex-col mt-3">
        <div className="flex items-center gap-x-2">
          <MapPin size={18} />
          <span className="text-base font-semibold text-gray-700">
            Sent from{" "}
            <span className="font-bold text-myBlack">{product.city}</span>
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <Truck size={18} />
          <span className="text-base font-semibold text-gray-700">
            Postage{" "}
            <span className="font-bold text-myBlack">
              Rp{shippingCost.toLocaleString("id-ID")}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
