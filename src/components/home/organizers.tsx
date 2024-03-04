import { ArrowRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Seperator from "@/components/home/seperator";

const organizers = [
  {
    name: "John Doe",
    role: "owner",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "John Smith",
    role: "CFO",
    image: "https://via.placeholder.com/800x1000",
  },
  {
    name: "Jane Smith",
    role: "IT",
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

      <div className={"flex h-full w-full flex-1 flex-row gap-6"}>
        {organizers.map((organizer, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex h-fit w-1/4 flex-col items-center justify-between gap-4 py-8",
                index === 0 && "mt-16",
                index === 1 && "mt-48",
                index === 2 && "mt-0",
                index === 3 && "mt-32",
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
                  "flex w-full flex-row items-center justify-between px-4"
                }
              >
                <div className={"flex flex-col gap-2"}>
                  <span className={"text-xl font-bold leading-none"}>
                    {organizer.name}
                  </span>
                  <span className={"uppercase leading-none"}>
                    {organizer.role}
                  </span>
                </div>
                <ArrowRightCircle
                  className={"h-10 w-10 -rotate-45"}
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
