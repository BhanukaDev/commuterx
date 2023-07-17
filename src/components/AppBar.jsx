import { Logo } from "./Logo"
import { FaBars, FaArrowRight } from "react-icons/fa6"
import { FiLogIn } from "react-icons/fi"
import { Button } from "./Button"
import { mainlinks } from "../links"
import { Link } from "react-router-dom"
import { useState } from "react"

export const AppBar = () => {
  const [show, setShow] = useState(false)

  const handleMenuClick = () => {
    setShow(true)
  }

  const closeSidebar = () => {
    setShow(false)
  }

  return (
    <>
      <nav className="fixed top-0 z-20 h-16 w-screen bg-white">
        {/**the main nav bar */}
        <div className="m-auto flex h-full items-center justify-between px-3 md:w-4/5">
          {/**the inner nav bar */}
          <Logo />
          <ul className="hidden md:flex">
            {/**the list of links */}

            {mainlinks.map((link) => {
              //loop through link list and return link
              return (
                <li className="w-full p-3 text-lg" key={link.id}>
                  <Link to={link.url} onClick={closeSidebar}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center justify-center">
            {/**the login button and menu icon(only on mobile) */}

            <Button
              linkpath="/login"
              buttonStyle="btn-calltoaction"
              className={"m-2 h-full text-center"}
            >
              Login
              <FiLogIn className="ml-2 text-xl" />
            </Button>

            <FaBars
              className="cursor-pointer text-3xl md:hidden"
              onClick={handleMenuClick}
            />
          </div>
        </div>
      </nav>

      {/**the sidebar*/}
      <div
        className={`fixed top-0 z-30 flex h-screen w-screen flex-col bg-white px-3 transition-all duration-300 ease-out ${
          show ? "right-0" : "right-[-500%]"
        }`}
      >
        {/**the sidebar header*/}
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <FaArrowRight
            className="cursor-pointer text-3xl"
            onClick={closeSidebar}
          />
        </div>
        {/**the sidebar links*/}
        <ul>
          {mainlinks.map((link) => {
            return (
              //loop through link list and return link
              <li className="w-full p-1 text-xl" key={link.id}>
                <Link to={link.url} onClick={closeSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
