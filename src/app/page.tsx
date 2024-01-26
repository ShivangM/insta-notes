import Link from "next/link";
import Image from "next/image";
import NoteCard from "@/components/explore/NoteCard";
import notes from "../utils/notes.json";

export default function Home() {
  return (
    <main className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        {notes.map((note, idx) => {
          return <NoteCard note={note} key={idx} />;
        })}
      </div>
    </main>
  );
}
