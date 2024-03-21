// import Image from 'next/image'

import backgroundImage from './background-auth.jpg'

export function AuthLayout({ children }: any) {
  return (
    <div className="relative flex min-h-full justify-center md:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-3 shadow-xl sm:justify-center md:flex-none md:px-0 md:w-full">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage}
          alt="blue background"
        />
      </div>
    </div>
  )
}