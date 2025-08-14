import Icon from "./icon";

interface ProjCardProps {
  title?: string;
  description?: string;
  stacks?: string[];
  img?: string;
  howManyImgs: number;
  url: string;
  repo?: string;
  isPrimary?: boolean | false;
}

export const ProjCard = (props: ProjCardProps) => {
  let wait = false;

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <article
      className={`block rounded-md border-2 border-purple-500/60 bg-gradient-to-tr from-purple-500/50 to-indigo-700/50 w-[340px] sm:w-[450px] md:w-full h-full ${
        props.isPrimary ? "md:max-w-[1000px]" : ""
      } shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
    >
      <img
        className={`${"card-" + props.img} rounded-t-md w-full ${
          props.isPrimary
            ? "max-h-[200px] md:max-h-[800px] h-[500px]"
            : "h-[200px]"
        } object-cover`}
        src={`/img/${props.img}.png`}
        alt={props.title}
        onMouseMove={() => {
          if (!wait) {
            hoverOnImg(props);
            wait = true;
            setTimeout(() => {
              wait = false;
            }, 700);
          }
        }}
      />

      <div className="infos flex flex-col items-start p-3 h-full max-h-[250px]">
        <h1
          className={`text-xl text-purple-500 [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] ${
            props.isPrimary ? "munich" : ""
          }`}
        >
          {props.title}
        </h1>
        <p className="text-slate-200 text-sm text-start">{props.description}</p>
        <ul className="flex gap-1 mt-3">
          {props.stacks?.map((stack) => (
            <li className="text-sm text-slate-200" key={stack}>
              {stack}
            </li>
          ))}
        </ul>

        <span
          className={`flex justify-between items-center w-full mt-3
          }`}
        >
          <button
            rel="noreferrer"
            className={`text-xs text-slate-200 p-3 shadow rounded-lg ${
              props.isPrimary
                ? "md:border-b-4 md:border-slate-800 md:hover:bg-slate-800 md:bg-transparent"
                : ""
            } bg-slate-800 hover:bg-slate-700 transition-all`}
            onClick={
              props.url === "" ? () => handleOpenLink(props.url) : undefined
            }
            disabled={!props.url}
          >
            View Project
          </button>
          <a
            rel="noreferrer"
            target="_blank"
            href={props.repo}
            title="Ver repositorio"
          >
            <Icon name="bxl-github" size="30px" color="#000" />
          </a>
        </span>
      </div>
    </article>
  );
};

const hoverOnImg = (props: ProjCardProps) => {
  const { img, howManyImgs } = props;
  const randomPick = Math.floor(Math.random() * howManyImgs);
  let src = `/img/${img}${randomPick === 0 ? "" : randomPick}.png`;

  document.querySelector(`.card-${img}`)?.setAttribute("src", src);
};
