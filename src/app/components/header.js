import React from "react";

function Header() {
  return (
    <nav className="bg-gray-900 border-solid border-2 border-black dark:bg-gray-900 navbar-expand-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-5 rtl:space-x-reverse"
        >
          <span className="text-white self-center text-4xl md:text-5xl font-semibold whitespace-nowrap tracking-widest flex-shrink-0 dark:text-white">
            <h1>
              Portafolio
            </h1>
          </span>
        </a>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        ></div>
      </div>
    </nav>
  );
}

export default Header;
