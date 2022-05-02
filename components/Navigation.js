import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
            }
          >
            Catherine Siller
          </a>
        </Link>
        <div className='flex items-center'>
          <div className='md:flex lg:flex space-x-4 font-medium text-gray-800 hidden sm:block dark:text-white'>
            <Link href="/about">
              <a
                className={
                  'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
                }
              >
                About
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={
                  'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/resume">
              <a
                className={
                  'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
                }
                href="https://drive.google.com/file/d/1ptJniA7VihQt3uGztr4wTyZrOR-9t3Nc/view?usp=sharing"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
                }
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
