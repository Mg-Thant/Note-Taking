import React from "react";
import PlusIcon from "../components/PlusIcon";

import Note from "../components/Note";

const index = () => {
  return (
    <section className="flex gap-6 mt-10 mx-auto flex-wrap justify-center w-10/12">
      <Note />
      <Note />
      <Note />
      <PlusIcon />
    </section>
  );
};

export default index;
