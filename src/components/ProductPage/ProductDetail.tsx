import { Star } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Delivery from "./Delivery";

export default function ProductDetail() {
  return (
    <div className="px-2 py-4">
      <div className="flex flex-col gap-y-3">
        <div>
          <h4 className="text-myBlack font-semibold text-lg md:text-xl lg:text-2xl">
            Laptop Acer yang sangat mantap wadidaw
          </h4>
          <div className="flex items-center h-5 gap-x-2 mt-1">
            <Star size={20} color="yellow" fill="yellow" />
            <span className="text-sm font-semibold">
              4.9{" "}
              <span className="text-gray-500 font-normal">(500 rating)</span>
            </span>
            <Separator orientation="vertical" className="bg-myBlack" />
            <span className="text-sm font-semibold text-myBlack">
              5.9k <span className="text-gray-500 font-normal">review</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="text-myBlue font-bold text-lg md:text-xl lg:text-3xl">
            Rp12.000.000
          </span>
        </div>
      </div>
      <div className="mt-8">
        <p className="font-semibold line-clamp-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatum maxime quasi totam optio consequuntur nesciunt impedit
          dolorum odit eveniet molestias eligendi beatae, praesentium delectus
          exercitationem explicabo! Explicabo sit saepe labore quod ea quidem,
          facilis accusantium magni aut fugiat molestiae sequi temporibus earum,
          ad perferendis, impedit tenetur. Illum, fugiat accusantium!
        </p>
        <div className="flex justify-between items-center min-w-full mt-10">
          <div className="flex gap-x-3">
            <Image
              src="/prof.jpg"
              alt="Profile picture store"
              width={50}
              height={50}
              className="aspect-square w-auto rounded-full"
            />
            <div className="space-y-1">
              <h5 className="font-bold text-sm md:text-base text-myBlack">
                Electronic Raisya
              </h5>
              <div className="flex flex-col">
                <div className="flex items-center gap-x-2">
                  <Star color="black" size={18} />
                  <span className="text-sm text-myBlack">
                    4.8 <span className="text-gray-500">(10.5k)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="border border-myBlue text-myBlue px-4 rounded-lg py-1 font-semibold hover:bg-myBlue hover:text-white transition-all duration-75 active:bg-blue-600">
              Follow
            </button>
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
}
