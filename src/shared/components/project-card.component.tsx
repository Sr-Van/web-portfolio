import Icon from "./icon";

interface ProjCardProps {
  title?: string;
  description?: string;
  stacks?: string[];
  img?: string;
  url?: string;
  repo?: string;
}

export const ProjCard = (props: ProjCardProps) => {
  console.log(props);
  return (
    <article 
    className="block rounded-md bg-purple-700 max-w-[300px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <img className="rounded-t-md w-full" src={props.img} alt={props.title} />

      <div className="infos flex flex-col items-start p-3">
        <h1 className="text-xl">{props.title}</h1>  
        <p className="text-slate-200 text-sm">{props.description}</p>
        <ul className="flex gap-1">
          {props.stacks?.map((stack) => (
            <li className="text-sm text-slate-200" key={stack}>
              {stack}
            </li>
          ))}
        </ul>

        <span className="flex justify-between items-center w-full mt-3">
          <a 
          rel="noreferrer" target="_blank" className="text-xs text-slate-200 p-3 shadow rounded-lg bg-slate-800 hover:bg-slate-700 transition-all" href={props.url}>View Project</a>
          <a rel="noreferrer" target="_blank" href={props.repo} title="Ver repositorio">
            <Icon name="bxl-github" size="30px" color="#000" />
          </a>
        </span>
      </div>
    </article>
  );
}