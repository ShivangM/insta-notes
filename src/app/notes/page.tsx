import NoteCard from "@/components/explore/NoteCard";
import React from "react";
import notes from "../../utils/notes.json";

const page = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        {notes.map((note, idx) => {
          return <NoteCard note={note} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default page;
