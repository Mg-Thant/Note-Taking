import React from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Error_message from "./Error_message";

const NoteForm = ({ isCreate }) => {
  const initialValues = {
    title: "",
    content: "",
  };

  const NoteFormSchema = Yup.object({
    title: Yup.string()
      .min(4, "Title is too short!")
      .max(30, "Title is too long!")
      .required("Title is required!"),
    content: Yup.string()
      .min(5, "Content is too short!")
      .required("Content is required!"),
  });

  const submitHandler = (values) => {
    console.log(values)
  }

  return (
    <section className="w-3/6 mx-auto">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-center">
          {isCreate ? "Create New Note" : "Edit Note"}
        </h1>
        <Link to={"/"}>
          <ArrowLeftEndOnRectangleIcon
            width={40}
            className="text-teal-600 text-right"
          />
        </Link>
      </div>
      <Formik initialValues={initialValues} validationSchema={NoteFormSchema} onSubmit={submitHandler}>
        <Form>
          <div className="mb-3">
            <label htmlFor="title" className="font-medium block mb-1">
              Note Title
            </label>
            <Field
              type="text"
              name="title"
              id="title"
              className="text-lg border-2 border-teal-600 py-1 px-2 w-full rounded-lg"
            />
          </div>
          <Error_message name="title" />
          <div className="mb-3">
            <label htmlFor="content" className="font-medium block mb-1">
              Note content
            </label>
            <Field
              as="textarea"
              rows={6}
              type="text"
              name="content"
              id="content"
              className="text-lg border-2 border-teal-600 py-1 px-2 w-full rounded-lg"
            />
            <Error_message name="content" />
          </div>
          <button className="text-white bg-teal-600 py-3 font-medium w-full text-center rounded-md" type="submit">
            Save Note
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default NoteForm;
