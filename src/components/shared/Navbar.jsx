import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-amber-500 text-white py-4 shadow-md font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl">
          MyApp
        </a>
        <div className="space-x-6">
          <Link href="/Home">Home</Link>
          <Link href="/Home">Contact</Link>
          <Link href="/Home">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
