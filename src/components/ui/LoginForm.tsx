import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthContext'

export default function LoginForm() {
    const { currentUser }: any = useAuth();

    return (
        <form action="#">
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center">Log in to your account: {currentUser}</h1>

              <div className="flex flex-col space-y-1">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Username"
                  />
              </div>

              <div className="flex flex-col space-y-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Password"
                  />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  {/* <a href="javascript:;" className="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a> */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                  >Log In</button>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <Link
                    to="/register"
                    className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                  >Create an account!</Link>
              </div>
            </div>
        </form>
    )
}
