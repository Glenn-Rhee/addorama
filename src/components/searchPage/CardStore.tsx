import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CardStore() {
  return (
    <Link
      href={"/store/123"}
      className="grid grid-cols-[10%_1fr_25%] border p-2 border-gray-300/50 bg-white rounded-sm gap-x-2"
    >
      <Image
        src={"/prof.jpg"}
        alt="Profile Image store"
        width={30}
        height={30}
        className="w-auto aspect-square"
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <ShieldCheck size={20} color="white" fill="#2DA5F3" />
          <span className="text-myBlack text-sm font-semibold">
            Electronic Raisya
          </span>
        </div>
        <span className="text-gray-500 text-xs font-semibold">
          Jakarta Utara
        </span>
      </div>
      <button className="border-myBlue text-xs font-bold border px-1 rounded-md text-myBlue bg-white">
        View Shop
      </button>
    </Link>
  );
}
