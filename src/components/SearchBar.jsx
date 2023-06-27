/* eslint-disable react/prop-types */
import { BiSolidBus, BiSolidTrain, BiSearch } from 'react-icons/bi';
import { Divider } from './Divider';
export const SearchBar = ({ type, icon }) => {
  return (
    <div className='h-searchBar flex items-center z-searchBar w-searchBar sm:w-searchBarSmall md:w-searchBarMedium lg:w-searchBarLarge transition-width duration-150 rounded-full py-2 px-4 drop-shadow-lg bg-slate-50 absolute top-1 left-1/2 -translate-x-1/2'>
      {type === 'bus' ? (
        <BiSolidBus className='h-full w-[25px]' />
      ) : type === 'train' ? (
        <BiSolidTrain className='h-full w-[25px]' />
      ) : type === 'custom' ? (
        { icon }
      ) : (
        <BiSearch className='h-full w-[25px]' />
      )}
      <Divider />
      <input
        type='text'
        className='w-full h-full focus:outline-none bg-transparent font-searchBar'
        placeholder='Search Route'
      />
    </div>
  );
};
