import shHacksFooter from "@/../public/sh-hacks-footer.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className={
        "container flex w-full flex-col justify-center gap-4 py-8 font-helvetica text-sm sm:text-lg"
      }
    >
      <Image
        src={shHacksFooter}
        alt={"sh-hacks-footer"}
        className={"pointer-events-none w-full select-none"}
      />
      <div className={"flex flex-row items-center justify-between"}>
        <div className={"flex flex-row items-center gap-4"}>
          <span>© {new Date().getFullYear()} SH Hacks.</span>
          <span className={"hidden sm:block"}>All rights reserved.</span>
        </div>
        <div
          className={
            "flex flex-row items-center gap-1 uppercase underline-offset-2 hover:underline"
          }
        >
          <Link href={"mailto:thomaswcy@hotmail.com"}>Contact</Link>
          <ArrowUpRight className={"h-6 w-6"} />
        </div>
      </div>
    </footer>
  );
}
