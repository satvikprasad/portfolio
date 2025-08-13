"use client";

import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Theme = "light" | "dark";

type ColorschemeToggleProps = {
  initialValue: Theme;
};

export default function ColorschemeToggle({
  initialValue,
}: ColorschemeToggleProps) {
  const [theme, setTheme] = useState(initialValue);

  return (
    <button
      type="button"
      className="hover:cursor-pointer hover:text-purple-400"
      onClick={() => {
        setTheme(theme == "dark" ? "light" : "dark");

        document.cookie = `theme=${theme};path=/;`;
        document.querySelector("html")?.setAttribute("data-theme", theme);
      }}
    >
      {theme == "dark" ? (
        <MoonIcon className="h-5" />
      ) : (
        <SunIcon className="h-5" />
      )}
    </button>
  );
}
