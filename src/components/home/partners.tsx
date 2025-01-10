import { ArrowUpRight } from "lucide-react";
import Seperator from "@/components/home/seperator";
import Image from "next/image";
import LinkScapeLogo from "@/../public/logos/linkscape.svg";
import SparkLabLogo from "@/../public/logos/sparklab.svg";
import HackClubLogo from "@/../public/logos/hackclub.svg";
import Link from "next/link";

export default function Partners() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-1 flex-col items-center justify-start py-8 text-text"
      }
    >
      <Seperator title={"Sponsors"} number={"02"} />

      <div
        className={
          "flex h-full w-full flex-1 flex-col justify-center gap-6 sm:gap-12"
        }
      >
        <Link
          href={"https://linkscape.app/"}
          className={
            "group flex flex-row items-center justify-between underline-offset-8 transition hover:underline"
          }
        >
          <h3
            className={
              "text-4xl font-bold uppercase leading-none sm:text-7xl lg:text-9xl"
            }
          >
            LinkScape
          </h3>
          <div className={"flex flex-row items-center"}>
            <div className={"hidden overflow-hidden sm:block"}>
              <Image
                src={LinkScapeLogo}
                alt={"LinkScape"}
                className={
                  "h-28 w-28 translate-x-full opacity-0 transition-all group-hover:w-28 group-hover:translate-x-0 group-hover:opacity-100"
                }
              />
            </div>

            <ArrowUpRight
              className={
                "h-14 w-14 flex-shrink-0 transition group-hover:rotate-45 sm:h-28 sm:w-28 lg:h-40 lg:w-40"
              }
            />
          </div>
        </Link>
      </div>

      <div
        className={
          "flex h-full w-full flex-1 flex-col justify-center gap-6 sm:gap-12"
        }
      >
        <Link
          href={"https://hackclub.com/"}
          className={
            "group flex flex-row items-center justify-between underline-offset-8 transition hover:underline"
          }
        >
          <h3
            className={
              "text-4xl font-bold uppercase leading-none sm:text-7xl lg:text-9xl"
            }
          >
            Hack Club
          </h3>
          <div className={"flex flex-row items-center"}>
            <div className={"hidden overflow-hidden sm:block"}>
              <Image
                src={HackClubLogo}
                alt={"Hack Club"}
                className={
                  "h-28 w-28 translate-x-full opacity-0 transition-all group-hover:w-28 group-hover:translate-x-0 group-hover:opacity-100"
                }
              />
            </div>

            <ArrowUpRight
              className={
                "h-14 w-14 flex-shrink-0 transition group-hover:rotate-45 sm:h-28 sm:w-28 lg:h-40 lg:w-40"
              }
            />
          </div>
        </Link>

        <Link
          href={"https://sparklab.city/"}
          className={
            "group flex flex-row items-center justify-between underline-offset-8 transition hover:underline"
          }
        >
          <h3
            className={
              "text-4xl font-bold uppercase leading-none sm:text-7xl lg:text-9xl"
            }
          >
            Spark Lab
          </h3>
          <div className={"flex flex-row items-center"}>
            <div className={"hidden overflow-hidden sm:block"}>
              <Image
                src={SparkLabLogo}
                alt={"Spark Lab"}
                className={
                  "h-28 w-28 translate-x-full opacity-0 transition-all group-hover:w-28 group-hover:translate-x-0 group-hover:opacity-100"
                }
              />
            </div>

            <ArrowUpRight
              className={
                "h-14 w-14 flex-shrink-0 transition group-hover:rotate-45 sm:h-28 sm:w-28 lg:h-40 lg:w-40"
              }
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
