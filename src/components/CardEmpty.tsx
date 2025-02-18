"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardEmptyProps {
  src: string;
  size?: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function CardEmpty(props: CardEmptyProps) {
  const { src, size = 200, title, description, children } = props;
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-3">
      <Image
        src={src}
        alt="Empty cart picture"
        width={size}
        height={size}
        className="w-auto aspect-square"
      />
      <div className="flex flex-col gap-y-3">
        <h5 className="font-bold text-lg md:text-xl text-myBlack">{title}</h5>
        <span className="text-sm font-semibold text-gray-500">
          {description}
        </span>
        <button
          onClick={() => {
            router.push("/");
          }}
          className="rounded-lg bg-myBlue py-2 max-w-[200px] font-bold text-white"
        >
          {children}
        </button>
      </div>
    </div>
  );
}
