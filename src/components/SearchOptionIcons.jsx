import { BiBus, BiTrain } from "react-icons/bi"
import { FaRoute } from "react-icons/fa6"

export const BusOPIcon = () => {
  return (
    <div className=" rounded-full bg-gray-200 px-2 py-1">
      <BiBus className="h-[20px] w-[20px]" />
    </div>
  )
}

export const TrainOPIcon = () => {
  return (
    <div className=" rounded-full bg-gray-200 px-2 py-1">
      <BiTrain className="h-[20px] w-[20px]" />
    </div>
  )
}

export const NoresOPIcon = () => {
  return (
    <div className="rounded-full text-gray-400">
      <FaRoute className="h-[30px] w-[30px]" />
    </div>
  )
}
