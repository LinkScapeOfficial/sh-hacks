import Title from "@/components/home/title";
import Nav from "@/components/nav";
import AboutUs from "@/components/home/about-us";
import Organizers from "@/components/home/organizers";
import Partners from "@/components/home/partners";
import Events from "@/app/events/page";

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
          className={"flex min-h-screen w-full flex-col pt-16 sm:pt-24"}
        >
          <AboutUs />
        </section>
        <section
          id={"organizers"}
          className={"flex min-h-screen w-full flex-col pt-16 sm:pt-24"}
        >
          <Organizers />
        </section>
        <section
          id={"sponsors"}
          className={"flex min-h-screen w-full flex-col pt-16 sm:pt-24"}
        >
          <Partners />
        </section>
        <section
          id={"events"}
          className={"-mt-72 flex min-h-screen w-full flex-col pt-16 sm:pt-24"}
        >
          <Events />
        </section>
      </main>
    </>
  );
}
