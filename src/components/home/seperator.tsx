export default function Seperator(
  { title, number }: { title: string; number: string },
) {
  return (
    <div
      className={"flex w-full flex-shrink-0 flex-row justify-between text-xl"}
    >
      <h2 className={"uppercase"}>{title}</h2>
      <div className={"flex flex-row items-center gap-6"}>
        <hr className="h-px w-24 border border-text" />
        <span>{number}</span>
      </div>
    </div>
  );
}
