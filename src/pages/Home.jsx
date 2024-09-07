import React, { useEffect, useState } from "react";

import Note from "../components/Note";
import { Loading } from "./index";

const index = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = () => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API}/notes`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <section className="flex gap-6 mt-10 mx-auto flex-wrap justify-center w-10/12">
      {loading ? (
        <Loading />
      ) : notes.length > 0 ? (
        notes.map((note) => <Note key={note._id} note={note} fetchNotes={fetchNotes} />)
      ) : (
        <p className="text-xl font-bold">Create your note!</p>
      )}
    </section>
  );
};

export default index;
