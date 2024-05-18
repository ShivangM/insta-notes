'use client';
import ConnectWallet from '@/components/common/ConnectWallet';
import { NoteBase } from '@/domain/entities/Note';
import useUserStore from '@/store/userStore';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';

const page = () => {
  const [fetchUserPosts, myPosts, addPost, userData] = useUserStore((state) => [
    state.fetchUserPosts,
    state.myPosts,
    state.addPost,
    state.userData,
  ]);

  useEffect(() => {
    if (userData) {
      fetchUserPosts(userData.id);
    }
  }, [userData]);

  const { address } = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NoteBase>();

  const onSubmit: SubmitHandler<NoteBase> = async (data) => {
    const res = await addPost(data);
    if (res) {
      if (!address) {
        toast.error('Please connect your wallet!');
        return;
      }
      reset();
    }
  };

  return (
    <div className="mx-auto container p-10 space-y-8">
      <ConnectWallet />

      <div className="grid grid-cols-2 gap-10">
        <div className="shadow-lg rounded-lg p-10 w-full">
          <h3 className="text-lg font-semibold">My Sharables</h3>
          <div className="">
            {myPosts.length > 0 ? (
              myPosts.map((post) => {
                return (
                  <Link href={`/notes/${post.id}`}>
                    <div className="p-6 rounded-xl shadow-lg w-full">
                      <p className="font-bold">{post.name}</p>
                      <p>{post.description}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div>No posts found.</div>
            )}
          </div>
        </div>

        <div className="shadow-lg rounded-lg p-10 w-full">
          <h3 className="text-lg font-semibold">Share with world</h3>
          <p>Share your docs securely to world with you in control!</p>

          <form onSubmit={handleSubmit(onSubmit)} className="py-6 space-y-4">
            <div className="">
              <label htmlFor="username" className="self-start font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required.' })}
                className="flex w-full bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
              />
            </div>

            <div className="">
              <label htmlFor="description" className="self-start font-semibold">
                Description
              </label>
              <textarea
                id="description"
                {...register('description', {
                  required: 'Description is required.',
                })}
                className="flex w-full bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
              />
            </div>

            <div className="">
              <label htmlFor="price" className="self-start font-semibold">
                Price (In USD)
              </label>
              <input
                id="description"
                type="number"
                {...register('price', {
                  required: 'Price is required.',
                })}
                className="flex w-full bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
              />
            </div>

            <div className="">
              <label htmlFor="username" className="self-start font-semibold">
                Category
              </label>
              <input
                id="name"
                type="text"
                {...register('category', { required: 'Name is required.' })}
                className="flex w-full bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
              />
            </div>

            <div className="">
              <label htmlFor="username" className="self-start font-semibold">
                Thumbnail
              </label>
              <input
                id="name"
                type="text"
                {...register('thumbnail', {
                  required: 'Thumbnail is required.',
                })}
                className="flex w-full bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative disabled:animate-pulse w-full rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Create</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
