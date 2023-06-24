/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import mainlinks from '../links';
import { FaBars } from 'react-icons/fa';
import { AiFillAlert } from 'react-icons/ai';

function IconbarRow({ IconSvg, linker, func }) {
  return (
    <li className='w-full h-10 cursor-pointer'>
      <Link to={linker} onClick={func}>
        {IconSvg}
      </Link>
    </li>
  );
}

export default function Iconbar() {
  const closeSidebar = () => {
    console.log(2);
  };
  return (
    <div className='bg-slate-400 w-16 h-screen '>
      <ul className=''>
        {mainlinks.map((link) => {
          return (
            <IconbarRow
              key={link.id}
              icon={link.IconSvg}
              linker={link.url}
              func={closeSidebar}
            />
          );
        })}
      </ul>
    </div>
  );
}
