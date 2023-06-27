import { BiBus, BiTrain } from 'react-icons/bi';
import { FaRoute } from 'react-icons/fa6';

export const BusOPIcon = () => {
  return (
    <div className=' px-2 py-1 bg-gray-200 rounded-full'>
      <BiBus className='h-[20px] w-[20px]' />
    </div>
  );
};

export const TrainOPIcon = () => {
  return (
    <div className=' px-2 py-1 bg-gray-200 rounded-full'>
      <BiTrain className='h-[20px] w-[20px]' />
    </div>
  );
};

export const NoresOPIcon = () => {
  return (
    <div className='text-gray-400 rounded-full'>
      <FaRoute className='h-[30px] w-[30px]' />
    </div>
  );
};
