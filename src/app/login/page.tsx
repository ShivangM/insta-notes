"use client";
import { LoginParams } from "@/domain/entities/User";
import useUserStore from "@/store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginParams>();

  const navigation = useRouter();

  const [loginUser] = useUserStore((state) => [state.loginUser]);

  const onSubmit: SubmitHandler<LoginParams> = async (data) => {
    const res = await loginUser(data);
    if (res) {
      navigation.push("/dashboard");
      reset();
    }
  };

  return (
    <main className="container mx-auto py-10">
      <div className="flex items-center justify-center text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg"
        >
          <label
            htmlFor="username"
            className="self-start text-xs font-semibold"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "User is required." })}
            className="flex bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
          />
          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password", { required: "Password is required." })}
            type="password"
            className="flex bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
          />

          <button
            type="submit"
            className="relative my-10 rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Login</span>
          </button>

          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <Link rel="noopener noreferrer" href="/">
              Forgot Password?
            </Link>
            <span className="">/</span>
            <Link rel="noopener noreferrer" href="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
