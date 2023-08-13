import { Link, useNavigate } from "react-router-dom"
import { addToUniteDB } from "../Utils/database"
import { auth } from "../Utils/auth"
import { useState } from "react"

export const Registration = () => {
  // const user = useContext(authContext)
  const [driverChoice, setDriverChoice] = useState(false)
  const navigate = useNavigate()

  if (driverChoice) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-300 px-5 pt-16">
        <div className="flex h-1/3 w-full max-w-2xl flex-col rounded-lg bg-white px-2  pb-4 pt-6 drop-shadow-lg md:h-3/5 ">
          <h2 className="mb-4 text-center font-manrope text-[clamp(20px,5vw,34px)] font-bold md:mb-10">
            Choose the mode of transport
          </h2>
          <div className="flex h-full w-full">
            <div className="flex h-full w-1/2 items-center p-1 px-2 md:p-4">
              <button
                onClick={async () => {
                  await addToUniteDB(auth.currentUser.uid, "bus")
                  navigate("/profile")
                }}
                to={"/profile"}
                className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 font-quicksand text-[clamp(18px,4vw,26px)] text-white hover:bg-zinc-800 active:bg-zinc-700 "
              >
                Bus
              </button>
            </div>
            <div className="flex h-full w-1/2 items-center p-1 px-2 md:p-4">
              <button
                onClick={async () => {
                  await addToUniteDB(auth.currentUser.uid, "train")
                  navigate("/profile")
                }}
                to={"/profile"}
                className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 font-quicksand text-[clamp(18px,4vw,26px)] text-white hover:bg-zinc-800 active:bg-zinc-700 "
              >
                Train
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 px-5 pt-16">
      <div className="flex h-1/3 w-full max-w-2xl flex-col rounded-lg bg-white px-2  pb-4 pt-6 drop-shadow-lg md:h-3/5 ">
        <h2 className="mb-4 text-center font-manrope text-[clamp(20px,5vw,34px)] font-bold md:mb-10">
          Are you a commuter or driver?
        </h2>
        <div className="flex h-full w-full">
          <div className="flex h-full w-1/2 items-center p-1 px-2 md:p-4">
            <Link
              to={"/profile"}
              className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 font-quicksand text-[clamp(18px,4vw,26px)] text-white hover:bg-zinc-800 active:bg-zinc-700 "
            >
              Commuter
            </Link>
          </div>
          <div className="flex h-full w-1/2 items-center p-1 px-2 md:p-4">
            <div
              type="button"
              onClick={() => {
                setDriverChoice(true)
              }}
              className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 font-quicksand text-[clamp(18px,4vw,26px)] text-white hover:bg-zinc-800 active:bg-zinc-700 "
            >
              Driver
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
