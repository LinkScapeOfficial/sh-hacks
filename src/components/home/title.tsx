import cross from "../../../public/deco/cross.svg";
import Image from "next/image";
import Link from "next/link";

// const homeLinks = ["Hackathon", "Organizers", "Sponsors", "Events"];

const homeLinks = [
  {
    name: "Hackathon",
    href: "#about-us",
  },
  {
    name: "Organizers",
    href: "#organizers",
  },
  {
    name: "Sponsors",
    href: "#sponsors",
  },
  {
    name: "Events",
    href: "#events",
  },
];

export default function Title() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-col items-center justify-center text-text"
      }
    >
      <div className={"flex w-full flex-row items-center justify-between"}>
        <Image
          src={cross}
          alt={"cross"}
          className={"hidden h-12 w-12 md:block"}
        />
        <CenterTitle />
        <Image
          src={cross}
          alt={"cross"}
          className={"hidden h-12 w-12 md:block"}
        />
      </div>
      <div className={"absolute bottom-8 mt-auto w-full"}>
        <ul className={"flex w-full flex-row justify-between text-lg"}>
          {homeLinks.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={"cursor-pointer hover:underline"}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const CenterTitle = () => {
  return (
    <div
      className={
        "flex select-none flex-col text-[120px] uppercase leading-[0.8]"
      }
    >
      <h2 className={"font-helvetica font-bold tracking-tight text-text-200"}>
        SH Hacks
      </h2>
      <h2 className={"font-helvetica font-bold tracking-tight text-text-200"}>
        SH Hacks
      </h2>
      <h1 className={"font-helvetica font-bold tracking-tight"}>SH Hacks</h1>
      <h2 className={"font-helvetica font-bold tracking-tight text-text-200"}>
        SH Hacks
      </h2>
      <h2 className={"font-helvetica font-bold tracking-tight text-text-200"}>
        SH Hacks
      </h2>
    </div>
  );
};
