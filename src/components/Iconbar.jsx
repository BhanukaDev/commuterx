/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainlinks from "../links";

function IconbarRow({ iconSvg, linker }) {
  return (
    <li className="w-full h-16 cursor-pointer p-3">
      <Link to={linker} className="w-full h-full block">
        {iconSvg}
      </Link>
    </li>
  );
}
export const IconBar = () => {
  return (
    <>
      <div className="bg-white w-16 h-screen block fixed shadow-lg z-10">
        <ul className="my-16">
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
    </>
  );
};
