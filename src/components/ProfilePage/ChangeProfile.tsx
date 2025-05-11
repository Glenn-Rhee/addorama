import ChangeDateofBirth from "./ChangeDateofBirth";
import ChangeGender from "./ChangeGender";
import ContentName from "./ContentName";
import { TriggerChange } from "./TriggerChange";

export default function ChangeProfile() {
  return (
    <div className="flex flex-col gap-y-1">
      <div className="space-y-3">
        <h3 className="font-semibold text-slate-700 text-lg">
          Change biodata diri
        </h3>
        <div className="grid grid-cols-2 gap-y-2 text-gray-600">
          <span>Name</span>
          <span>
            Ariel Rizki{" "}
            <TriggerChange
              content={<ContentName />}
              title="Change Name"
              triggerValue="Change"
            />
          </span>
          <span>Date of birth</span>
          <span>
            11 April 2080{" "}
            <TriggerChange
              title="Change Date of Birth"
              triggerValue="Change"
              content={<ChangeDateofBirth />}
            />
          </span>
          <span>Gender</span>
          <span>
            <TriggerChange
              title="Add gender"
              triggerValue="Add gender"
              content={<ChangeGender />}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
