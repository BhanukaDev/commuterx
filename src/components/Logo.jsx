//temporary logo
import { FaPersonHiking } from "react-icons/fa6"

import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center">
      <h1 className="inline font-quicksand text-2xl font-bold first-letter:text-accent sm:m-1 sm:text-3xl">
        CommuterX
      </h1>
      <FaPersonHiking className="inline text-2xl text-accent" />
    </Link>
  )
}
