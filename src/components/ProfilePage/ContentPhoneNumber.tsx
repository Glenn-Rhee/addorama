import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ContentPhoneNumber() {
  return (
    <div className="space-y-1">
      <Label htmlFor="phone" className="text-sm text-gray-700">
        Phone Number
      </Label>
      <Input id="phone" type="text" inputMode="numeric" />
    </div>
  );
}
