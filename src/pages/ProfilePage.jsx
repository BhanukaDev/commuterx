/* eslint-disable react/prop-types */

import { useState } from "react";
import { BusForm } from "../components/BusForm";
import { TrainForm } from "../components/TrainForm";

export const ProfilePage = () => {
  const [active, setActive] = useState("bus");

  return (
    <div className="px-2 bg-slate-200 min-h-screen">
      <div className="px-2 py-4 flex ">
        <figure className="group relative w-1/3 max-w-[200px] rounded-full border-white border-4 overflow-hidden">
          <img src="noimage.jpg" className="scale-150 " alt="no image" />
          <img
            src="edit.png"
            className="hidden bg-white opacity-20 group-hover:inline absolute z-10 left-0 "
            alt="edit"
          />
        </figure>
        <div></div>
      </div>

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
      <div className="w-full sm:w-96">
        {active === "bus" ? <BusForm /> : <TrainForm />}
      </div>
    </div>
  );
};
