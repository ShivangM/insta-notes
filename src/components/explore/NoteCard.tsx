import { Note } from "@/domain/entities/Note";
import Link from "next/link";
import Image from "next/image";

type Props = {
  note: Note;
  key: number;
};

const NoteCard = ({ note, key }: Props) => {
  const { name, category, price, description, image, id } = note;
  return (
    <Link href={`/notes/${id}`}>
      <div key={key} className="max-w-lg p-4 shadow-md  rounded-lg">
        <div className="flex justify-between pb-4 ">
          <div className="flex items-center">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize "
            >
              {category}
            </Link>
          </div>
          <Link rel="noopener noreferrer" href="#">
            See All
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Image
              src="https://source.unsplash.com/random/480x360/?4"
              height={100}
              width={200}
              alt={name}
              className="block object-cover object-center w-full rounded-md h-72 "
            />
            <div className="flex items-center text-xs">
              {/* <span>6 min ago</span> */}
              <div className="flex space-x-4">
                <Image
                  alt=""
                  src="https://source.unsplash.com/100x100/?portrait"
                  width={200}
                  height={100}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm font-semibold"
                  >
                    Leroy Jenkins
                  </Link>
                  <span className="text-xs ">4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold ">{name}</h3>
            </Link>
            <p className="leadi ">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
