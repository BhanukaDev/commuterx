/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
            <Link
              className="underline text-blue-800 mb-5 w-full text-right"
              to="/help"
            >
              Forgot password?
            </Link>
            <Button
              className={"w-3/5 mx-auto"}
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
  );
};
