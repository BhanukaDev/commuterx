import { AiFillAlert, AiFillAliwangwang, AiFillBug } from "react-icons/ai";
import { IoMdTrain } from "react-icons/io";
import { IoBus } from "react-icons/io5";

const mainlinks = [
  {
    id: 1,
    url: "/",
    text: "Kizuki",
    rfcname: "dd",
    iconSvg: (
      <AiFillAliwangwang className="w-full h-full opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 2,
    url: "/",
    text: "Sekai",
    rfcname: "dd",
    iconSvg: (
      <IoMdTrain className="w-full h-full opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 3,
    url: "/hanatatachi",
    text: "Hanatatachi",
    rfcname: "dd",
    iconSvg: (
      <IoBus className="w-full h-full p-[1px] opacity-80 hover:opacity-100" />
    ),
  },
];

export default mainlinks;
