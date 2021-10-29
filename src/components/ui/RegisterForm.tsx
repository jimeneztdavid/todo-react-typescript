import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface formValues {
  email: string,
  password: string,
  passwordConfirmation: string
}

export default function RegisterForm() {
  const auth = getAuth();

  const initialValues: formValues = {
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const register = (values: formValues, actions: FormikHelpers<formValues>) => {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
        // ..
      });


    actions.setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={register}
    >

      <Form action="#" >
          <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
            <h1 className="font-bold text-xl text-center">Register a new account</h1>

            <div className="flex flex-col space-y-1">
                <Field
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  id="email"
                  name="email"
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

            <div className="flex flex-col space-y-1">
                <Field
                  name="passwordConfirmation"
                  id="passwordConfirmation"
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
      </Form> 
    </Formik>
  )
}
