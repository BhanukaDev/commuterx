/* eslint-disable react/prop-types */

import { Button } from "./Button";
export const Hero = () => {
  return (
    <div className="w-full h-[90vh] mt-16 px-3 flex items-center flex-col sm:px-[10%]">
      <h1 className="my-10 text-3xl font-bold text-accent sm:text-4xl md:5xl lg:6xl">
        Welcome to CommuterX!
      </h1>
      <p className="my-5 text-center w-full">
        Stay on track with our live transit tracker. Whether you're a daily
        commuter or an occasional traveler, we've got you covered with real-time
        updates on the location of buses and trains around the country.
      </p>
      <p className="my-5 text-center w-full">
        Our user-friendly interface and robust tracking system make it easier
        than ever to plan your journey and minimize waiting times.
      </p>
      <div className="flex justify-center ">
        <img className="w-20 h-20 mx-5" src="./icons8-bus-64.png" alt="" />
        <img className="w-20 h-20 mx-5" src="./icons8-train-64.png" alt="" />
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
  );
};
