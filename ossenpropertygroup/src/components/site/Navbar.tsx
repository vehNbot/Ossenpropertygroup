"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const nav = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Investment Types",
    href: "/investment-types",
    submenu: [
      { label: "Rooming Houses", href: "/investment-types/rooming-houses" },
      { label: "House and Land Packages", href: "/investment-types/house-land-package" },
      { label: "Subdivision and Developments", href: "/portfolio?filter=in-progress" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Land & Build Packages", href: "/services/land-build" },
      { label: "Site Acquisition", href: "a" },
      { label: "Building Supervision", href: "" },
      { label: "Design Studio", href: "/services/design-studio" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [closeTimeoutId, setCloseTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">
          Ossen Property Group
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {nav.map((item, index) => (
                <NavigationMenuItem key={item.label} className="px-2">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (closeTimeoutId) {
                          clearTimeout(closeTimeoutId);
                          setCloseTimeoutId(null);
                        }
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => {
                        const id = setTimeout(() => {
                          setHoveredIndex((prev) => (prev === index ? null : prev));
                          setCloseTimeoutId(null);
                        }, 140);
                        setCloseTimeoutId(id);
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "px-3 py-2 text-sm rounded-md transition-colors",
                          pathname.startsWith(item.href)
                            ? "bg-secondary/20 text-foreground"
                            : "hover:bg-secondary/20"
                        )}
                      >
                        {item.label}
                      </Link>
                      <div
                        className={cn(
                          "absolute left-0 mt-2 min-w-48 rounded-md border bg-background p-2 shadow-md",
                          hoveredIndex === index ? "block" : "hidden"
                        )}
                        onMouseEnter={() => {
                          if (closeTimeoutId) {
                            clearTimeout(closeTimeoutId);
                            setCloseTimeoutId(null);
                          }
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          const id = setTimeout(() => {
                            setHoveredIndex((prev) => (prev === index ? null : prev));
                            setCloseTimeoutId(null);
                          }, 120);
                          setCloseTimeoutId(id);
                        }}
                      >
                        {item.submenu.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block rounded px-3 py-2 text-sm hover:bg-secondary/20"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm rounded-md transition-colors",
                        pathname === item.href ? "bg-secondary/20" : "hover:bg-secondary/20"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="secondary">
            <Link href="/#build-with-us">Build with us</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-2 mt-10">
                {nav.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-2 py-2 text-base font-medium"
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <div className="ml-2 border-l pl-3">
                        {item.submenu.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="mt-2">
                  <Link href="/#build-with-us" onClick={() => setOpen(false)}>
                    Build with us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


