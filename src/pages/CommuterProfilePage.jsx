/* eslint-disable react/prop-types */

// import { IoMdTrain } from "react-icons/io";
import { IoBus } from "react-icons/io5"
import { useContext } from "react"
import { NavBar } from "../components/NavBar"
import { Button } from "../components/Button"
import { deleteCurrentUser, logOut } from "../Utils/auth"
import { Navigate, useNavigate } from "react-router-dom"
import { CommuterForm } from "../components/CommuterForm"
import { authContext } from "../components/User"

export const CommuterProfilePage = () => {
  const user = useContext(authContext)
  const navigate = useNavigate()
  if (user?.userData?.role !== "commuter") {
    return <Navigate to={"/profile/driver"} />
  }
  return (
    <>
      <NavBar />
      <div className="flex h-full min-h-screen flex-col bg-white px-[2%] pt-5 font-searchBar md:flex-row md:justify-between md:pl-20">
        <div className="w-full px-2 ">
          <div className="mb-4 flex max-h-52 w-full items-center justify-between rounded-xl px-2 py-4 shadow-upwardsLG ">
            <figure className="group relative w-32 overflow-hidden rounded-full border-4 border-white">
              <img
                width={120}
                referrerPolicy="no-referrer"
                src={
                  user?.authData?.photoURL
                    ? user?.authData?.photoURL
                    : "/noImage.jpg"
                }
                className=""
                alt="no image"
              />
              <img
                src="/edit.png"
                className="absolute left-0 z-10 hidden bg-white opacity-20 group-hover:inline "
                alt="edit"
              />
            </figure>
            <div className="flex w-1/2 flex-col items-end justify-center ">
              <IoBus className="-mr-1 h-10 w-10"></IoBus>
              <h2 className="text-2xl font-bold md:text-3xl">101</h2>
              <h2 className="text-lg md:text-xl "> ND-4017 </h2>
              <h2 className="text-lg md:text-xl"> Nilanka Travels </h2>
            </div>
          </div>
          <div className="">{/* <p>poopoo</p> */}</div>
        </div>

        <div className="w-full px-2 pb-2 md:w-5/6 md:max-w-sm md:pl-5">
          <div className="flex rounded-t-lg bg-slate-50 pt-1 ">
            <button
              type="button"
              className={`mr-[1px] w-36 rounded-t-xl bg-white px-3 pt-1 text-xl `}
            >
              Commuter
            </button>
          </div>
          <CommuterForm />

          <Button
            className={""}
            buttonStyle={"btn-solid bg-black my-3 h-10"}
            onClick={() => {
              logOut(navigate)
            }}
          >
            Log Out
          </Button>
          <Button
            className={""}
            buttonStyle={"btn-solid bg-rose-600 my-3 h-10"}
            onClick={() => {
              deleteCurrentUser(navigate)
            }}
          >
            Delete Account
          </Button>
        </div>
      </div>

      <div className="h-16 w-full"></div>
    </>
  )
}
