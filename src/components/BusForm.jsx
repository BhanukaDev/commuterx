import { useState, useRef, useEffect } from "react";
import { Button } from "./Button";

export const BusForm = () => {
  const [government, setGovernment] = useState(true);
  const organisationName = useRef("ctb");

  useEffect(() => {
    organisationName.current.value = government ? "ctb" : "";
    organisationName.current.hidden = government;
  }, [government]);
  return (
    <form className="flex flex-col items-start p-5 bg-white rounded-r-xl rounded-b-xl">
      <label className="mb-2" htmlFor="busrouteno">
        Route No
      </label>
      <input
        id="busrouteno"
        name="busrouteno"
        type="text"
        placeholder="e.g. 101"
        className="rounded-md border border-black mb-4 px-2 leading-loose"
      />

      <label className="mb-2" htmlFor="numberplate">
        Number Plate
      </label>
      <input
        id="numberplate"
        name="numberplate"
        type="text"
        placeholder="e.g. ND-1986"
        className="rounded-md border border-black mb-4 px-2 leading-loose"
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
          className={`mr-5 px-2 py-1 rounded ${
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
        className="mt-1 mb-3 px-2 border-b-2 border-black outline-0"
      />

      <Button className={"w-auto"} buttonColor={"bg-green-600"}>
        Update Profile
      </Button>
    </form>
  );
};
