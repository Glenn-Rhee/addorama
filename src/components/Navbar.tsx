import { Heart, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import User from "./icon/User";
import Link from "next/link";
import CartFill from "./icon/CartFill";

export default function Navbar() {
  return (
    <nav className="flex px-10 py-5 bg-[#1B6392] items-center justify-between gap-x-4">
      <Link href={"/"} className="text-white flex items-center gap-x-3">
        <Image
          src={"/letter-a.png"}
          alt="icon name"
          width={25}
          height={25}
          className="w-auto aspect-square"
        />
        <span className="text-4xl font-bold uppercase">Addorama</span>
      </Link>
      <div className="flex items-center justify-between bg-white w-[500px] pr-3 py-1 rounded-md">
        <input
          placeholder="Search everything"
          className="outline-none border-none placeholder-[#77878F] text-[#191C1F] w-[95%] px-3 bg-transparent py-1"
        />
        <Search color="#191C1F" />
      </div>
      <div className="flex items-center gap-x-7 text-white">
        {/* <ShoppingCart className="cursor-pointer" /> */}
        <CartFill size={25}/>
        <Heart size={25} className="cursor-pointer" />
        <User size={25} className="cursor-pointer" />
      </div>
    </nav>
  );
}
