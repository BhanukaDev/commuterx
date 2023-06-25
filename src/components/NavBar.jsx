/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { transportLinks, mainlinks } from '../links';
import { FaHome } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { MdFeedback } from 'react-icons/md';

function IconbarRow({ iconSvg, linker }) {
  return (
    <li className='w-full h-16 cursor-pointer p-3'>
      <Link to={linker} className='w-full h-full block'>
        {iconSvg}
      </Link>
    </li>
  );
}
export const NavBar = () => {
  return (
    <>
      hi
      <div className='bg-white w-16 py-3 h-screen fixed shadow-lg z-30 flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link to='/' className='w-full h-full p-3'>
            <FaHome className='icon-bar-icon' />
          </Link>
          <hr className='border w-4/5 my-2' />

          <ul className=''>
            {transportLinks.map((link) => {
              return (
                <IconbarRow
                  key={link.id}
                  iconSvg={link.iconSvg}
                  linker={link.url}
                />
              );
            })}
          </ul>
          <hr className='border w-4/5 my-2' />
          <ul>
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

        <ul className='flex flex-col items-center'>
          <hr className='border w-4/5 my-2' />

          <Link to='/settings' className='w-full h-full p-3'>
            <IoSettings className='icon-bar-icon' />
          </Link>
          <Link to='/feedback' className='w-full h-full p-3'>
            <MdFeedback className='icon-bar-icon' />
          </Link>
        </ul>
      </div>
    </>
  );
};
