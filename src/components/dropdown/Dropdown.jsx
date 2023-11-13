

import { useState } from "react";

const Dropdown = ({children, title}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative inline-block text-left mt-2 lg:ms-10">
        <div>
          <button
            type="button"
            className="inline-flex w-56 justify-center gap-x-1.5 bg-[#B8FF9F] hover:bg-[#99fc77] px-3 py-2 border-black border-2 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setOpen(!open)}
          >
            {title}
            <svg
              className="mt-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white focus:outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] border-black border-2 divide-y divide-black ${!open ? 'hidden' : ''}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            >
          <div role="none">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;


  