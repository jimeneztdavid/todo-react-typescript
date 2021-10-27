import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterForm() {

    return (
        <form action="#">
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center">Register a new account</h1>

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

              <div className="flex flex-col space-y-1">
                  <input
                    type="password"
                    name="password-confirmation"
                    id="password-confirmation"
                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                    placeholder="Password"
                  />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                  >Sign up</button>
              </div>

              <Link
                to="/login"
                className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
              >I have an account</Link>
            </div>
        </form> 
    )
}
