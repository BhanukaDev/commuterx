import { useState, useContext } from "react"
import { Bus } from "../Data/Bus"
import { addBusToDatabase } from "../Utils/database"
import { auth } from "../Utils/auth"
import { authContext, setAuthContext, updateCurrentUserState } from "./User"

export const BusForm = () => {
  const user = useContext(authContext)
  const setUser = useContext(setAuthContext)

  const validity = true //simulate validation

  const [government, setGovernment] = useState(true)

  const [organisationName, setOrganisationName] = useState(
    user?.userData?.organisationName ? user?.userData?.organisationName : ""
  )
  const [numberplate, setNumberPlate] = useState(
    user?.userData?.numberPlate ? user?.userData?.numberPlate : ""
  )
  const [routeNo, setRouteNo] = useState(
    user?.userData?.routeID ? user?.userData?.routeID : ""
  )
  const [desA, setDesA] = useState(
    user?.userData?.desA ? user?.userData?.desA : ""
  )
  const [desB, setDesB] = useState(
    user?.userData?.desB ? user?.userData?.desB : ""
  )

  const checkInput = async () => {
    event.preventDefault()

    if (validity) {
      let data = new Bus(
        auth.currentUser.uid,
        routeNo,
        numberplate,
        true,
        organisationName,
        desA,
        desB
      )

      data.getLocationInformation()
      console.log(data)
      await addBusToDatabase(data)
      updateCurrentUserState(auth.currentUser, setUser).then(() => {
        console.log(55)
      })
    }
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
      <label className="mb-2" htmlFor="busrouteno">
        Route No<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={routeNo}
        onChange={(e) => {
          setRouteNo(e.target.value)
        }}
        id="busrouteno"
        name="busrouteno"
        type="text"
        placeholder="e.g. 101"
        className={`${!validity.routenoV && "border-red-500"} 
        mb-4 rounded-md border border-black px-2 leading-loose`}
      />

      <label className="mb-2" htmlFor="numberplate">
        Number Plate<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={numberplate}
        onChange={(e) => {
          setNumberPlate(e.target.value)
        }}
        id="numberplate"
        name="numberplate"
        type="text"
        placeholder="e.g. ND-1986"
        className={`${
          !validity.numberplateV && "border-red-500"
        } mb-4 rounded-md border border-black px-2 leading-loose`}
      />

      <div className="mb-2 flex">
        <button
          type="button"
          onClick={() => {
            setGovernment(true)
            setOrganisationName("ctb")
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
            setOrganisationName("")
          }}
        >
          Other
        </button>
      </div>

      <input
        hidden={government}
        id="organisation"
        name="organisation"
        type="text"
        placeholder="Organisation Name"
        value={organisationName}
        onChange={(e) => {
          setOrganisationName(e.target.value)
        }}
        className={`${!validity.organisationV && "border-red-500"} 
        mb-3 mt-1 border-b-2 border-black px-2 outline-0`}
      />
      <label className="mb-2" htmlFor="desA">
        Destination A<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={desA}
        onChange={(e) => {
          setDesA(e.target.value)
        }}
        id="desA"
        name="desA"
        type="text"
        placeholder="e.g. Moratuwa"
        className={`
        mb-4 rounded-md border border-black px-2 leading-loose`}
      />

      <label className="mb-2" htmlFor="desB">
        Destination B<span className="font-bold text-red-400">*</span>
      </label>
      <input
        value={desB}
        onChange={(e) => {
          setDesB(e.target.value)
        }}
        id="desB"
        name="desB"
        type="text"
        placeholder="e.g. Pettah"
        className={`
        mb-4 rounded-md border border-black px-2 leading-loose`}
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
