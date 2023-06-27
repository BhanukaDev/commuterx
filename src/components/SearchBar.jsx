/* eslint-disable react/prop-types */
import { BiSolidBus, BiSolidTrain, BiSearch } from 'react-icons/bi';
import { Divider } from './Divider';
import { SearchOption } from './SearchOption';
export const SearchBar = ({ type, placeholder, icon }) => {
  const tempList = [
    'Moratuwa-Pittah (100)',
    'Colombo-Galle (2)',
    'Kiribathgoda-Angulana (154)',
  ];
  return (
    <div className='absolute top-2 left-1/2 -translate-x-1/2 z-searchBar w-searchBar sm:w-searchBarSmall md:w-searchBarMedium lg:w-searchBarLarge flex flex-col items-center justify-center font-searchBar  transition-all'>
      <div className=' h-searchBar flex items-center  w-full duration-150 rounded-full py-2 px-4 drop-shadow-lg bg-slate-50'>
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
        <form>
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
        </form>
      </div>
      <div className='drop-shadow-lg mt-1 bg-slate-50 w-full rounded-md'>
        {tempList.map((text, index) => (
          <SearchOption text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
