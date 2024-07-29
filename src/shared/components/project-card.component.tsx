import Icon from "./icon";

interface ProjCardProps {
  title?: string;
  description?: string;
  stacks?: string[];
  img?: string;
  howManyImgs: number;
  url?: string;
  repo?: string;
  isPrimary?: boolean | false;
}

export const ProjCard = (props: ProjCardProps) => {
  return (
    <article 
    className={`block rounded-md bg-purple-700 w-full h-full max-w-[350px] ${props.isPrimary? 'md:max-w-[1000px]' : ''} shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}>
      <img className={`${'card-' + props.img} rounded-t-md w-full ${props.isPrimary ? 'max-h-[200px] md:max-h-[800px] h-[500px]' : 'h-[200px]'} object-cover`} src={`/img/${props.img}.png`} alt={props.title} 
      onMouseEnter={() => hoverOnImg(props)} />

      <div className="infos flex flex-col items-start p-3 h-full max-h-[350px]">
        <h1 className={`text-xl ${props.isPrimary ? 'munich' : ''}`}>{props.title}</h1>  
        <p className="text-slate-200 text-sm text-start">{props.description}</p>
        <ul className="flex gap-1 mt-3">
          {props.stacks?.map((stack) => (
            <li className="text-sm text-slate-200" key={stack}>
              {stack}
            </li>
          ))}
        </ul>

        <span className={`flex justify-between items-center w-full ${props.isPrimary ? 'mt-auto' : 'mt-3'}`}>
          <a 
          rel="noreferrer" target="_blank" 
          className={`text-xs text-slate-200 p-3 shadow rounded-lg ${props.isPrimary ? 'md:border-b-4 md:border-slate-800 md:hover:bg-slate-800 md:bg-transparent' : ''} bg-slate-800 hover:bg-slate-700 transition-all`} 
          href={props.url}>View Project</a>
          <a rel="noreferrer" target="_blank" href={props.repo} title="Ver repositorio">
            <Icon name="bxl-github" size="30px" color="#000" />
          </a>
        </span>
      </div>
    </article>
  );
}

const hoverOnImg = (props: ProjCardProps) => {
  const { img, howManyImgs } = props;
  const randomPick = Math.floor(Math.random() * howManyImgs);
  let src = `/img/${img}${randomPick === 0 ? '' : randomPick}.png`;
  console.log(src)

  document.querySelector(`.card-${img}`)?.setAttribute('src', src)
}