import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { useAuth } from '../../AuthContext'
import {Redirect} from 'react-router-dom'

interface formValues {
  email: string,
  password: string
}

export default function LoginForm() {
  const { login, currentUser, logOut, isLogged }: any = useAuth()
  const initialValues: formValues = {
    email: '',
    password: ''
  }

  const submit = (values: formValues, actions: FormikHelpers<formValues>) => {
    login({
      email: values.email,
      password: values.password
    })
  }

  if(isLogged) {
    return <Redirect to="/" />
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={submit}
      >
      <Form action="#">
          <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
            <h1 className="font-bold text-xl text-center">Log in to your account</h1>

            <div className="flex flex-col space-y-1">
                <Field
                  name="email"
                  id="email"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                />
            </div>

            <div className="flex flex-col space-y-1">
                <Field
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

                <button onClick={logOut} type="button">
                    LOG
                </button>
            </div>
          </div>
      </Form>
    </Formik> 
  )
}
