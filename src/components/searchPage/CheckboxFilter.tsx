import { Checkbox } from "../ui/checkbox";

interface CheckboxFilterProps {
  id: string;
  label: string;
}

export default function CheckboxFilter(props: CheckboxFilterProps) {
  const { id, label } = props;
  return (
    <div className="flex gap-x-3 items-center">
      <Checkbox
        id={id}
        className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue"
      />
      <label htmlFor={id} className="text-gray-500">
        {label}
      </label>
    </div>
  );
}
