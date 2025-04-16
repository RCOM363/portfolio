"use client";

import React from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 flex items-center justify-between px-2 lg:px-0 pt-4 backdrop-blur-[4px]">
      <div>
        <span className="text-xl lg:text-3xl font-extrabold">RCOM363</span>
      </div>
      <div className="flex items-center justify-end gap-2 font-semibold">
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/blogs"}>Blogs</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
