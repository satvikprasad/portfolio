"use client";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type VerticalDropdownButtonProps = {
  title: string;
} & React.PropsWithChildren;

export default function VerticalDropdownButton({
  title,
  children,
}: VerticalDropdownButtonProps) {
  const [dropped, setDropped] = useState(true);

  return (
    <div className="flex flex-row items-center ml-auto mr-auto">
      <button
        className="hover:text-purple-400 hover:cursor-pointer"
        onClick={() => {
          setDropped(!dropped);
        }}
      >
        {title}
      </button>

      <ChevronRightIcon
        className={`transition-all hidden md:block min-h-7 min-w-7 h-7 ${dropped ? "rotate-180" : ""}`}
      />
      <ChevronDownIcon
        className={`transition-all block md:hidden min-h-7 min-w-7 h-7 ${dropped ? "rotate-180" : ""}`}
      />
      <div
        className={`hidden md:flex flex-row gap-3 overflow-hidden duration-500 transition-all ${dropped ? "" : "md:hidden"}`}
      >
        {children}
      </div>

      <div
        className={`${dropped ? "absolute" : "hidden"} md:hidden flex flex-col top-24 left-3 right-3 bg-white p-5 border-2 border-slate-400/40 gap-1 rounded-2xl`}
      >
        {children}
      </div>
    </div>
  );
}
