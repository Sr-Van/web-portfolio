import { ProjCard } from "../project-card.component";

export const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-start w-full bg-slate-950" id="projects">
        <h1 className="py-20 px-10 text-2xl text-white text-center ">
            Projects
        </h1>

        <ul className="flex flex-col gap-3 items-center w-full">
          <li>
            <ProjCard 
              title="Projeto 1"
              description="Descrição do projeto 1"
              img="https://avatars.githubusercontent.com/u/121509707?v=4"
              stacks={["Angular", "Typescript", "Git", "TailwindCSS"]}
              url=""
              repo="https://github.com/Sr-Van"
            />
          </li>
        </ul>
    </section>
  );
}