/* eslint-disable react/prop-types */
export const SearchOption = ({ text, icon }) => {
  return (
    <div className='w-full hover:bg-gray-200 flex py-2 px-2 rounded-md  transition-all duration-500'>
      {text}
      {icon}
    </div>
  );
};
