import { ArrowRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Seperator from "@/components/home/seperator";

const organizers = [
  {
    name: "Thomas Wu",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "Jett Chen",
    role: "Co-Founder",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "Zigao Wang",
    role: "Co-Founder",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "Lily Ding",
    role: "Co-Founder",
    image: "https://via.placeholder.com/800x1000",
  },
];

export default function Organizers() {
  return (
    <div
      className={
        "relative flex h-full w-full flex-col items-center justify-start py-8 text-text"
      }
    >
      <Seperator title={"Organizers"} number={"01"} />

      <div
        className={
          "grid h-full w-full flex-1 grid-cols-2 flex-row gap-x-2 md:flex md:gap-6"
        }
      >
        {organizers.map((organizer, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex h-fit w-full flex-col items-center justify-between gap-4 py-8 md:w-1/4",
                index === 0 && "md:mt-16",
                index === 1 && "md:mt-48",
                index === 2 && "md:mt-0",
                index === 3 && "md:mt-32",
              )}
            >
              <div
                className={"w-full overflow-hidden rounded-3xl object-cover"}
              >
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className={"h-full w-full object-cover object-center"}
                />
              </div>
              <div
                className={
                  "flex w-full flex-row items-center justify-between px-2 sm:px-4"
                }
              >
                <div className={"flex flex-col gap-2"}>
                  <span
                    className={"text-base font-bold leading-none sm:text-xl"}
                  >
                    {organizer.name}
                  </span>
                  <span
                    className={"text-sm uppercase leading-none sm:text-base"}
                  >
                    {organizer.role}
                  </span>
                </div>
                <ArrowRightCircle
                  className={"h-8 w-8 -rotate-45 sm:h-10 sm:w-10"}
                  strokeWidth={1.4}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
