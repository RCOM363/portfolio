"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    return (
      <div>
        <MoonIcon size={25} />
      </div>
    );
  }

  return (
    <div onClick={toggleTheme}>
      {theme === "dark" ? <MoonIcon size={25} /> : <SunIcon size={25} />}
    </div>
  );
}

export default ThemeToggle;
