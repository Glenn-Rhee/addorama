import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function ChangeGender() {
  return (
    <RadioGroup defaultValue="">
      <div className="flex items-center justify-center w-full gap-x-20">
        <div className="flex items-center gap-x-2">
          <RadioGroupItem value="male" id="male" />
          <Label htmlFor="male">Male</Label>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioGroupItem value="female" id="female" />
          <Label htmlFor="female">Female</Label>
        </div>
      </div>
    </RadioGroup>
  );
}
