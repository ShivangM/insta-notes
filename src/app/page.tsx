import NoteCard from '@/components/explore/NoteCard';
import notes from '../utils/notes.json';

async function Home() {
  const res = await fetch('http://localhost:8000/api/posts/', {
    method: 'GET',
  }).then((res) => res.json());

  console.log(res);

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

export default Home;
