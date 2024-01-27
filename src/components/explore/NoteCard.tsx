import { Note } from '@/domain/entities/Note';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

type Props = {
  note: Note;
};

const NoteCard = ({ note }: Props) => {
  const {
    name,
    category,
    price,
    description,
    thumbnail,
    id,
    created_by,
    created_at,
  } = note;

  return (
    <div>
      <div className="max-w-lg p-4 shadow-md  rounded-lg">
        <div className="flex justify-between pb-4 ">
          <div className="flex items-center">
            <span className="font-bold">{category.name}</span>
          </div>
          <Link rel="noopener noreferrer" href={`/categories/${category.slug}`}>
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
                  src={'https://source.unsplash.com/100x100/?portrait'}
                  width={200}
                  height={100}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                  <Link
                    rel="noopener noreferrer"
                    href={`/users/${created_by.username}`}
                    className="text-sm font-semibold"
                  >
                    {created_by.username}
                  </Link>
                  <span className="text-xs ">
                    {moment(created_at).format('DD/MM/YYYY')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Link
              rel="noopener noreferrer"
              href={`/notes/${id}`}
              className="block hover:underline"
            >
              <h3 className="text-xl font-semibold ">{name}</h3>
            </Link>

            <p className="text-lg">ETH {price}</p>
            <p className="leadi ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
