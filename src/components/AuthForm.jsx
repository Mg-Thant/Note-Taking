import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ErrorMessage from "./ErrorMessage";
import { Link, Navigate } from "react-router-dom";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const AuthForm = ({ isLogin }) => {
  const [redirect, setRedirect] = useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const AuthFormSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username is too short")
      .max(15, "Username is too long")
      .required("Username is required!"),
    email: Yup.string()
      .email("Email ,must be email format")
      .required("Email is required!"),
    password: Yup.string()
      .min(4, "Password is too short")
      .required("Password is required"),
  });

  const submitHandler = async (values) => {
    console.log(values);
    if (isLogin) {
    } else {
      const res = await fetch(`${import.meta.env.VITE_API}/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setRedirect(true);
      } else {
        const { errorMessage } = await res.json();
        const message = errorMessage[0].msg;
        toast.error(message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="w-3/6 mx-auto mt-9">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <Link to={"/"}>
          <ArrowLeftEndOnRectangleIcon
            width={40}
            className="text-teal-600 text-right"
          />
        </Link>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={AuthFormSchema}
      >
        {() => (
          <Form>
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="username" className="font-medium block mb-1">
                  Username<span className="text-red-600">*</span>
                </label>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="text-lg border-2 border-teal-600 py-1 px-2 w-full rounded-lg"
                />
                <ErrorMessage name="username" />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="font-medium block mb-1">
                Email<span className="text-red-600">*</span>
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="text-lg border-2 border-teal-600 py-1 px-2 w-full rounded-lg"
              />
              <ErrorMessage name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="font-medium block mb-1">
                Password<span className="text-red-600">*</span>
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="text-lg border-2 border-teal-600 py-1 px-2 w-full rounded-lg"
              />
              <ErrorMessage name="password" />
            </div>
            <button
              className="text-white bg-teal-600 py-3 font-medium w-full text-center rounded-md"
              type="submit"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AuthForm;
