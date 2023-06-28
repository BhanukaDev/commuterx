/* eslint-disable react/prop-types */

import { Divider } from './Divider';
import { BusOPIcon, NoresOPIcon, TrainOPIcon } from './SearchOptionIcons';
export const SearchOption = ({ primary, secondary, type, icon }) => {
  return (
    <button
      type='submit'
      className='w-full hover:bg-gray-200  py-2 px-4 rounded-md flex items-center cursor-pointer drop-shadow-none'
    >
      {icon ? icon : type === 'bus' ? <BusOPIcon /> : <TrainOPIcon />}
      <Divider />
      <div className=' text-slate-500 flex flex-col items-start'>
        <p> {primary}</p>
        <p className='text-slate-800 font-lato text-lg'>{secondary}</p>
      </div>
    </button>
  );
};

export const SearchOpNoResult = () => {
  return (
    <div className='w-full py-4 px-4 rounded-md flex items-center'>
      <NoresOPIcon />
      <Divider />
      <div className=' text-slate-500 flex flex-col items-start'>
        <button>
          <p className=' text-blue-400 font-bold font-manrope text-start'>
            Add missing details to improve our app.
          </p>
        </button>
      </div>
    </div>
  );
};
