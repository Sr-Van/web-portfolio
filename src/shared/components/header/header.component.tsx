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
      className="lg:px-16 px-4 flex flex-wrap py-6 shadow-sm backdrop-blur-sm fixed top-1 left-0 right-0 z-50"
    >
      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-white"
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
          open ? "block init-anim" : "hidden"
        }`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block text-xl" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block text-xl" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block text-xl" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-xl"
                href="#contact"
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
