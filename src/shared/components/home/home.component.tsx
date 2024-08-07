import { Stacks } from "../stacks/stacks.component";

export default function Home() {
  return (
    <section
      className="home relative flex flex-col gap-2 items-center justify-center h-screen"
      id="home"
    >
      <div className="w-full flex flex-col md:flex-row md:relative md:w-6/12 lg:w-4/12 xl:w-3/12">
        <div className="w-2/3 md:flex md:justify-center md:items-center">
          <h1
            className="text-2xl text-white text-center flex flex-col items-end"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Hi, I'm
            <span className="text-4xl munich font-bold text-purple-600">
              Vanderson
            </span>
            <small className="text-xs text-slate-400">Web Developer</small>
          </h1>
        </div>

        <figure
          className="w-2/3"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <img
            className="rounded-sm md:rounded-full  h-40 w-40 ml-auto"
            src="https://avatars.githubusercontent.com/u/121509707?v=4"
            alt="foto"
          />
        </figure>

        <Stacks />
      </div>

      <div className="blocks hidden md:block absolute bottom-[90px] left-7 w-[240px] h-[100px] parallax_html">
        <div className="grid grid-cols-4 grid-rows-3 gap-1">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="bg-transparent col-span-3"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-transparent col-span-2"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="parallax_html_block bg-gradient-to-r from-indigo-500 to-purple-500 h-5 border-4 border-purple-500"
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-transparent"
          ></div>
        </div>
      </div>
    </section>
  );
}
