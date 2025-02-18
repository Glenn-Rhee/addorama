import { Search } from "lucide-react";

export default function SearchFavProduct() {
  return (
    <div className="bg-transparent max-w-[20rem] mb-4 px-2 py-1 border rounded-lg border-gray-300 flex items-center">
      <Search color="oklch(0.707 0.022 261.325)" size={22} />
      <input
        type="search"
        placeholder="Find Your favorite Product"
        className="outline-none border-none placeholder-[#77878F] placeholder:text-sm text-sm lg:text-base text-[#191C1F] w-[95%] px-3 bg-transparent py-1"
      />
    </div>
  );
}
