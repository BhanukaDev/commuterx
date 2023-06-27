/* eslint-disable react/prop-types */

import { Divider } from './Divider';
import { SearchOpNoResult, SearchOption } from './SearchOption';
import { IoMdTrain } from 'react-icons/io';
import { IoBus, IoClose, IoSearch } from 'react-icons/io5';
//import { ImSpinner2 } from 'react-icons/im';

export const SearchBar = ({ type, placeholder, icon }) => {
  const tempList = [
    { route: 'Moratuwa to Pittah', number: '100' },
    { route: 'Colombo to Galle', number: '2' },
    { route: 'Kiribathgoda to Angulana', number: '154' },
    { route: 'Matara to Colombo', number: '1' },
  ];
  return (
    <form>
      <div className='absolute top-2 left-1/2 -translate-x-1/2 z-searchBar w-searchBar sm:w-searchBarSmall md:w-searchBarMedium lg:w-searchBarLarge flex flex-col items-center justify-center font-searchBar  transition-all'>
        <div className=' h-searchBar flex items-center  w-full duration-150 rounded-full py-2 px-4 drop-shadow-lg bg-slate-50'>
          {type === 'bus' ? (
            <IoBus className='h-[25px] w-[25px]' />
          ) : type === 'train' ? (
            <IoMdTrain className='h-[25px] w-[25px]' />
          ) : type === 'custom' ? (
            { icon }
          ) : (
            <IoSearch className='h-[25px] w-[25px]' />
          )}
          <Divider />

          <input
            type='search'
            name='search'
            id='search'
            className='w-full h-full focus:outline-none bg-transparent'
            placeholder={
              placeholder || type === 'bus'
                ? 'Search for bus routes or destinations'
                : 'Search for train lines or destinations'
            }
          />
          <button
            type='reset'
            className='ml-2 rounded-full hover:bg-gray-200 active:bg-gray-300 p-1 transition-colors duration-500'
          >
            <IoClose className='h-[25px] w-[25px]' />
          </button>
        </div>
        <div className='drop-shadow-lg mt-1 bg-slate-50 w-full rounded-md max-h-[204px] overflow-auto'>
          {tempList.length > 0 ? (
            tempList.map((bus, index) => (
              <SearchOption
                primary={bus.route}
                secondary={bus.number}
                key={index}
                type={type}
              />
            ))
          ) : (
            <SearchOpNoResult />
          )}
        </div>
      </div>
    </form>
  );
};
