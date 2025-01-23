import Image from "next/image";
import Card from "../Card";
import { Diff, Share2, ShieldCheck, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import InfoCard from "./InfoCard";

export default function StoreCard() {
  return (
    <Card>
      <div className="gap-y-3 grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_50%]">
        <div className="flex items-center gap-x-4">
          <Image
            src={"/prof.jpg"}
            alt="Profile image store"
            width={64}
            height={64}
            sizes="(max-width: 640px) 100px, 60px"
            className="aspect-square rounded-full w-auto"
          />
          <div className="flex flex-col gap-y-2 w-[75%]">
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2">
                <ShieldCheck size={24} color="white" fill="#2DA5F3" />
                <span className="text-base md:text-lg font-semibold md:font-bold text-myBlack">
                  Electronic Raisya
                </span>
              </div>
              <span className="text-gray-500 text-sm -mt-1">Jakarta Utara</span>
            </div>
            <div className="w-full items-center flex gap-x-2">
              <button className="w-[60%] md:max-w-[200px] h-8 bg-myBlue text-white font-semibold rounded-md py-1">
                Follow
              </button>
              <button className="py-1 px-2 h-8 border rounded-md border-myBlue">
                <Share2 size={18} color="oklch(0.551 0.027 264.364)" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-4 py-4 justify-self-center md:justify-self-end">
          <InfoCard
            icon={<Star size={20} fill="yellow" color="yellow" />}
            title="Rating & Ulasan"
            value={4.7}
          />
          <Separator orientation="vertical" />
          <InfoCard
            title="Pesanan diproses"
            value={"6 jam"}
            icon={<Diff size={15} color="#191C1F" />}
          />
          <Separator orientation="vertical" />
          <InfoCard title="Jam operasi toko" value={"09:00 - 17:00"} />
        </div>
      </div>
    </Card>
  );
}
