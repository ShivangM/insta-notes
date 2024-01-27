import NoteCard from "@/components/explore/NoteCard";
import { Note } from "@/domain/entities/Note";
import React from "react";

type Props = {
  params: {
    categoryId: string;
  };
};

const page = async ({ params: { categoryId } }: Props) => {
  const allNotes = await fetch("http://127.0.0.1:8000/api/posts", {
    method: "GET",
    cache: "no-cache",
  }).then((res) => res.json());
  const posts = allNotes.posts;

  return (
    <div className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        <div>
          {posts.map((post: Note) => {
            return <NoteCard note={post} key={post.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
