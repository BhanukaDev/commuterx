/* eslint-disable react/prop-types */
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
export const RouteBar = ({ routeList }) => {
  const [activeRoutes, setActiveRoutes] = useState([])

  const updateActiveRoutes = (e) => {
    let routeNumber = e.target.innerHTML
    // if route is in array remove route from array, else add to array
    if (activeRoutes.includes(routeNumber)) {
      setActiveRoutes((prev) => {
        let temp = prev
        let index = temp.indexOf(routeNumber)
        temp.splice(index, 1)
        return [...temp]
      })
    } else {
      setActiveRoutes((prev) => {
        return [...prev, routeNumber]
      })
    }
  }

  return (
    <div className=" z-searchBar flex w-full justify-center  py-2">
      <div className="no-scrollbar  flex max-w-md flex-nowrap overflow-x-scroll ">
        {routeList.map((route) => {
          // is route button active
          const isActive = activeRoutes.includes(route.routeNumber)

          return (
            <button
              key={uuidv4()}
              type="button"
              onClick={updateActiveRoutes}
              className={`mx-1 h-7 w-auto min-w-[48px] shrink-0 rounded-xl px-2  font-k2d text-xl font-bold   ${
                isActive
                  ? "bg-black text-white hover:bg-slate-600"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              {route.routeNumber}
            </button>
          )
        })}
      </div>
    </div>
  )
}
