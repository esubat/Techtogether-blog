"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Button } from "./ui/button";
import { MainNav } from "./MainNav";
import SearchField from "./SearchField";

export function SiteHeader() {
  const pathname = usePathname()
  return (
   <div>
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <MainNav />
    {
    pathname != "/auth/login" && (
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">            
          </nav>
          <SearchField />
            <Link
            href = "auth/login"
            >
              <Button variant="ghost" className="w-100">Login</Button>
            </Link>
        </div>
          )}
      </div>
    </header>
    </div>
  );
}
