export default function Category() {
  return (
    <div className="p-4 w-full rounded-md shadow-[1px_1px_14px_1px_rgba(0,_0,_0,_0.1)] ">
      <h2 className="font-bold text-[#191C1F] text-xl">Kategori Pilihan</h2>
      <div className="mt-4 grid grid-cols-3 gap-x-2 p-0">
        <button className="flex justify-center rounded-xl px-4 py-2 bg-orange p-0">
          <span className="text-white font-bold text-xs md:text-sm">All</span>
        </button>
        <button className="flex justify-center rounded-xl px-4 py-2 border border-gray-400/40  p-0">
          <span className="text-[#191C1F] font-bold text-xs md:text-sm">Laptop</span>
        </button>
        <button className="flex justify-center rounded-xl px-4 py-2 border border-gray-400/40  p-0">
          <span className="text-[#191C1F] font-bold text-xs md:text-sm">Aksesoris</span>
        </button>
      </div>
    </div>
  );
}
