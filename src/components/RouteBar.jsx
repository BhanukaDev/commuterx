/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid"
export const RouteBar = ({ routeList }) => {
  return (
    <div className="absolute top-14 flex w-full  justify-center py-2 pl-4">
      <div className="flex max-w-md flex-nowrap overflow-x-scroll">
        {routeList.map((route) => {
          return (
            <button
              key={uuidv4()}
              type="button"
              className="mx-1 h-7 min-w-[48px] rounded-xl bg-white px-2 font-k2d text-xl font-bold text-black"
            >
              {route.routeNumber}
            </button>
          )
        })}
      </div>
    </div>
  )
}
