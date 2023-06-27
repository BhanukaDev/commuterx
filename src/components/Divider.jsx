/* eslint-disable react/prop-types */

export const Divider = ({ orientation }) => {
  const verticalClass = 'bg-gray-200 h-full w-[2px] mx-3.5';
  const horizontalClass = 'bg-gray-200 w-full h-[2px] my-3.5';
  return orientation === 'horizontal' ? (
    <div className={horizontalClass} />
  ) : (
    <div className={verticalClass} />
  );
};
