/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */ // remove this line later

import { useState } from "react"
import { Divider } from "./Divider"
import { SearchOpNoResult, SearchOption } from "./SearchOption"
import { IoMdTrain } from "react-icons/io"
import { IoBus, IoClose, IoSearch } from "react-icons/io5"
import { getSearchRoutes } from "../Utils/database"
import { RouteBar } from "./RouteBar"
//import { ImSpinner2 } from 'react-icons/im';

export const SearchBar = ({ type, placeholder, icon }) => {
  // const tempList = [
  //   { route: "Moratuwa to Pettah", number: "100" },
  //   { route: "Colombo to Galle", number: "2" },
  //   { route: "Kiribathgoda to Angulana", number: "154" },
  //   { route: "Matara to Colombo", number: "1" },
  // ]

  const [seResults, setSeResults] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [showSearchOptions, setShowSearchOptions] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()

    console.log("Event: Form Submit")
  }

  const updateResultsList = async (res) => {
    if (res === "") {
      setShowSearchOptions(false)
      return
    }

    setShowSearchOptions(true)
    const searchResults = await getSearchRoutes(res)
    setSeResults(searchResults)
  }

  const handleReset = () => {
    setInputValue("")
    setShowSearchOptions(false)
    console.log("Event: Form Reset")
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="absolute left-1/2 top-2 z-searchBar flex w-searchBar -translate-x-1/2 flex-col items-center justify-center font-searchBar transition-all sm:w-searchBarSmall md:w-searchBarMedium  lg:w-searchBarLarge">
        <div className=" flex h-searchBar w-full  items-center rounded-full bg-slate-50 px-4 py-2 drop-shadow-lg duration-150">
          {type === "bus" ? (
            <IoBus className="h-[25px] w-[25px]" />
          ) : type === "train" ? (
            <IoMdTrain className="h-[25px] w-[25px]" />
          ) : type === "custom" ? (
            { icon }
          ) : (
            <IoSearch className="h-[25px] w-[25px]" />
          )}
          <Divider />

          <input
            autoComplete="off"
            type="search"
            name="search"
            id="search"
            className="h-full w-full bg-transparent focus:outline-none"
            placeholder={
              placeholder || type === "bus"
                ? "Search for bus routes or destinations"
                : "Search for train lines or destinations"
            }
            onChange={(e) => {
              setInputValue(e.target.value)
              updateResultsList(e.target.value)
            }}
            value={inputValue}
          />
          <button
            type="reset"
            className="ml-2 rounded-full p-1 transition-colors duration-500 hover:bg-gray-200 active:bg-gray-300"
            onClick={handleReset}
          >
            <IoClose className="h-[25px] w-[25px]" />
          </button>
        </div>

        {showSearchOptions === true ? (
          <div className="mt-1 max-h-[204px] w-full scroll-m-1 overflow-y-scroll rounded-md bg-slate-50 drop-shadow-lg">
            {seResults.length > 0 ? (
              seResults.map((route, index) => (
                <SearchOption
                  primary={`${route.desA} - ${route.desB}`}
                  secondary={route.id}
                  key={index}
                  type={type}
                />
              ))
            ) : (
              <SearchOpNoResult />
            )}
          </div>
        ) : (
          <RouteBar
            routeList={[
              { routeNumber: "101" },
              { routeNumber: "100" },
              { routeNumber: "154" },
              { routeNumber: "400" },
              { routeNumber: "393" },
              { routeNumber: "02" },
              { routeNumber: "401" },
              { routeNumber: "32" },
              { routeNumber: "183" },
              { routeNumber: "192" },
            ]}
          />
        )}
      </div>
    </form>
  )
}
