import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Seperator from "@/components/home/seperator";
import Image from "next/image";
import hackclubLogo from "@/../public/logos/hackclub.svg";
import linkscapeLogo from "@/../public/logos/linkscape.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Events() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-1 flex-col items-center justify-start py-8 text-text"
      }
    >
      <Seperator title={"Latest Events"} number={"03"} />

      <div
        className={"flex h-full w-full flex-1 flex-col justify-center gap-12"}
      >
        <div className={"flex flex-col gap-2 sm:flex-row"}>
          <Badge
            className={
              "flex w-fit flex-row items-center gap-2 rounded-full border border-accent bg-background px-3  py-1.5 shadow-accent-200/50 hover:bg-accent-100"
            }
          >
            <Clock className={"h-4 w-4 text-indigo-600"} />
            <span
              className={
                "bg-gradient-to-br from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
              }
            >
              2024/04/13 - 2024/04/14
            </span>
          </Badge>
          <Badge
            className={
              "flex w-fit flex-row items-center gap-2 rounded-full border border-yellow-500 bg-background px-3  py-1.5 shadow-yellow-200/50 hover:bg-yellow-100"
            }
          >
            <MapPin className={"h-4 w-4 text-amber-500"} />
            <span
              className={
                "bg-gradient-to-br from-amber-500 to-yellow-500 bg-clip-text text-transparent"
              }
            >
              上海市浦东新区碧波路690号
            </span>
          </Badge>
        </div>

        <h2
          className={
            "bg-gradient-to-br from-indigo-500 to-cyan-500 bg-clip-text text-5xl font-bold uppercase leading-[0.9] tracking-tight text-transparent sm:text-7xl lg:text-9xl"
          }
        >
          SH HACKS
          <br />
          2024
        </h2>
        {/*<p className={"text-text-600"}>*/}
        {/*  <div>*/}
        {/*    To join SH Hacks 2024, you must*/}
        {/*    <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>*/}
        {/*      <li className={"flex flex-row items-center gap-1"}>*/}
        {/*        <CheckCircle2 className={"h-5 w-5 text-green-500"} />*/}
        {/*        <span>be a high school student (双语/国际学校）</span>*/}
        {/*      </li>*/}
        {/*      <li className={"flex flex-row items-center gap-1"}>*/}
        {/*        <CheckCircle2 className={"h-5 w-5 text-green-500"} />*/}
        {/*        <span>reside in Shanghai</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*  <div className={"mt-2"}>*/}
        {/*    Our specific timetable is:*/}
        {/*    <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>*/}
        {/*      <li className={"flex flex-row items-center gap-1"}>*/}
        {/*        <Clock className={"h-5 w-5"} />*/}
        {/*        <span>Day 1 (4/13): 09:00 - 20:00</span>*/}
        {/*      </li>*/}
        {/*      <li className={"flex flex-row items-center gap-1"}>*/}
        {/*        <Clock className={"h-5 w-5"} />*/}
        {/*        <span>Day 2 (4/14): 09:00 - 15:30</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*  <div className={"mt-2"}>*/}
        {/*    The registration fee will be 300 RMB per person.*/}
        {/*  </div>*/}
        {/*</p>*/}
        <Button
          className={
            "group w-full self-center rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 py-8 pl-10 pr-8 text-xl uppercase text-white shadow-md transition hover:shadow-xl sm:w-fit sm:self-auto sm:py-10 sm:pl-12 sm:pr-10 sm:text-3xl"
          }
          asChild
        >
          <Link href={"/events"}>
            <span>Register</span>
            <ArrowRight
              className={"ml-4 h-10 w-10 transition group-hover:translate-x-1"}
            />
          </Link>
        </Button>
      </div>
    </div>
  );
}
