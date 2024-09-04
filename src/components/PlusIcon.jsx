import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PlusIcon = () => {
  return (
    <Link to={"/create"} className="fixed bottom-14 right-64">
      <PlusCircleIcon width={70} className="text-teal-600" />
    </Link>
  );
};

export default PlusIcon;
