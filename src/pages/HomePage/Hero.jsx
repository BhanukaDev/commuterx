/* eslint-disable react/prop-types */

import { FaAngleDoubleRight } from "react-icons/fa"
import { Button } from "../../components/Button"
export const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-[url(/bgmobile.jpg)] bg-cover bg-right px-5 pt-16 sm:bg-[url(/bgdesktop.png)] sm:px-[6%]">
      {/* <h1 className="my-10 text-center font-quicksand text-5xl font-bold text-black sm:text-5xl md:text-5xl lg:text-6xl">
        <span className="mr-2 font-lato sc0:max-sm:text-4xl">Welcome to </span>
        <span className="inline-block first-letter:text-accent">
          CommuterX!
        </span>
      </h1> */}
      <h1 className="mt-10 w-11/12 max-w-xs font-manrope text-[clamp(34px,5vw,54px)] font-extrabold leading-[1.05] text-black md:mt-16 md:max-w-sm lg:max-w-lg ">
        The solution to your commuting problems
      </h1>

      <p className="mb-8 mt-8 w-full max-w-[240px] text-lg text-zinc-800 sm:text-xl md:max-w-xs md:text-2xl">
        Stay on track with our live transit tracker.
      </p>
      {/* Whether you&#39;re a daily
        commuter or an occasional traveler, we&#39;ve got you covered with
        real-time updates on the location of buses and trains around the
        country. */}

      {/* <p className="mb-8 w-full text-center">
        Our user-friendly interface and robust tracking system make it easier
        than ever to plan your journey and minimize waiting times.
      </p> */}

      {/* <figure className="right-10 hidden h-[calc(100%-64px)] w-1/3 max-w-[280px] items-center md:absolute  md:flex lg:right-14">
        <img className="" src="trainroutes.png" alt="" />
      </figure> */}
      <Button
        buttonStyle={"btn-primary"}
        className={" w-40 "}
        linkpath={"/signup"}
      >
        Get Started
        <FaAngleDoubleRight className="ml-2 text-lg" />
      </Button>
    </div>
  )
}
