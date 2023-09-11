import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Container from "../Container";
export default function NavBar() {
  return (
    <Container>

      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <MobileMenu />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
              <h1 className="flex-none text-sm font-medium uppercase">
                AlexDev
              </h1>
            </Link>

          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
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
            <Link href="/">
              Contact-me
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}