import { Separator } from "../ui/separator";
import RatingCheckbox from "./RatingCheckbox";

export default function FilterReview() {
  return (
    <div className="border max-h-[270px] bg-white sticky top-24 left-0 border-gray-600/20 p-3 rounded-sm">
      <h5 className="uppercase font-semibold text-myBlack">Filter Review</h5>
      <Separator className="my-2 bg-myBlack/60" />
      <h5 className="text-sm font-bold text-myBlack">Rating</h5>
      <div className="mt-4 flex flex-col gap-y-3">
        <RatingCheckbox id="five">5</RatingCheckbox>
        <RatingCheckbox id="four">4</RatingCheckbox>
        <RatingCheckbox id="three">3</RatingCheckbox>
        <RatingCheckbox id="two">2</RatingCheckbox>
        <RatingCheckbox id="one">1</RatingCheckbox>
      </div>
    </div>
  );
}
