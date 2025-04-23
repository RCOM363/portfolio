"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonIcon } from "./ui/moon";
import { SunIcon } from "./ui/sun";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (
        <MoonIcon size={25} />
      ) : (
        <SunIcon size={25} />
      )}
    </div>
  );
}

export default ThemeToggle;
