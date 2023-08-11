/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { FcGoogle } from "react-icons/fc"
import { auth, signInWithGoogle } from "../Utils/auth"
import { AppBar } from "../components/AppBar"
import { addCommuterToDatabase, addToUniteDB } from "../Utils/database"

export const Login = () => {
  const navigate = useNavigate()

  const signUp = () => {
    const isNewUser = signInWithGoogle(navigate)
    if (isNewUser) {
      addToUniteDB(auth.currentUser.uid, "commuter").then(addCommuterToDatabase)
    }
  }

  return (
    <>
      <AppBar />
      <div className="flex h-screen w-full items-center justify-center px-5 pt-16">
        <div className="w-full max-w-md">
          <form className="mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 drop-shadow-lg">
            <h2 className="mb-4 font-searchBar text-2xl font-semibold sm:text-3xl">
              Log In
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
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                className="focus:shadow-outline mb-1 w-full rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Sign In
              </button>
              <Link
                className="ml-auto text-blue-800 hover:underline"
                to="/help"
              >
                Forgot password?
              </Link>
            </div>
            <p className="my-3 flex items-center before:mx-2 before:h-px before:flex-1 before:bg-slate-400 before:content-[''] after:mx-2 after:h-px after:flex-1 after:bg-slate-400 after:content-['']">
              OR
            </p>
            <Button
              className={"min-w-64 relative mx-auto mb-5 w-11/12 sm:w-4/5"}
              buttonStyle={"btn-primary"}
              onClick={signUp}
            >
              <FcGoogle className="absolute left-0 mx-3 text-2xl" />
              Sign in with Google
            </Button>

            <div className=" flex items-center justify-center">
              <p> Don&#39;t have an account? </p>
              <Link
                className="mx-1 font-bold text-blue-600 hover:underline"
                to={"/signup"}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
