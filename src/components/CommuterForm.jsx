import { useNavigate } from "react-router-dom"
import { addCommuterToDatabase } from "../Utils/database"
import { useContext, useRef, useState } from "react"
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
  const [name, setName] = useState(user.displayName)
  const email = useRef("")

  // console.log(validity)
  const checkInput = () => {
    event.preventDefault()
    updateCurrentUserState(auth.currentUser, setUser)

    addCommuterToDatabase()
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

      <label className="mb-2" htmlFor="email">
        Email<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={user.email}
        readOnly
        ref={email}
        id="email"
        name="email"
        type="email"
        className={`
         mb-4 w-5/6 max-w-xs rounded-md border border-black px-2 leading-loose`}
      />

      {/* <div className="mb-2 flex">
        <button
          type="button"
          onClick={() => {
            setGovernment(true)
          }}
          className={`mr-3 rounded px-2 py-1 ${
            government ? "bg-accent text-white" : "bg-white text-black"
          }  border border-black`}
        >
          Ceylon Transport Board (CTB)
        </button>
        <button
          type="button"
          className={`rounded px-2 py-1 ${
            !government ? "bg-accent text-white" : "bg-white text-black"
          }  border border-black`}
          onClick={() => {
            setGovernment(false)
          }}
        >
          Other
        </button>
      </div> */}

      {/* <input
        id="organisation"
        name="organisation"
        type="text"
        placeholder="Organisation Name"
        ref={organisationName}
        className={`${!validity.organisationV && "border-red-500"} 
        mb-3 mt-1 border-b-2 border-black px-2 outline-0`}
      /> */}

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
