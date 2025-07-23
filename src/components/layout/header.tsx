"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/why-sei", label: "Why SEI" },
  { href: "/courses", label: "Our Courses" },
  { href: "/online-classes", label: "Online Classes" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/results", label: "Results" },
  { href: "/syllabus-notes", label: "Syllabus &amp; Notes" },
  { href: "/directory", label: "Directory" },
  { href: "/calendar", label: "Calendar" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden font-headline text-xl font-bold sm:inline-block">
            Shailja Educational Institute
          </span>
          <span className="font-headline text-xl font-bold sm:hidden">SEI</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/register">
            <Button>Register Now</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl font-bold">SEI</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-1 flex-col gap-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-muted",
                        pathname === item.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link href="/register" onClick={() => setIsOpen(false)} className="mt-auto">
                    <Button className="w-full" size="lg">Register Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
