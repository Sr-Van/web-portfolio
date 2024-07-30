import Icon from "./icon";

export const ContactInfos = () => {
  return (
    <ul
      data-aos="fade-up"
      className="flex flex-col p-3 gap-2 w-full justify-center items-center"
    >
      <li className="rounded w-full max-w-[500px] shadow-inner shadow-slate-600 bg-slate-300 p-2 text-black flex justify-start items-center">
        <Icon name="bxs-envelope" size="24px" />
        <span className="ml-2">
          <a href="mailto:contato@vanderson-dev.com" title="Click to mail">
            contato@vanderson-dev.com
          </a>
        </span>
      </li>
      <li className="rounded w-full max-w-[500px] shadow-inner shadow-slate-600 bg-slate-300 p-2 text-black flex justify-start items-center">
        <Icon name="bxl-github" size="24px" />
        <span className="ml-2">
          <a
            href="https://github.com/Sr-van"
            rel="noreferrer"
            target="_blank"
            title="Go to GitHub"
          >
            Github/Sr-van
          </a>
        </span>
      </li>
      <li className="rounded w-full max-w-[500px] shadow-inner shadow-slate-600 bg-slate-300 p-2 text-black flex justify-start items-center">
        <Icon name="bxl-linkedin" size="24px" />
        <span className="ml-2">
          <a
            href="https://www.linkedin.com/in/vanderson-erlan/"
            rel="noreferrer"
            target="_blank"
            title="Go to Linkedin"
          >
            Linkedin/Vanderson-Erlan
          </a>
        </span>
      </li>
    </ul>
  );
};
