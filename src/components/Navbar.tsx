import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between mt-5">
      <div>
        <span className="text-3xl font-extrabold">RCOM363</span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <button>toggle</button>
      </div>
    </nav>
  );
}

export default Navbar;
