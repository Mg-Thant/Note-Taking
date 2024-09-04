import React from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const NoteForm = ({ isCreate }) => {
  return (
    <section className="w-3/6 mx-auto">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-center">{ isCreate ? "Create New Note" : "Edit Note" }</h1>
        <Link to={"/"}>
          <ArrowLeftEndOnRectangleIcon
            width={40}
            className="text-teal-600 text-right"
          />
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="font-medium block mb-1">
            Note Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="font-medium block mb-1">
            Note Description
          </label>
          <textarea
            rows={6}
            type="text"
            name="description"
            id="description"
            className="text-lg border-2 border-teal-600 py-1 w-full rounded-lg"
          />
        </div>
        <button className="text-white bg-teal-600 py-3 font-medium w-full text-center rounded-md">
          Save Note
        </button>
      </form>
    </section>
  );
};

export default NoteForm;
