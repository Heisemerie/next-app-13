import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import processThread from "@/public/images/Process vs Thread.gif";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative">
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />

      {/* the Next.js Image component (built on html img element) automatically compresses and resizes images based on the device size */}
      <Image src={processThread} alt="processThread" />
      {/* <Image
        src={"https://bit.ly/react-cover"}
        alt="coffee"
        // width={300}
        // height={170}
        fill
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 480px) 100vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "Homepage",
};
