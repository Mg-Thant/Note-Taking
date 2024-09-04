import React from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <section className="w-4/6 px-10 mt-10 mx-auto">
      <div className="border border-t-4 border-t-teal-600 shadow-slate-400 shadow-lg p-3">
      <div className="flex justify-between">
        <h3 className="text-3xl font-medium">Lorem ipsum dolor sit amet.</h3>
        <Link to={"/"}>
          <ArrowLeftEndOnRectangleIcon width={40} className="text-teal-600" />
        </Link>
      </div>
        <p className="text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          temporibus reprehenderit modi veritatis quam, obcaecati quidem
          quibusdam alias nobis delectus dicta, error officiis facere unde
          adipisci doloribus architecto, quisquam incidunt.
        </p>
      </div>
    </section>
  );
};

export default Details;
