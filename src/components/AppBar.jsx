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
      <nav className="fixed top-0 z-20 h-16 w-screen bg-white shadow-md">
        {/**the main nav bar */}
        <div className="m-auto flex h-full items-center justify-between px-3 lg:w-5/6">
          {/**the inner nav bar */}
          <Logo />
          <ul className="hidden md:flex">
            {/**the list of links */}

            {mainlinks.map((link) => {
              //loop through link list and return link
              return (
                <li className=" p-3 font-quicksand text-lg" key={link.id}>
                  <Link to={link.url} onClick={closeSidebar}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center justify-center">
            <Button
              linkpath="/signup"
              buttonStyle="btn-calltoaction btn-small"
              className={"m-2 hidden h-full text-center md:block"}
            >
              Sign Up
              <FiLogIn className="ml-1 text-lg sm:ml-2 md:text-xl" />
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
        className={`fixed top-0 z-30 flex h-screen w-full flex-col bg-white px-3 transition-all duration-300 ease-out ${
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
              <li
                className="w-full rounded-lg bg-white px-3 py-2 text-xl hover:bg-slate-200"
                key={link.id}
              >
                <Link to={link.url} onClick={closeSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <Button
          linkpath="/signup"
          buttonStyle="btn-primary text-lg btn-small"
          className={"my-3 text-center "}
        >
          Sign Up
          <FiLogIn className="ml-1 text-lg sm:ml-2 md:text-xl" />
        </Button>
      </div>
    </>
  )
}
