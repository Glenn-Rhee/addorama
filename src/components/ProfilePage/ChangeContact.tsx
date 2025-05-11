import ContentPhoneNumber from "./ContentPhoneNumber";
import { TriggerChange } from "./TriggerChange";

export default function ChangeContact() {
  return (
    <div className="flex flex-col gap-y-3 mt-8">
      <h3 className="font-semibold text-slate-700 text-lg">Change Contact</h3>
      <div className="grid grid-cols-2 gap-y-2 text-gray-600">
        <span>Email</span>
        <span>arielrizki@gmail.com</span>
        <span>Phone Number</span>
        <span>
          <TriggerChange
            title="Add Phone Number"
            triggerValue="Add Phone number"
            description="You can add a phone number to your account to make it easier for us to contact you."
            content={<ContentPhoneNumber />}
          />
        </span>
      </div>
    </div>
  );
}
