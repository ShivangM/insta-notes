import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gray-50">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <Image src="/logo.svg" height={100} width={200} alt="Insta Notes" />

          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link rel="noopener noreferrer" href="#">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" href="#">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link rel="noopener noreferrer" href="#">
              Instagram
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" href="#">
              Facebook
            </Link>
          </li>
          <li>
            <Link rel="noopener noreferrer" href="#">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
