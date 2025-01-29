import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

export default function StoreCart() {
  return (
    <div className="flex items-center gap-x-4">
      <Checkbox className="hover:border-myBlue data-[state=checked]:bg-myBlue data-[state=checked]:border-myBlue" />
      <Link href={"/store/123"} className="flex items-center gap-x-1">
        <Image
          src={"/prof.jpg"}
          alt="Profile Store"
          width={18}
          height={18}
          className="w-auto rounded-full"
        />
        <span className="text-myBlack font-semibold">Electronic Raisya</span>
      </Link>
    </div>
  );
}
