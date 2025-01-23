"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <button
      className="font-semibold text-white text-lg px-2 py-1 bg-myBlue rounded-md"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}
