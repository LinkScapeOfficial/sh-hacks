import Image from "next/image";
import Title from "@/components/home/title";
import Nav from "@/components/nav";
import AboutUs from "@/components/home/about-us";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="container flex min-h-screen flex-col items-start justify-between bg-background font-helvetica">
        <section className={"flex h-screen w-full flex-col"}>
          <Title />
        </section>
        <section className={"flex h-screen w-full flex-col pt-24"}>
          <AboutUs />
        </section>
      </main>
    </>
  );
}
