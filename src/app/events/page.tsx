import Nav from "@/components/nav";

import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav currentPath={"/events"} />
      <main className="container flex min-h-screen flex-col items-start justify-between bg-background pt-12 font-helvetica">
        <div
          className={
            "relative flex h-full w-full flex-1 flex-col items-center justify-start py-8 text-text"
          }
        >
          <div
            className={
              "flex h-full w-full flex-1 flex-col justify-center gap-12"
            }
          >
            <div className={"flex flex-row gap-2"}>
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
                "bg-gradient-to-br from-indigo-500 to-cyan-500 bg-clip-text text-9xl font-bold uppercase leading-[0.9] text-transparent"
              }
            >
              SH HACKS
              <br />
              2024
            </h2>
            <div className={"grid grid-cols-3 text-text-600 "}>
              <div>
                <h2 className={"text-2xl font-bold text-text-800"}>
                  Requirements
                </h2>
                <p className={"mt-2 text-text-600"}>
                  To join SH Hacks 2024, you must
                </p>
                <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>
                  <li className={"flex flex-row items-center gap-1"}>
                    <CheckCircle2 className={"h-5 w-5 text-green-500"} />
                    <span>be a high school student (双语/国际学校）</span>
                  </li>
                  <li className={"flex flex-row items-center gap-1"}>
                    <CheckCircle2 className={"h-5 w-5 text-green-500"} />
                    <span>reside in Shanghai</span>
                  </li>
                </ul>
              </div>
              <div className={""}>
                <h2 className={"text-2xl font-bold text-text-800"}>
                  Timetable
                </h2>
                <p className={"mt-2 text-text-600"}>
                  Our specific timetable is:
                </p>
                <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>
                  <li className={"flex flex-row items-center gap-1"}>
                    <Clock className={"h-5 w-5"} />
                    <span>Day 1 (4/13): 09:00 - 20:00</span>
                  </li>
                  <li className={"flex flex-row items-center gap-1"}>
                    <Clock className={"h-5 w-5"} />
                    <span>Day 2 (4/14): 09:00 - 15:30</span>
                  </li>
                </ul>
              </div>
              <div className={""}>
                <h2 className={"text-2xl font-bold text-text-800"}>Fees</h2>
                <p className={"mt-2 text-text-600"}>
                  The registration fee will be 300 RMB per person.
                </p>
              </div>
            </div>
            <Link
              className={
                "group flex flex-row text-2xl font-bold text-text-600 underline transition"
              }
              href={"/files/SH-Hacks-2024-Proposal-(Bilingual).pdf"}
            >
              <span>Read detailed proposal</span>
              <ChevronRight
                className={"ml-2 h-8 w-8 transition group-hover:translate-x-1"}
                strokeWidth={2.5}
              />
            </Link>
            <Button
              className={
                "group w-fit rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 py-10 pl-12 pr-10 text-3xl uppercase text-white shadow-md transition hover:shadow-xl"
              }
              asChild
            >
              <Link href={"https://forms.microsoft.com/r/e0tZrnqCzf"}>
                <span>Register</span>
                <ArrowRight
                  className={
                    "ml-4 h-10 w-10 transition group-hover:translate-x-1"
                  }
                />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
