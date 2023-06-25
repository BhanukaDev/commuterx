/* eslint-disable react/prop-types */

export const Tooltip = ({ children, anchor, text }) => {
  const anchorClass =
    anchor === 'bottom'
      ? ' -translate-x-1/2 left-1/2 translate-y-full mt-2'
      : anchor === 'right'
      ? ' -translate-y-1/2 top-1/2 translate-x-full ml-2'
      : anchor === 'left'
      ? ' -translate-y-1/2 top-1/2 -translate-x-full mr-2'
      : anchor == 'top'
      ? ' -translate-x-1/2 left-1/2 -translate-y-full mb-2'
      : ' -translate-x-1/2 left-1/2 translate-y-full';
  return (
    <div className='group flex relative'>
      {children}
      <div
        className={
          'group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute opacity-0' +
          anchorClass
        }
      >
        {text}
      </div>
    </div>
  );
};
