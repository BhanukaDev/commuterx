import { useNavigate } from "react-router-dom"
import { addCommuterToDatabase } from "../Utils/database"
import { useContext, useEffect, useRef, useState } from "react"
import { authContext, setAuthContext, updateCurrentUserState } from "./User"
import { auth } from "../Utils/auth"

export const CommuterForm = () => {
  const navigate = useNavigate()
  const user = useContext(authContext)
  const setUser = useContext(setAuthContext)
  // const [validity, setValidity] = useState({
  //   routenoV: true,
  //   numberplateV: true,
  //   organisationV: true,
  // })
  // const [government, setGovernment] = useState(true)
  // const form = useRef(null)
  // const organisationName = useRef("ctb")
  const [name, setName] = useState("")
  useEffect(() => {
    setName(user?.authData?.displayName)
  }, [user])
  const email = useRef("")

  console.log(user?.authData?.displayName)
  const checkInput = () => {
    event.preventDefault()

    addCommuterToDatabase()
    updateCurrentUserState(auth.currentUser, setUser)

    navigate("/busmap")

    // setValidity({
    //   routenoV: !(routeNo.current.value === ""),
    //   numberplateV: numberplate.current.value.length > 5,
    //   organisationV: !(!government && organisationName.current.value === ""),
    // })
    // if (
    //   !(routeNo.current.value === "") &&
    //   numberplate.current.value.length > 5 &&
    //   !(!government && organisationName.current.value === "")
    // ) {
    //   navigate("/showmap")

    //   let data = new Bus(
    //     auth.currentUser.uid,
    //     routeNo.current.value,
    //     numberplate.current.value,
    //     organisationName.current.value
    //   )

    //   data.getLocationInformation()
    //   console.log(data)
    //
    // }
  }

  // useEffect(() => {
  //   organisationName.current.value = government ? "ctb" : ""
  //   organisationName.current.hidden = government
  // }, [government])

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
        value={name || ""}
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
