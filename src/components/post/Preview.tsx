import React from 'react';

type Props = {};

const Preview = (props: Props) => {
  return (
    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
      <div className="sticky top-0 overflow-hidden ">
        <div className="relative mb-6 lg:mb-10 lg:h-96">
          <div className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </div>
          <img
            className="object-contain w-full lg:h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkww7FONxpZpsG-pMvECCtx7qaoOYLr18QFp7QDVNJC4lZl1xgLYWZU7VMM-uVup-5iA4&usqp=CAU"
            alt=""
          />
          <div className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex-wrap hidden -mx-2 md:flex">
          <div className="w-1/2 p-2 sm:w-1/4">
            <div className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300">
              <img
                className="object-contain w-full lg:h-28"
                src="https://www.wikihow.com/images/thumb/8/8f/Scientific-Research-Paper.png/340px-Scientific-Research-Paper.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 p-2 sm:w-1/4">
            <div className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300">
              <img
                className="object-contain w-full lg:h-28"
                src="https://www.wikihow.com/images/thumb/8/8f/Scientific-Research-Paper.png/340px-Scientific-Research-Paper.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 p-2 sm:w-1/4">
            <div className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300">
              <img
                className="object-contain w-full lg:h-28"
                src="https://www.wikihow.com/images/thumb/8/8f/Scientific-Research-Paper.png/340px-Scientific-Research-Paper.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 p-2 sm:w-1/4">
            <div className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300">
              <img
                className="object-contain w-full lg:h-28"
                src="https://www.wikihow.com/images/thumb/8/8f/Scientific-Research-Paper.png/340px-Scientific-Research-Paper.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
