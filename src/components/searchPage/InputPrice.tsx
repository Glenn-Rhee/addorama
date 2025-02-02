import { cn } from "@/lib/utils";

interface InputPriceProps {
  className?: string;
  placeholder: string;
}
export default function InputPrice(props: InputPriceProps) {
  const { className, placeholder } = props;
  return (
    <div
      className={cn(
        "grid grid-cols-[20%_1fr] rounded-sm overflow-hidden bg-white border border-gray-300/50",
        className
      )}
    >
      <span className="bg-gray-200 flex items-center justify-center font-bold py-1 text-gray-800">
        Rp
      </span>
      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        className="ps-2 bg-transparent focus:border-none focus:outline-none focus:ring-0 text-gray-600"
      />
    </div>
  );
}
