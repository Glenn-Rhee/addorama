import Image from "next/image";

export default function ImageUser() {
  return <Image src={"/prof.jpg"} alt="Profile user" className="mb-4" width={250} height={250} />;
}
