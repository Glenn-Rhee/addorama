import { cn } from "@/lib/utils";
import { ProductMain } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  className?: string;
  data: ProductMain;
}

export default function CardProduct(props: CardProductProps) {
  const { className, data } = props;
  return (
    <Link
      href={"/product?id=" + data.id}
      className={cn(
        "flex flex-col justify-between p-3 gap-y-2 shadow-[1px_1px_14px_1px_rgba(0,_0,_0,_0.2)] rounded-sm",
        className
      )}
    >
      <div className="w-full flex items-center justify-center">
        <Image
          src={data.urlImage}
          alt="Product Image"
          width={100}
          height={100}
          className="aspect-square w-auto"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="text-myBlack font-semibold">{data.productName}</h4>
        <div className="flex items-center gap-x-1">
          {data.avgRating === 0
            ? Array.from({ length: 5 }).map((_, i) => (
                <Star
                  className="text-[#ffc400]"
                  size={15}
                  fill="#ffc400"
                  key={i}
                />
              ))
            : Array.from({ length: Math.floor(data.avgRating) }).map((_, i) => (
                <Star
                  className="text-[#ffc400]"
                  size={15}
                  fill="#ffc400"
                  key={i}
                />
              ))}
          <span className="text-gray-400 text-sm">({data.ratingCount})</span>
        </div>
        <p className="text-[#191C1F] line-clamp-2 text-sm">
          {data.description}
        </p>
        <span className="text-myBlue font-semibold">
          Rp {data.price.toLocaleString("id-ID")}
        </span>
      </div>
    </Link>
  );
}
