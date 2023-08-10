import { AiFillAlert, AiFillAliwangwang, AiFillBug } from "react-icons/ai"
import { IoMdTrain } from "react-icons/io"
import { IoBus } from "react-icons/io5"

export const mainlinks = [
  {
    id: 1,
    url: "/features",
    text: "Features",
    rfcname: "dd",
    iconSvg: (
      <AiFillAlert className="h-full w-full opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 2,
    url: "/support",
    text: "Support",
    rfcname: "dd",
    iconSvg: (
      <AiFillAliwangwang className="h-full w-full opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 3,
    url: "/aboutus",
    text: "About Us",
    rfcname: "dd",
    iconSvg: (
      <AiFillBug className="h-full w-full p-[1px] opacity-80 hover:opacity-100" />
    ),
  },
]

export const transportLinks = [
  {
    id: 1,
    url: "/trainmap",
    text: "Train",
    rfcname: "dd",
    iconSvg: (
      <IoMdTrain className="h-full w-full opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 2,
    url: "/busmap",
    text: "Bus",
    rfcname: "dd",
    iconSvg: <IoBus className="h-full w-full opacity-80 hover:opacity-100" />,
  },
]
