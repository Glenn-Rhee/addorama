import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  className?: string;
}

export default function CardProduct(props: CardProductProps) {
  const { className } = props;
  return (
    <Link
      href={"/product"}
      className={cn(
        "flex flex-col p-3 gap-y-2 shadow-[1px_1px_14px_1px_rgba(0,_0,_0,_0.2)] rounded-sm",
        className
      )}
    >
      <div className="w-full flex items-center justify-center">
        <Image
          src={
            "https://utfs.io/f/ukvjWf4frJl0kb6zdswWcKrNhwqZeSE4TFfzAjytUoBQiIHP"
          }
          alt="Product Image"
          width={100}
          height={100}
          className="aspect-square w-auto"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-1">
          <Star className="text-[#ffc400]" size={15} fill="#ffc400" />
          <Star className="text-[#ffc400]" size={15} fill="#ffc400" />
          <Star className="text-[#ffc400]" size={15} fill="#ffc400" />
          <Star className="text-[#ffc400]" size={15} fill="#ffc400" />
          <Star className="text-[#ffc400]" size={15} fill="#ffc400" />
          <span className="text-gray-400 text-sm">(104)</span>
        </div>
        <p className="text-[#191C1F] line-clamp-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          dolorum officiis explicabo eius architecto blanditiis temporibus
          eveniet aliquam laudantium voluptatem.
        </p>
        <span className="text-myBlue font-semibold">Rp 100.000</span>
      </div>
    </Link>
  );
}
