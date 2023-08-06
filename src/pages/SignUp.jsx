import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { FcGoogle } from "react-icons/fc"
import { signInWithGoogle } from "../Utils/auth"

export default function SignUp() {
  const navigate = useNavigate()

  const signUp = () => {
    signInWithGoogle(navigate)
  }
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="w-full max-w-md">
          <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
            <h2 className="mb-4 font-searchBar text-2xl font-semibold sm:text-3xl">
              Sign Up
            </h2>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="conpassword"
              >
                Confirm Password
              </label>
              <input
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="conpassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="focus:shadow-outline w-full rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Sign Up
              </button>
            </div>

            <p className="my-3 flex items-center before:mx-2 before:h-px before:flex-1 before:bg-slate-400 before:content-[''] after:mx-2 after:h-px after:flex-1 after:bg-slate-400 after:content-['']">
              OR
            </p>
            <Button
              className={"relative mx-auto mb-5 w-11/12 sm:w-4/5"}
              buttonStyle={"btn-primary"}
              onClick={signUp}
            >
              <FcGoogle className="absolute left-0 mx-3 text-2xl" />
              Sign Up with Google
            </Button>

            <div className="mt-5 flex items-center justify-center">
              <p> Already a user? </p>
              <Link
                className="mx-1 font-bold text-blue-600 hover:underline"
                to={"/login"}
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
