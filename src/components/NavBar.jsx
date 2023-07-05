/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { transportLinks, mainlinks } from "../links";
import { FaHome } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { Divider } from "./Divider";

function IconbarRow({ iconSvg, linker }) {
  return (
    <li className="w-16 h-16 cursor-pointer p-3">
      <Link to={linker} className="w-full h-full block">
        {iconSvg}
      </Link>
    </li>
  );
}
export const NavBar = () => {
  return (
    <>
      <div className="bg-white w-screen h-16 bottom-0 fixed shadow-lg z-30 flex justify-center sm:w-16 sm:h-full sm:flex-col sm:justify-between">
        <div className="flex sm:flex-col items-center">
          <Link to="/" className="w-full h-full p-3">
            <FaHome className="icon-bar-icon" />
          </Link>

          <Divider className="invisible sm:hidden" orientation={"vertical"} />

          <hr className="hidden border w-4/5 my-2 sm:block" />

          <ul className="flex sm:flex-col">
            {transportLinks.map((link) => {
              return (
                <>
                  <IconbarRow
                    key={link.id}
                    iconSvg={link.iconSvg}
                    linker={link.url}
                  />
                  <Divider
                    className="invisible sm:hidden"
                    orientation={"vertical"}
                  />
                </>
              );
            })}
          </ul>
          <hr className="hidden border w-4/5 my-2 sm:block" />
          <ul className="hidden sm:flex sm:flex-col">
            {mainlinks.map((link) => {
              return (
                <IconbarRow
                  key={link.id}
                  iconSvg={link.iconSvg}
                  linker={link.url}
                />
              );
            })}
          </ul>
        </div>

        <ul className="flex sm:flex-col items-center">
          <hr className="hidden border w-4/5 my-2 sm:block" />

          <Link to="/settings" className="w-full h-full p-3">
            <IoSettings className="icon-bar-icon" />
          </Link>

          <Link to="/feedback" className="hidden w-full h-full p-3 sm:block">
            <MdFeedback className="icon-bar-icon" />
          </Link>
        </ul>
      </div>
    </>
  );
};
