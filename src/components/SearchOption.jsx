/* eslint-disable react/prop-types */

import { Divider } from "./Divider"
import { BusOPIcon, NoresOPIcon, TrainOPIcon } from "./SearchOptionIcons"
export const SearchOption = ({ primary, secondary, type, icon }) => {
  return (
    <button
      type="submit"
      className="flex w-full  cursor-pointer items-center rounded-md px-4 py-2 drop-shadow-none hover:bg-gray-200"
    >
      {icon ? icon : type === "bus" ? <BusOPIcon /> : <TrainOPIcon />}
      <Divider />
      <div className=" flex flex-col items-start text-slate-500">
        <p> {primary}</p>
        <p className="font-lato text-lg text-slate-800">{secondary}</p>
      </div>
    </button>
  )
}

export const SearchOpNoResult = () => {
  return (
    <div className="flex w-full items-center rounded-md px-4 py-4">
      <NoresOPIcon />
      <Divider />
      <div className=" flex flex-col items-start text-slate-500">
        <button>
          <p className=" text-start font-manrope font-bold text-blue-400">
            Add missing details to improve our app.
          </p>
        </button>
      </div>
    </div>
  )
}
