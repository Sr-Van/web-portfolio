import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="1500"
      className="px-4 flex flex-wrap py-6 shadow-xl backdrop-blur-sm fixed top-0 left-0 right-0 z-50"
    >
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input
        className="hidden"
        type="checkbox"
        id="menu-toggle"
        onClick={toggleMenu}
      />

      <div
        className={`md:flex md:items-center md:w-auto transition-all w-full ${
          open
            ? "flex flex-col justify-center items-center init-anim"
            : "hidden h-0"
        }`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:text-sm hover:text-purple-500 border-b-2 border-b-transparent hover:border-b-purple-700 text-center transition-all text-xl text-white [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] tracking-widest"
                href="#home"
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false);
                  }, 350);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:text-sm hover:text-purple-500 border-b-2 border-b-transparent hover:border-b-purple-700 text-center transition-all text-xl text-white [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] tracking-widest"
                href="#projects"
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false);
                  }, 350);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:text-sm hover:text-purple-500 border-b-2 border-b-transparent hover:border-b-purple-700 text-center transition-all text-xl text-white [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] tracking-widest"
                href="#skills"
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false);
                  }, 350);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:text-sm hover:text-purple-500 border-b-2 border-b-transparent hover:border-b-purple-700 text-center transition-all md:mb-0 mb-2 text-xl text-white [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] tracking-widest"
                href="#contact"
                onClick={() => {
                  setTimeout(() => {
                    setOpen(false);
                  }, 350);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
