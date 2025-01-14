import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import User from "./icon/User";
import Link from "next/link";
import CartFill from "./icon/CartFill";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 right-0 left-0 px-4 py-2 md:px-10 md:py-5 bg-[#1B6392] items-center justify-between gap-x-4">
      <Link
        href={"/"}
        className="text-white flex items-center gap-x-1 lg:gap-x-3"
      >
        <Image
          src={"/letter-a.png"}
          alt="icon name"
          width={25}
          height={25}
          className="w-auto aspect-square"
        />
        <span className="text-lg md:text-3xl font-bold uppercase">
          Addorama
        </span>
      </Link>
      <div className="flex items-center justify-end gap-x-1 lg:gap-x-0 lg:justify-between lg:w-[60%]">
        <div className="flex items-center justify-between bg-white w-[180px] md:w-[300px] lg:w-[500px] pr-3 py-1 rounded-md">
          <input
            placeholder="Search everything"
            type="search"
            className="outline-none border-none placeholder-[#77878F] placeholder:text-sm lg:placeholder:text-base text-sm lg:text-base text-[#191C1F] w-[95%] px-3 bg-transparent py-1"
          />
          <button className="cursor-pointer">
            <Search color="#191C1F" size={25}/>
          </button>
        </div>
        <div className="lg:flex hidden items-center gap-x-7 text-white">
          {/* <ShoppingCart size={25} className="cursor-pointer" /> */}
          <CartFill size={25} />
          <Heart size={25} className="cursor-pointer" />
          <User size={25} className="cursor-pointer" />
        </div>
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu color="white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex items-center gap-x-3">
                  <CartFill size={18} />
                  <span className="text-sm font-semibold">Cart</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-3">
                  <Heart size={25} className="cursor-pointer" />
                  <span className="text-sm font-semibold">Favorite</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-3">
                  <UserRound size={25} />
                  <span className="text-sm font-semibold">Account</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
