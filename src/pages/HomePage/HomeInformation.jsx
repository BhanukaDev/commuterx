//this component holds the rest of the home page

import { Button } from "../../components/Button"

export const HomeInformation = () => {
  return (
    <div>
      {/* container for rest of the parts in homepage */}
      <div className="">
        <h2 className="text-[clamp(24px,4vw,44px)] ">
          Choose your mode of transport
        </h2>
        <div>
          {" "}
          <div className="mt-5 flex md:mt-16">
            <img className="mr-8 h-20 w-20" src="./icons8-bus-64.png" alt="" />
            <img
              className="mr-5 h-20 w-20"
              src="./icons8-train-64.png"
              alt=""
            />
          </div>
          <div className="my-5 flex ">
            <Button
              className="mr-8 w-20"
              buttonStyle="btn-outline"
              linkpath="/busmap"
            >
              Bus
            </Button>
            <Button
              className="mr-5 w-20"
              buttonStyle="btn-outline"
              linkpath="/trainmap"
            >
              Train
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
