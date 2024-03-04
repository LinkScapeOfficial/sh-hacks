import Image from "next/image";
import featureImg from "../../../public/feature.jpg";

export default function AboutUs() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-col items-center justify-start py-8 text-text"
      }
    >
      <div
        className={
          "flex h-48 w-full flex-shrink-0 flex-row items-center justify-between overflow-hidden rounded-3xl"
        }
      >
        <Image
          src={featureImg}
          alt={"feature"}
          className={"h-full w-full object-cover object-center"}
        />
      </div>
      <div
        className={
          "flex h-full flex-col items-center justify-between gap-10 pt-16"
        }
      >
        <div className={"flex flex-col items-center"}>
          <h2 className={"text-xl uppercase leading-none"}>About</h2>
          <h2
            className={"text-center text-2xl font-bold uppercase leading-none"}
          >
            SH hacks
          </h2>
        </div>
        <div className={"px-12 text-center"}>
          <span className={"text-7xl font-bold tracking-tight"}>
            A social coding marathon where teenagers come together to build
            projects for a weekend and share them with the world.
          </span>
        </div>
        <div className={"mt-4"}>
          <span className={"uppercase"}>
            A place to build things for fun and meet others doing the same.
          </span>
        </div>
      </div>
    </div>
  );
}
