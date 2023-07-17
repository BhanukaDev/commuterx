/* eslint-disable react/prop-types */

// import { IoMdTrain } from "react-icons/io";
import { IoBus } from "react-icons/io5"
import { useState } from "react"
import { BusForm } from "../components/BusForm"
import { TrainForm } from "../components/TrainForm"

export const ProfilePage = () => {
  const [active, setActive] = useState("bus")

  return (
    <div className="flex h-full min-h-screen flex-col bg-slate-100 px-[2%] font-searchBar md:flex-row md:justify-between  md:pl-[10%]">
      <div className="flex w-full items-center justify-between py-4 md:w-3/5 md:flex-col md:items-start md:justify-start md:pt-10 ">
        <figure className="group relative h-auto w-2/5 overflow-hidden rounded-full border-4 border-white md:w-1/2">
          <img
            src="lkbus.webp"
            className="aspect-square scale-110"
            alt="no image"
          />
          <img
            src="edit.png"
            className="absolute left-0 z-10 hidden bg-white opacity-20 group-hover:inline "
            alt="edit"
          />
        </figure>
        <div className="md:full flex w-1/2 flex-col items-end pt-6 md:w-3/5 md:items-start">
          <IoBus className="h-10 w-10"></IoBus>
          <h2 className="text-2xl font-bold md:text-3xl md:leading-loose">
            101
          </h2>
          <h2 className="text-lg md:text-xl "> ND-4017 </h2>
          <h2 className="text-lg md:text-xl"> Nilanka Travels </h2>
        </div>
      </div>

      <div className="w-full md:h-screen md:w-96 md:pt-10 ">
        <div className="flex pt-2">
          <button
            type="button"
            onClick={() => {
              setActive("bus")
            }}
            className={`mr-[1px] w-20 rounded-t-xl border-0 border-transparent px-3 pt-1 text-xl  ${
              active === "bus"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-opacity-80"
            }  `}
          >
            Bus
          </button>
          <button
            type="button"
            className={`mr-[1px] w-20 rounded-t-xl border-0 border-transparent px-3 pt-1 text-xl ${
              active === "train"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-opacity-80"
            }  `}
            onClick={() => {
              setActive("train")
            }}
          >
            Train
          </button>
        </div>
        {active === "bus" ? <BusForm /> : <TrainForm />}
      </div>
    </div>
  )
}
