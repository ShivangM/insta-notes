import NoteCard from '@/components/explore/NoteCard';
import { PostsFetchedResponse } from '@/domain/entities/Note';
import notes from '../utils/notes.json';

async function Home() {
  const res: PostsFetchedResponse = await fetch(
    'http://127.0.0.1:8000/api/posts',
    {
      method: 'GET',
      cache: 'no-cache',
    }
  ).then((res) => res.json());

  const posts = res.posts;

  return (
    <main className="container mx-auto p-10">
      <div className="gap-6 grid grid-cols-4">
        {posts.map((note, idx) => {
          return <NoteCard note={note} key={idx} />;
        })}
      </div>
    </main>
  );
}

export default Home;
