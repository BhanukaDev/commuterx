import { Logo } from "./Logo";
import { FaBars, FaArrowRight } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { Button } from "./Button";
import { mainlinks } from "../links";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AppBar = () => {
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    setShow(true);
  };

  const closeSidebar = () => {
    setShow(false);
  };

  return (
    <>
      <nav className="w-screen h-16 fixed bg-white z-20">
        {/**the main nav bar */}
        <div className="m-auto h-full flex justify-between items-center px-3 md:w-4/5">
          {/**the inner nav bar */}
          <Logo />
          <ul className="hidden md:flex">
            {/**the list of links */}

            {mainlinks.map((link) => {
              //loop through link list and return link
              return (
                <li className="w-full text-lg p-3" key={link.id}>
                  <Link to={link.url} onClick={closeSidebar}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center">
            {/**the login button and menu icon(only on mobile) */}

            <Button
              linkpath="/signup"
              buttonStyle="btn-calltoaction"
              className={"h-full text-center m-2"}
            >
              Sign Up
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
        className={`h-screen w-screen fixed px-3 z-30 bg-white flex flex-col transition-all duration-300 ease-out ${
          show ? "right-0" : "right-[-500%]"
        }`}
      >
        {/**the sidebar header*/}
        <div className="flex justify-between items-center h-16">
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
              <li className="w-full text-xl p-1" key={link.id}>
                <Link to={link.url} onClick={closeSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
