"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { MoonIcon } from "./ui/moon";
import { SunIcon } from "./ui/sun";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon"></Button>;
  }

  return (
    <div onClick={toggleTheme} className="w-[15%]">
      {theme === "dark" ? (
        <MoonIcon className="w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </div>
  );
}

export default ThemeToggle;
