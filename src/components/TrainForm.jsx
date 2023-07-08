import { useState, useRef, useEffect } from "react";

export const TrainForm = () => {
  const [validity, setValidity] = useState({
    trainIDV: true,
  });
  const form = useRef(null);

  const trainID = useRef("");

  const checkInput = () => {
    event.preventDefault();
    let data = new FormData(form.current);
    data.append("trainID", trainID.current.value);
    setValidity({
      trainIDV: !(trainID.current.value === ""),
    });
    if (!(trainID.current.value === "")) {
      fetch("/backend", { method: "post", body: data });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={checkInput}
      action="server.js"
      method="get"
      className="relative h-5/6 flex flex-col items-start p-5 bg-white rounded-r-xl rounded-b-xl"
    >
      <label className="mb-2" htmlFor="trainID">
        Train No<span className="text-red-400 font-bold">*</span>
      </label>
      <input
        ref={trainID}
        id="trainID"
        name="trainID"
        type="text"
        placeholder="e.g. 8086"
        className={`${!validity.trainIDV && "border-red-500"} 
    rounded-md border border-black mb-4 px-2 leading-loose`}
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
