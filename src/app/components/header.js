import React from "react";

function Header() {
  return (
    <nav className="bg-gray-900 border-solid border-2 border-black dark:bg-gray-900 navbar-expand-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <h1 className="text-white self-center text-4xl md:text-5xl font-semibold whitespace-nowrap tracking-widest flex-shrink-0 dark:text-white">Portafolio</h1>
      </div>
    </nav>
  );
}

export default Header;
