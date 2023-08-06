/* eslint-disable react/prop-types */

import { Button } from "./Button"
export const Hero = () => {
  return (
    <div className="mt-16 flex h-[90vh] w-full flex-col items-center px-3 sm:px-[10%]">
      <h1 className="md:5xl lg:6xl my-10 text-3xl font-bold text-accent sm:text-4xl">
        Welcome to CommuterX!
      </h1>
      <p className="my-5 w-full text-center">
        Stay on track with our live transit tracker. Whether you&#39;re a daily
        commuter or an occasional traveler, we&#39;ve got you covered with
        real-time updates on the location of buses and trains around the
        country.
      </p>
      <p className="my-5 w-full text-center">
        Our user-friendly interface and robust tracking system make it easier
        than ever to plan your journey and minimize waiting times.
      </p>
      <div className="flex justify-center ">
        <img className="mx-5 h-20 w-20" src="./icons8-bus-64.png" alt="" />
        <img className="mx-5 h-20 w-20" src="./icons8-train-64.png" alt="" />
      </div>
      <div className="my-5 flex justify-center">
        <Button
          className="mx-5 w-20"
          buttonStyle="btn-outline"
          linkpath="/showmap"
        >
          Bus
        </Button>
        <Button
          className="mx-5 w-20"
          buttonStyle="btn-outline"
          linkpath="/showmap"
        >
          Train
        </Button>
      </div>
    </div>
  )
}
