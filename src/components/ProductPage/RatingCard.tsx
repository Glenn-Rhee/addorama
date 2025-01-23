import { Star } from "lucide-react";
import { Progress } from "../ui/progress";
import Card from "../Card";

export default function RatingCard() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex gap-x-2 items-center">
            <Star color="yellow" fill="yellow" size={28} />
            <span className="font-bold text-lg md:text-xl lg:text-2xl text-myBlack">
              5.0 <sub className="text-gray-500 font-semibold">/5.0</sub>
            </span>
          </div>
          <div className="space-y-1 flex flex-col">
            <span className="text-myBlack font-semibold">
              100% pembeli merasa puas
            </span>
            <span className="font-semibold text-gray-500">
              148 Rating | 29 Ulasan
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-8 md:mt-0">
          <div className="flex items-center gap-x-2">
            <Star fill="yellow" color="yellow" size={15} />
            <span className="text-sm font-semibold text-myBlack">5</span>
            <Progress value={80} className="w-[70%]" />
            <span className="text-gray-500 font-semibold text-sm">(142)</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Star fill="yellow" color="yellow" size={15} />
            <span className="text-sm font-semibold text-myBlack">4</span>
            <Progress value={20} className="w-[70%]" />
            <span className="text-gray-500 font-semibold text-sm">(100)</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Star fill="yellow" color="yellow" size={15} />
            <span className="text-sm font-semibold text-myBlack">3</span>
            <Progress value={10} className="w-[70%]" />
            <span className="text-gray-500 font-semibold text-sm">(40)</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-4 md:mt-0">
          <div className="flex items-center gap-x-2">
            <Star fill="yellow" color="yellow" size={15} />
            <span className="text-sm font-semibold text-myBlack">2</span>
            <Progress value={3} className="w-[70%]" />
            <span className="text-gray-500 font-semibold text-sm">(14)</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Star fill="yellow" color="yellow" size={15} />
            <span className="text-sm font-semibold text-myBlack">1</span>
            <Progress value={1} className="w-[70%]" />
            <span className="text-gray-500 font-semibold text-sm">(1)</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
