"use client";
import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "../ui/DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-6 shadow bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-blue-600">YourBrand</h1>

      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>

      <div className="flex gap-3">
        <DarkModeToggle />
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black p-6 flex flex-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}