import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <Image src={'/banner.png'} alt="banner" width={500} height={500} className="object-cover w-full h-full" />
    </main>
  );
}
