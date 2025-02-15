import { SkillsList } from "../skillslist.component";

export const Skills = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-start w-full overflow-hidden bg-slate-950 pb-10"
      id="skills"
    >
      <h1 className="main_titles py-20 px-10" data-aos="fade-left">
        Skills
      </h1>

      <span
        data-aos="zoom-in"
        data-aos-duration="200"
        data-aos-delay="500"
        className="text-slate-400 flex items-center justify-center w-full p-3"
      >
        <p className="max-w-[780px]">
          Main functions: Create modern and fast web applications from the
          back-end, modeling the API & consuming in Front-end with a good
          workflow. Pragmatic and creative, I'm able to work with pure JS, HTML
          and CSS at the same level as working with a framework or library.
        </p>
      </span>
      <div className="wrapper min-h-[350px] mx-auto" data-aos="fade-left">
        <SkillsList />
      </div>

      <span
        data-aos="zoom-in"
        data-aos-duration="200"
        data-aos-delay="500"
        className="text-slate-400 flex items-center justify-center w-full p-3"
      >
        <p className="max-w-[780px]">
          Others skills: Angular material, RxJS, MongoDB, Express, Nodemailer,
          BootStrap, Git, GitHub, lodash, AOS.
        </p>
      </span>

      <div
        data-aos="fade-up"
        className="mx-auto flex h-[500px] max-w-[80rem] flex-col justify-center rounded-2xl bg-gradient-to-r from-slate-800 to-indigo-900 md:h-[400px] lg:h-[500px] p-4 relative border-4 border-blue-500"
      >
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Soft Skills
        </h1>

        <ul className="flex flex-wrap mx-auto text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-sm px-6">
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Communicative</p>
          </li>

          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Fast solving problems</p>
          </li>

          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Hard-working</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Good team player</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Good interpersonal skills</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Quick Learner</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Intermediate English</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Emphatic</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Patient</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Adaptable</p>
          </li>
          <li className="my-1 flex w-1/2 items-center">
            <svg
              className="mr-2 flex-shrink-0 text-blue-500"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="text-white">Self-confident</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
