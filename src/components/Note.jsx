import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="w-1/4 border border-t-4 border-t-teal-600 shadow-slate-400 shadow-lg p-3">
      <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet.</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        temporibus reprehenderit modi veritatis quam, obcaecati quidem quibusdam
        alias nobis delectus dicta, error officiis facere unde adipisci
        doloribus architecto, quisquam incidunt.
      </p>
      <div className="flex item-center justify-end gap-1">
        <TrashIcon width={25} className="text-red-600" />
        <Link to={"/edit/1"}>
          <PencilSquareIcon width={25} className="text-teal-600" />
        </Link>
        <Link to={"/notes/1"}>
          <EyeIcon width={25} className="text-teal-600" />
        </Link>
      </div>
    </div>
  );
};

export default Note;
