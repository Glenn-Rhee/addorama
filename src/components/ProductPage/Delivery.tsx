import { MapPin, Truck } from "lucide-react";

export default function Delivery() {
  return (
    <div className="flex flex-col mt-8">
      <h5 className="font-bold text-myBlack text-lg">Pengiriman</h5>
      <div className="flex flex-col mt-3">
        <div className="flex items-center gap-x-2">
          <MapPin size={18} />
          <span className="text-base font-semibold text-gray-700">
            Sent from{" "}
            <span className="font-bold text-myBlack">Jakarta Utara</span>
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <Truck size={18} />
          <span className="text-base font-semibold text-gray-700">
            Postage <span className="font-bold text-myBlack">Rp10.000</span>
          </span>
        </div>
      </div>
    </div>
  );
}
