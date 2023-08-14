import { addCommuterToDatabase } from "../Utils/database"
import { useContext, useRef, useState } from "react"
import { authContext, setAuthContext, updateCurrentUserState } from "./User"
import { auth } from "../Utils/auth"
import { Commuter } from "../Data/Commuter"

export const CommuterForm = () => {
  const user = useContext(authContext)
  const setUser = useContext(setAuthContext)

  const [name, setName] = useState(
    user?.userData?.organisationName ? user?.userData?.organisationName : ""
  )
  const [phoneNumber, setPhoneNumber] = useState(
    user?.userData?.phoneNumber ? user?.userData?.phoneNumber : ""
  )

  const email = useRef("")

  const checkInput = async () => {
    event.preventDefault()
    const data = new Commuter(
      auth.currentUser.uid,
      name,
      auth.currentUser.email,
      auth.currentUser.photoURL,
      phoneNumber
    )
    await addCommuterToDatabase(data)
    updateCurrentUserState(auth.currentUser, setUser)
  }

  return (
    <form
      onSubmit={checkInput}
      method="get"
      className="relative flex h-[85%] w-full flex-col items-start rounded-b-xl rounded-r-xl bg-white p-5 shadow-upwardsXL"
    >
      <label className="mb-2" htmlFor="name">
        Name<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        className={` 
        mb-4 w-5/6 max-w-xs rounded-md border border-black px-2 leading-loose`}
      />

      <label className="mb-2" htmlFor="phoneNumber">
        Phone Number<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value)
        }}
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        placeholder="e.g. 0775346543"
        className={` 
        mb-4 w-5/6 max-w-xs rounded-md border border-black px-2 leading-loose`}
      />

      <label className="mb-2" htmlFor="email">
        Email
      </label>
      <input
        value={user?.authData?.email || ""}
        readOnly
        disabled
        ref={email}
        id="email"
        name="email"
        type="email"
        className={`
         mb-4 w-5/6 max-w-xs rounded-md border border-black px-2 leading-loose`}
      />

      <button
        type="submit"
        className={
          "btn btn-secondary mt-2 h-auto w-auto bg-green-600 md:absolute md:bottom-5"
        }
      >
        Update Profile
      </button>
    </form>
  )
}
