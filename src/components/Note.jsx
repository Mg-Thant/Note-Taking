import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import formatISO9075 from "date-fns/formatISO9075";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Note = ({ note, fetchNotes }) => {

  const deleteNote = async () => {
    const res = await fetch(`${import.meta.env.VITE_API}/delete/${note._id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      toast.success("Post Deleted", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        onClose: () => {
          fetchNotes();
        },
      });
    }
  };

  return (
    <div className="w-1/4 h-fit border border-t-4 border-t-teal-600 shadow-slate-400 shadow-lg p-3">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h3 className="text-xl font-medium mb-5 uppercase">{note.title.slice(0, 20)}</h3>
      <p className="text-md mb-4">{note.content.slice(0, 100)}</p>
      <hr />
      <div className="flex item-center justify-between gap-1 mt-2">
        <p className="text-sm">
          {formatISO9075(note.createdAt, { representation: "date" })}
        </p>
        <div className="flex items-center justify-end">
          <TrashIcon
            width={25}
            className="text-red-600 cursor-pointer"
            onClick={deleteNote}
          />
          <Link to={`/edit/${note._id}`}>
            <PencilSquareIcon width={25} className="text-teal-600" />
          </Link>
          <Link to={`/notes/${note._id}`}>
            <EyeIcon width={25} className="text-teal-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
