import { useState, useRef, useEffect } from "react";
import { Bus } from "./BusObject";

export const BusForm = () => {
  const [validity, setValidity] = useState({
    routenoV: true,
    numberplateV: true,
    organisationV: true,
  });
  const [government, setGovernment] = useState(true);
  const form = useRef(null);
  const organisationName = useRef("ctb");
  const numberplate = useRef("");
  const routeNo = useRef("");

  console.log(validity);
  const checkInput = () => {
    event.preventDefault();
    let data = new Bus(
      routeNo.current.value,
      numberplate.current.value,
      organisationName.current.value
    );

    setValidity({
      routenoV: !(routeNo.current.value === ""),
      numberplateV: numberplate.current.value.length > 5,
      organisationV: !(!government && organisationName.current.value === ""),
    });
    if (
      !(routeNo.current.value === "") &&
      numberplate.current.value.length > 5 &&
      !(!government && organisationName.current.value === "")
    ) {
      data.getLocationInformation();
      console.log(data);
      // fetch("/backend", { method: "post", body: data });
    }
  };

  useEffect(() => {
    organisationName.current.value = government ? "ctb" : "";
    organisationName.current.hidden = government;
  }, [government]);

  return (
    <form
      ref={form}
      onSubmit={checkInput}
      action="server.js"
      method="get"
      className="relative h-5/6 flex flex-col items-start p-5 bg-white rounded-r-xl rounded-b-xl"
    >
      <label className="mb-2" htmlFor="busrouteno">
        Route No<span className="text-red-400 font-bold">*</span>
      </label>
      <input
        ref={routeNo}
        id="busrouteno"
        name="busrouteno"
        type="text"
        placeholder="e.g. 101"
        className={`${!validity.routenoV && "border-red-500"} 
        rounded-md border border-black mb-4 px-2 leading-loose`}
      />

      <label className="mb-2" htmlFor="numberplate">
        Number Plate<span className="text-red-400 font-bold">*</span>
      </label>
      <input
        ref={numberplate}
        id="numberplate"
        name="numberplate"
        type="text"
        placeholder="e.g. ND-1986"
        className={`${
          !validity.numberplateV && "border-red-500"
        } rounded-md border border-black mb-4 px-2 leading-loose`}
      />

      <div className="flex mb-2">
        <button
          type="button"
          onClick={() => {
            setGovernment(true);
          }}
          className={`mr-3 px-2 py-1 rounded ${
            government ? "bg-accent text-white" : "bg-white text-black"
          }  border-black border`}
        >
          Ceylon Transport Board (CTB)
        </button>
        <button
          type="button"
          className={`px-2 py-1 rounded ${
            !government ? "bg-accent text-white" : "bg-white text-black"
          }  border-black border`}
          onClick={() => {
            setGovernment(false);
          }}
        >
          Other
        </button>
      </div>

      <input
        id="organisation"
        name="organisation"
        type="text"
        placeholder="Organisation Name"
        ref={organisationName}
        className={`${!validity.organisationV && "border-red-500"} 
        mt-1 mb-3 px-2 border-b-2 border-black outline-0`}
      />

      <button
        type="submit"
        className={
          "w-auto h-auto md:absolute md:bottom-5 bg-green-600 btn btn-secondary"
        }
      >
        Update Profile
      </button>
    </form>
  );
};
