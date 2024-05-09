"use client"

import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTheme } from "next-themes"
import Link from "next/link"

import Container from "../Container"
import Cart from "../cart/Cart"
import { Button } from "../ui/button"

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky left-0 right-0 top-0 z-20 bg-white py-8 dark:bg-[#27282a]">
      <Container>
        <div className="flex w-full items-center justify-between">
          <div>
            <Link
              className="text-3xl font-bold text-primary"
              href="/"
            >
              Coursio
            </Link>
          </div>
          <div className="flex items-center">
            <Button
              className="px-3"
              variant={"ghost"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <FontAwesomeIcon
                className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                icon={faSun}
              />
              <FontAwesomeIcon
                className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                icon={faMoon}
              />
            </Button>
            <Button
              className="px-3"
              variant={"ghost"}
              asChild
            >
              <Link
                className="flex items-center"
                href="/profile"
              >
                <FontAwesomeIcon
                  className="h-5 w-5"
                  icon={faUser}
                />
              </Link>
            </Button>
            <Cart />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
