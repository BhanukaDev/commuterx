/* eslint-disable react/prop-types */

import { FaAngleDoubleRight } from "react-icons/fa"
import { Button } from "../../components/Button"
import { writeToRDB } from "../../Utils/realtimeDB"
import { getUID } from "../../Utils/auth"
export const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-[url(/bgmobile.jpg)] bg-cover bg-right px-5 pt-16 sm:bg-[url(/bgdesktop.png)] sm:px-[6%]">
      <h1 className="mt-10 w-11/12 max-w-xs font-manrope text-[clamp(34px,5vw,54px)] font-extrabold leading-[1.05] text-black md:mt-16 md:max-w-sm lg:max-w-lg ">
        The solution to your commuting problems
      </h1>

      <p className="mb-8 mt-8 w-full max-w-[240px] text-lg text-zinc-800 sm:text-xl md:max-w-xs md:text-2xl">
        Stay on track with our live transit tracker.
      </p>

      <Button
        buttonStyle={"btn-primary"}
        className={" get-started "}
        linkpath={"/signup"}
        onClick={() => {
          writeToRDB(getUID(), "Bhanuka dasa", "Hello How are you guys")
        }}
      >
        Get Started
        <FaAngleDoubleRight className="ml-2 text-lg" />
      </Button>
    </div>
  )
}
