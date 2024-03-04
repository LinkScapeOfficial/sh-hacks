import Image from "next/image";
import Title from "@/components/home/title";
import Nav from "@/components/nav";
import AboutUs from "@/components/home/about-us";
import Organizers from "@/components/home/organizers";
import Sponsors from "@/components/home/sponsors";
import Events from "@/components/home/events";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav currentPath={"/"} />
      <main className="container flex min-h-screen flex-col items-start justify-between bg-background font-helvetica">
        <section id={"title"} className={"flex h-screen w-full flex-col"}>
          <Title />
        </section>
        <section
          id={"about-us"}
          className={"flex min-h-screen w-full flex-col pt-24"}
        >
          <AboutUs />
        </section>
        <section
          id={"organizers"}
          className={"flex min-h-screen w-full flex-col pt-24"}
        >
          <Organizers />
        </section>
        <section
          id={"sponsors"}
          className={"flex min-h-screen w-full flex-col pt-24"}
        >
          <Sponsors />
        </section>
        <section
          id={"events"}
          className={"flex min-h-screen w-full flex-col pt-24"}
        >
          <Events />
        </section>
      </main>
      <Footer />
    </>
  );
}
