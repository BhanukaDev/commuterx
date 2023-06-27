import React from "react";
import { Button } from "./Button";
export const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button
        className="m-5 w-20"
        buttonStyle="btn-primary"
        linkpath="/showmap"
      >
        Bus
      </Button>
      <Button
        className="m-5 w-20"
        buttonStyle="btn-primary"
        linkpath="/showmap"
      >
        Train
      </Button>
    </div>
  );
};
