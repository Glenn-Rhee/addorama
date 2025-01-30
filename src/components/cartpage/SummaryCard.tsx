import { cn } from "@/lib/utils";

interface SummaryCardProps {
  isEmpty?: boolean;
  className?: string;
}

export default function SummaryCard(props: SummaryCardProps) {
  const { isEmpty, className } = props;
  return (
    <div
      className={cn(
        "bg-white mt-4 shadow-md p-4 rounded-md md:sticky top-24 right-0 max-h-[210px]",
        className
      )}
    >
      <h6 className="text-myBlack font-semibold">Shopping Summary</h6>
      <div className="flex flex-col gap-y-2 mt-4">
        <div className="w-full text-gray-500 flex justify-between items-center">
          {isEmpty ? null : (
            <>
              <span className="text-gray-500">Ongkir</span>
              <span className="">Rp5.000</span>
            </>
          )}
        </div>
        <div className="w-full text-gray-500 flex justify-between items-center">
          <span className="text-gray-500">Total</span>
          <span className="text-myBlack font-bold">
            {isEmpty ? "-" : "Rp5.000.000"}
          </span>
        </div>
      </div>
      <button
        disabled={isEmpty}
        className={cn(
          "w-full bg-myBlue text-white mt-8 py-2 rounded-lg font-bold active:bg-[rgb(14,127,203)] flex items-center justify-center",
          {
            "cursor-not-allowed bg-gray-300 text-gray-600 active:bg-gray-300":
              isEmpty,
          }
        )}
      >
        Buy (3)
      </button>
    </div>
  );
}
