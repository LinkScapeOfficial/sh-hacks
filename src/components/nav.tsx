import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Nav({ currentPath }: { currentPath?: string }) {
  return (
    <nav
      className="fixed z-50 w-screen bg-background/20 pr-3 backdrop-blur"
      role="navigation"
    >
      <div
        className={
          "container flex h-24 w-screen items-center justify-between font-helvetica text-base uppercase sm:text-xl"
        }
      >
        <Link href={"/"} className="">
          Home
          <span className={"text-text-300"}>
            {currentPath === "/" ? "" : currentPath}
          </span>
        </Link>
        <Link
          href={"/events"}
          className={"group flex flex-row items-center gap-3"}
        >
          Latest Events{" "}
          <ArrowRightCircle
            className={"h-5 w-5 transition group-hover:-rotate-45"}
          />
        </Link>
      </div>
    </nav>
  );
}
