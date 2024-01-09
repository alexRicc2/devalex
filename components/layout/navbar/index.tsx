"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Container from "../Container";
import useScrollDirection from "@/utils/scroll";
import CustomLink from "@/components/ui/Link";
import cn from 'clsx'
function NavBar() {

  const scrollDirection = useScrollDirection()

  const rootClass = cn(
    "top-0 sticky z-[9999] opacity-100 bg-[#17171799] backdrop-blur",
    {
      ['animate-hideElement']: scrollDirection === 'down',
      ['animate-showElement']: scrollDirection === 'up'
    }
  )

  return (
    <div className={rootClass}>
      <Container className="p-4">
        <nav className="relative flex items-center justify-between">
          <div className="block flex-none md:hidden">
            <MobileMenu />
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-full md:w-1/3">
              <Link href="/" className="mr-2 flex w-full items-center justify-end md:justify-center md:w-auto lg:mr-6">
                <h1 className="flex-none text-sm uppercase font-bold">
                  AlexDev
                </h1>
              </Link>

            </div>
            <div className="hidden justify-center md:flex md:w-1/3">
              <ul className="hidden gap-6 text-base md:flex md:items-center">
                <li>
                  <Link href="/" className="underline-offset-4 hover:text-neutral-300 hover:underline text-neutral-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="underline-offset-4 hover:text-neutral-300 hover:underline text-neutral-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/" className="underline-offset-4 hover:text-neutral-300 hover:underline text-neutral-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-end md:w-1/3">
              <CustomLink href="/" variant="outline" className="hidden md:block">
                Contact-me
              </CustomLink>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default NavBar