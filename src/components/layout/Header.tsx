"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Technology", href: "/#products" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "Products", href: "/#modular-configurations" },
  { name: "Newsroom", href: "/newsroom" },
];

const hamburgerMenu = [
  { name: "For Customers", href: "/customer", color: "text-blue-400" },
  { name: "For Investors", href: "/invest", color: "text-cyan-400" },
  { name: "Newsroom", href: "/newsroom", color: "text-purple-400" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <nav className={`mx-auto flex max-w-7xl items-center justify-between lg:px-8 transition-all duration-300 ${
        isScrolled ? 'px-4 sm:px-6 py-2 sm:py-3' : 'px-4 sm:px-6 py-4 sm:py-6'
      }`} aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <Image
              src="/media/images/airpowerlogo2.png"
              alt="AirPower USA Logo"
              width={540}
              height={180}
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-12 sm:h-14 lg:h-16' : 'h-16 sm:h-20 lg:h-24'
              }`}
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 250px, 300px"
              priority
              loading="eager"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                isScrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="ghost"
            size="sm"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
              isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/90 hover:text-white'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </nav>
      
      {/* Hamburger menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-24 right-6 bg-black/90 backdrop-blur-md rounded-xl p-6 min-w-48">
            <div className="space-y-4">
              {hamburgerMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block text-lg font-semibold leading-7 transition-colors hover:opacity-80 ${item.color}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="border-t border-white/20 my-4"></div>
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="https://linkedin.com/company/airpowerusa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/airpowerusa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 