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

export default function Event() {
  return (
    <main className="container flex min-h-screen flex-col items-start justify-between bg-background pt-24 font-helvetica">
      <div
        className={
          "relative flex h-full w-full flex-1 flex-col items-center justify-start py-8 text-text"
        }
      >
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
                2025/03/29 - 2025/03/30
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
                上海市徐汇区桂果路607号漕河泾开发区公园
              </span>
            </Badge>
          </div>

          <h2
            className={
              "bg-gradient-to-br from-indigo-500 to-cyan-500 bg-clip-text text-5xl font-bold uppercase tracking-tight text-transparent sm:text-7xl lg:text-9xl lg:leading-[0.9]"
            }
          >
            SH HACKS
            <br />
            2025
          </h2>
          <div
            className={
              "grid grid-cols-1 gap-8 text-text-600 sm:grid-cols-3 sm:gap-0"
            }
          >
            <div>
              <h2 className={"text-xl font-bold text-text-800 sm:text-2xl"}>
                Requirements
              </h2>
              <p className={"mt-2 text-text-600"}>
                To join SH Hacks 2025, you must
              </p>
              <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>
                <li className={"flex flex-row items-center gap-1"}>
                  <CheckCircle2 className={"h-5 w-5 text-green-500"} />
                  <span>Be a Middle School / High School Student</span>
                </li>
                <li className={"flex flex-row items-center gap-1"}>
                  <CheckCircle2 className={"h-5 w-5 text-green-500"} />
                  <span>Reside in Shanghai</span>
                </li>
              </ul>
            </div>
            <div className={""}>
              <h2 className={"text-xl font-bold text-text-800 sm:text-2xl"}>
                Timetable
              </h2>
              <p className={"mt-2 text-text-600"}>Timetable:</p>
              <ul className={"mt-2 flex flex-col gap-[2px] leading-none"}>
                <li className={"flex flex-row items-center gap-1"}>
                  <Clock className={"h-5 w-5"} />
                  <span>Day 1 (3/29): 09:00 - 20:00</span>
                </li>
                <li className={"flex flex-row items-center gap-1"}>
                  <Clock className={"h-5 w-5"} />
                  <span>Day 2 (3/30): 09:00 - 15:30</span>
                </li>
              </ul>
            </div>
            <div className={""}>
              <h2 className={"text-xl font-bold text-text-800 sm:text-2xl"}>
                Fees
              </h2>
              <p className={"mt-2 text-text-600"}>
                The registration fee will be 300 RMB per person.
              </p>
            </div>
          </div>
          <Link
            className={
              "group flex flex-row text-xl font-bold text-text-600 underline transition sm:text-2xl"
            }
            href={"/files/SH-Hacks-2025-Proposal-(Bilingual).pdf"}
          >
            <span>Read detailed proposal</span>
            <ChevronRight
              className={"ml-2 h-8 w-8 transition group-hover:translate-x-1"}
              strokeWidth={2.5}
            />
          </Link>
          <Button
            className={
              "group w-full self-center rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 py-8 pl-10 pr-8 text-xl uppercase text-white shadow-md transition hover:shadow-xl sm:w-fit sm:self-auto sm:py-10 sm:pl-12 sm:pr-10 sm:text-3xl"
            }
            asChild
          >
            <Link href={"https://forms.microsoft.com/r/X3pnAV2k4P"}>
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
  );
}
