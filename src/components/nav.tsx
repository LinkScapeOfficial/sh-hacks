import { ArrowRightCircle } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed z-50 w-screen" role="navigation">
      <div
        className={
          "font-helvetica container flex h-24 w-full items-center justify-between text-xl uppercase"
        }
      >
        <div className="">Menu</div>
        <div className={"flex flex-row items-center gap-3"}>
          JOIN US <ArrowRightCircle className={"h-5 w-5"} />
        </div>
      </div>
    </nav>
  );
}
