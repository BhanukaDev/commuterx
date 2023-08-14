//this component holds the rest of the home page

import { Button } from "../../components/Button"

export const HomeInformation = () => {
  return (
    <div>
      {/* container for rest of the parts in homepage */}

      {/* part 2 */}
      <div className=" h-[90vh] px-5 py-16 md:px-[6%] ">
        <div className="relative z-10  flex flex-col ">
          <h2 className="h2-fluid mb-6 ">Choose your mode of transport</h2>
          <p className="mb-5 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            quisquam, qui itaque incidunt porro dolorem, cupiditate ullam
            laborum obcaecati vel cumque fugit corporis, quod cum assumenda
            delectus minus.
          </p>
          <p className="mb-10 max-w-md">
            Cum alias qui doloremque deleniti, earum fugiat atque modi quisquam
            voluptatum ea voluptates velit magnam necessitatibus iusto
            praesentium commodi esse iste eligendi.
          </p>
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
      </div>
      {/* part 3 */}

      <div className="flex h-[85vh] flex-col items-end px-5 pb-16 md:px-[6%]">
        <div className=" mb-6 flex flex-col items-end">
          <h2 className="h2-fluid mb-4 ">Search for your route</h2>
          <p className="mb-5 max-w-md text-end">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            quisquam, qui itaque incidunt porro dolorem, cupiditate ullam
            laborum obcaecati vel cumque fugit corporis, quod cum assumenda
            delectus minus.
          </p>
          <p className="mb-10 max-w-md text-end">
            Cum alias qui doloremque deleniti, earum fugiat atque modi quisquam
            voluptatum ea voluptates velit magnam necessitatibus iusto
            praesentium commodi esse iste eligendi.
          </p>
          <figure className="w-full max-w-sm">
            <img className="w-full rounded-md" src="/searchroutes.png" alt="" />
          </figure>
        </div>
      </div>

      {/* part 4 */}

      <div className="h-[85vh] px-5 pb-16 md:px-[6%] ">
        <div className=" flex flex-col  ">
          <h2 className=" h2-fluid mb-4 ">View live positions</h2>
          <p className="mb-5 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            quisquam, qui itaque incidunt porro dolorem, cupiditate ullam
            laborum obcaecati vel cumque fugit corporis, quod cum assumenda
            delectus minus.
          </p>
          <p className="mb-10 max-w-md">
            Cum alias qui doloremque deleniti, earum fugiat atque modi quisquam
            voluptatum ea voluptates velit magnam necessitatibus iusto
            praesentium commodi esse iste eligendi.
          </p>
          <figure className="w-full max-w-sm">
            <img className="rounded-md" src="/maphome.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}
