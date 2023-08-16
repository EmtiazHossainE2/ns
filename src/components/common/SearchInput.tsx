import React, { useState } from 'react'

const SearchInput: React.FC = () => {
  const [isToggleOn, setIsToggleOn] = useState(false)

  // Function to toggle the "All" button
  const handleToggle = () => {
    setIsToggleOn(!isToggleOn)
  }

  return (
    <div className="flex h-[48px] items-center rounded-lg border bg-[#F4F5F9] p-2 md:w-full lg:w-[320px] xl:w-[420px] big_Ns:w-[575px] extraBig_Ns:w-[676px] large_Ns:w-[825px]">
      {/* Search icon */}
      <div className="flex h-12 w-12 items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M7.71 13.92C11.1397 13.92 13.92 11.1397 13.92 7.71C13.92 4.28031 11.1397 1.5 7.71 1.5C4.28031 1.5 1.5 4.28031 1.5 7.71C1.5 11.1397 4.28031 13.92 7.71 13.92Z"
            stroke="#81818F"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4998 16.4998L12.0898 12.0898"
            stroke="#81818F"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search"
        className="flex-grow bg-transparent py-1 text-[#81818F] outline-none"
      />
      {/* "All" button */}
      <button
        onClick={handleToggle}
        className={`flex h-12 w-12 items-center justify-center ${
          isToggleOn ? ' text-white' : ''
        }`}
      >
        {/* Text next to the "All" button */}
        <span className="pr-1">All</span>
        {/* Dropdown icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.25 6.875L10 13.125L3.75 6.875"
            stroke="#25252E"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default SearchInput
