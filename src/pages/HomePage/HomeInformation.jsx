//this component holds the rest of the home page

import { Button } from "../../components/Button"

export const HomeInformation = () => {
  return (
    <div>
      {/* container for rest of the parts in homepage */}
      <div className=" h-[91vh] px-5 py-10 md:px-[6%] ">
        <div className="relative z-10  flex flex-col ">
          <h2 className="mb-6 font-manrope text-[clamp(24px,4vw,40px)] ">
            Choose your mode of transport
          </h2>
          <div className="">
            <div className=" flex ">
              <img
                className="mr-5 h-14 w-14 md:mr-8 md:h-20 md:w-20"
                src="./icons8-bus-64.png"
                alt=""
              />
              <img
                className="mr-5 h-14 w-14 md:h-20 md:w-20"
                src="./icons8-train-64.png"
                alt=""
              />
            </div>
            <div className="my-5 flex ">
              <Button
                className="mr-5 h-8 w-14 md:mr-8 md:h-10 md:w-20"
                buttonStyle="btn-outline"
                linkpath="/busmap"
              >
                Bus
              </Button>
              <Button
                className="mr-5 h-8 w-14 md:h-10 md:w-20"
                buttonStyle="btn-outline"
                linkpath="/trainmap"
              >
                Train
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-0 mb-6 flex flex-col md:bottom-28 md:items-end ">
          <h2 className="mb-6 font-manrope text-[clamp(24px,4vw,40px)] ">
            Search for your route
          </h2>
          <figure className="w-full max-w-sm">
            <img className="w-full rounded-md" src="/searchroutes.png" alt="" />
          </figure>
        </div>

        <div className="relative flex flex-col md:bottom-28 ">
          <h2 className="mb-4 font-manrope text-[clamp(24px,4vw,40px)] ">
            Something will come here
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            nesciunt ratione modi!
          </p>
        </div>
      </div>
    </div>
  )
}
