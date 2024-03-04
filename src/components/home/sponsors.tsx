import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Seperator from "@/components/home/seperator";
import Image from "next/image";
import hackclubLogo from "@/../public/logos/hackclub.svg";
import linkscapeLogo from "@/../public/logos/linkscape.svg";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-1 flex-col items-center justify-start py-8 text-text"
      }
    >
      <Seperator title={"Sponsors"} number={"02"} />

      <div
        className={"flex h-full w-full flex-1 flex-col justify-center gap-12"}
      >
        <Link
          href={"https://dubbingai.io/"}
          className={
            "group flex flex-row items-center justify-between underline-offset-8 transition hover:underline"
          }
        >
          <h3 className={"text-9xl font-bold uppercase leading-none"}>
            Dubbing AI
          </h3>
          <div className={"flex flex-row items-center"}>
            <ArrowUpRight
              className={"h-40 w-40 transition group-hover:rotate-45"}
            />
            {/*<Image*/}
            {/*  src={hackclubLogo}*/}
            {/*  alt={"hackclub"}*/}
            {/*  className={"h-28 w-28"}*/}
            {/*/>*/}
          </div>
        </Link>
        <Link
          href={"https://linkscape.app"}
          className={
            "group flex flex-row items-center justify-between underline-offset-8 transition hover:underline"
          }
        >
          <h3 className={"text-9xl font-bold uppercase leading-none"}>
            LinkScape
          </h3>
          <div className={"flex flex-row items-center"}>
            <div className={"overflow-hidden"}>
              <Image
                src={linkscapeLogo}
                alt={"linkscape"}
                className={
                  "h-28 w-28 translate-x-full opacity-0 transition-all group-hover:w-28 group-hover:translate-x-0 group-hover:opacity-100"
                }
              />
            </div>

            <ArrowUpRight
              className={"h-40 w-40 transition group-hover:rotate-45"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
