import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";
import MyAvatar from "../MyAvatar";
import AccordionReview from "./AccordionReview";

export default function Review() {
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-1">
          <Star fill="yellow" color="yellow" size={18} />
          <Star fill="yellow" color="yellow" size={18} />
          <Star fill="yellow" color="yellow" size={18} />
          <Star fill="yellow" color="yellow" size={18} />
          <Star fill="yellow" color="yellow" size={18} />
        </div>
        <span className="text-sm text-gray-500 font-semibold">2 Weeks ago</span>
      </div>
      <div className="space-y-1">
        <ReviewCard
          avatarImage={
            <MyAvatar src="/prof.jpg" alt="Ariel Profile" fallBack="AR" />
          }
          username="Ariel"
        >
          Paket aman ga lecet/rusak, pembungkusan rapi, kabelnya juga aman,
          adminnya ramah👍🏻
        </ReviewCard>
        <div className="flex w-full justify-end">
          <AccordionReview />
        </div>
      </div>
    </div>
  );
}
