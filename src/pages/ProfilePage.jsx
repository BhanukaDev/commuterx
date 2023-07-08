/* eslint-disable react/prop-types */

import { IoMdTrain } from "react-icons/io";
import { IoBus } from "react-icons/io5";
import { useState } from "react";
import { BusForm } from "../components/BusForm";
import { TrainForm } from "../components/TrainForm";

export const ProfilePage = () => {
  const [active, setActive] = useState("bus");

  return (
    <div className="h-full flex flex-col md:flex-row md:justify-between md:pl-[10%] px-[2%] bg-slate-200 min-h-screen">
      <div className="w-full md:pt-10 md:w-3/5 py-4 flex items-center md:items-start justify-between md:justify-start md:flex-col ">
        <figure className="group relative w-2/5 md:w-1/2 h-auto rounded-full border-white border-4 overflow-hidden">
          <img src="noimage.jpg" className="scale-150" alt="no image" />
          <img
            src="edit.png"
            className="hidden bg-white opacity-20 group-hover:inline absolute z-10 left-0 "
            alt="edit"
          />
        </figure>
        <div className="w-1/2 md:w-3/5 pt-6 flex flex-col items-end md:items-start md:full">
          <IoBus className="w-10 h-10"></IoBus>
          <h2 className="font-bold text-2xl md:text-3xl md:leading-loose">
            Route/Train No
          </h2>
          <h2 className="text-lg md:text-xl "> EX-AMPL </h2>
          <h2 className="text-lg md:text-xl"> CTB </h2>
        </div>
      </div>

      <div className="w-full md:pt-10 md:w-96 md:h-screen ">
        <div className="flex pt-2">
          <button
            type="button"
            onClick={() => {
              setActive("bus");
            }}
            className={`mr-[1px] w-20 text-xl px-3 pt-1 rounded-t-xl border-transparent border-0  ${
              active === "bus"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-opacity-80"
            }  `}
          >
            Bus
          </button>
          <button
            type="button"
            className={`mr-[1px] w-20 text-xl px-3 pt-1 rounded-t-xl border-transparent border-0 ${
              active === "train"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-opacity-80"
            }  `}
            onClick={() => {
              setActive("train");
            }}
          >
            Train
          </button>
        </div>
        {active === "bus" ? <BusForm /> : <TrainForm />}
      </div>
    </div>
  );
};
