import { Star } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

interface RatingCheckboxProps {
  id: string;
  children: React.ReactNode;
}

export default function RatingCheckbox(props: RatingCheckboxProps) {
  const { id, children } = props;
  return (
    <div className="flex items-center gap-x-2">
      <Checkbox
        id={id}
        className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue"
      />
      <label htmlFor={id} className="flex items-center gap-x-1">
        <Star size={18} fill="yellow" color="yellow" />
        <span className="text-sm text-myBlack">{children}</span>
      </label>
    </div>
  );
}
