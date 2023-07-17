/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { Button } from "../components/Button"

export const Login = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="w-full max-w-md">
          <form className="mb-4 flex flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md">
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

            <div className="flex items-center justify-center">
              <button
                className="focus:shadow-outline mb-2 w-full rounded bg-blue-500 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Login
              </button>
            </div>
            <Link
              className="mb-5 w-full text-right text-blue-800 underline"
              to="/help"
            >
              Forgot password?
            </Link>
            <Button
              className={"mx-auto w-3/5"}
              buttonStyle={"btn-secondary"}
              buttonColor="bg-green-600"
              linkpath={"/signup"}
              type={"reset"}
            >
              Create new account
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
