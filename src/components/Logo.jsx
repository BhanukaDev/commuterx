//temporary logo
import { FaPersonHiking } from 'react-icons/fa6';

import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to='/' className='flex justify-center items-center'>
      <h1 className='inline font-quicksand font-bold text-2xl m-1 first-letter:text-accent md:text-3xl'>
        Commuter
      </h1>
      <FaPersonHiking className='inline text-2xl text-accent' />
    </Link>
  );
};
