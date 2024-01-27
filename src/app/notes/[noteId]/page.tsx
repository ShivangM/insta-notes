// import NoteSection from "@/components/purchase note/NoteSection";
import BuyNow from '@/components/post/BuyNow';
import Preview from '@/components/post/Preview';
import Price from '@/components/post/Price';
import Rating from '@/components/post/Rating';
import Terms from '@/components/post/Terms';
import { Note, PostFetchedResponse } from '@/domain/entities/Note';
import React from 'react';

type Props = {
  params: {
    noteId: string;
  };
};

const page = async ({ params: { noteId } }: Props) => {
  const res: PostFetchedResponse = await fetch(
    `http://127.0.0.1:8000/api/posts/${noteId}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  ).then((res) => res.json());

  const post = res.post;

  const {
    name,
    description,
    category,
    created_at,
    created_by,
    price,
    thumbnail,
    terms,
  } = post;

  return (
    <main className="container mx-auto p-10">
      <div className="flex flex-wrap mb-24 -mx-4">
        <Preview />
        <div className="w-full px-4 md:w-1/2">
          <div className="lg:pl-20">
            <div className="mb-6 space-y-6">
              <span className="px-2.5 py-0.5 text-xs bg-gray-700 rounded-xl text-gray-200">
                {category.name}
              </span>

              <div className="">
                <h2 className="max-w-xl text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                  {name}
                </h2>
                <p>{description}</p>
              </div>

              <Rating />

              <p className="inline-block text-2xl font-semibold text-gray-700">
                <Price usdPrice={price} />
                <span className="ml-3 text-base font-normal text-gray-500">
                  ${price}
                </span>
              </p>
            </div>

            <Terms terms={terms} />

            <BuyNow />
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
