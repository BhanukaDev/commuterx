/* eslint-disable react/prop-types */

export const Divider = ({ className, orientation }) => {
  const verticalClass = "bg-gray-200 h-full w-[2px] mx-3"
  const horizontalClass = "bg-gray-200 w-full h-[2px] my-3"
  return orientation === "horizontal" ? (
    <div className={`${className} ${horizontalClass}`} />
  ) : (
    <div className={`${className} ${verticalClass}`} />
  )
}
