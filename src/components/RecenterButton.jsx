import { TbLocationFilled } from "react-icons/tb"

export const RecenterButton = () => {
  return (
    // <button className="fixed bottom-3 right-3 rounded-full">Re Center</button>
    <a
      href="#_"
      className="fixed bottom-20 left-2 inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-slate-900 px-6 py-3 text-base font-bold leading-6 text-white hover:bg-slate-950 md:bottom-3 md:left-auto md:right-4"
    >
      <TbLocationFilled />
      Re-Center
    </a>
  )
}
