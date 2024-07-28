import { ProjCard } from "../project-card.component";

export const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col items-start w-full bg-slate-950" id="projects">
        <h1 className="py-20 px-10 text-2xl text-white text-center ">
            Projects
        </h1>

        <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start gap-3 items-center w-full px-4">
          <li className="md:col-span-2 lg:row-span-2 h-full">
            <ProjCard 
              title="E-commerce Val"
              description="Um e-commerce para uma loja pequena de itens variados e roupas."
              img="valmagazine.png"
              stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
              url="https://valmagazine.netlify.app/products"
              repo="https://github.com/Sr-Van/e-commerce-val"
              isPrimary={true}
            />
          </li>

          <li>
            <ProjCard 
              title="E-commerce Val"
              description="Um e-commerce para uma loja pequena de itens variados e roupas."
              img="valmagazine.png"
              stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
              url="https://valmagazine.netlify.app/products"
              repo="https://github.com/Sr-Van/e-commerce-val"
            />
          </li>

          <li>
            <ProjCard 
              title="E-commerce Val"
              description="Um e-commerce para uma loja pequena de itens variados e roupas."
              img="valmagazine.png"
              stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
              url="https://valmagazine.netlify.app/products"
              repo="https://github.com/Sr-Van/e-commerce-val"
            />
          </li>
          <li>
            <ProjCard 
              title="E-commerce Val"
              description="Um e-commerce para uma loja pequena de itens variados e roupas."
              img="valmagazine.png"
              stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
              url="https://valmagazine.netlify.app/products"
              repo="https://github.com/Sr-Van/e-commerce-val"
            />
          </li>
          <li>
            <ProjCard 
              title="E-commerce Val"
              description="Um e-commerce para uma loja pequena de itens variados e roupas."
              img="valmagazine.png"
              stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
              url="https://valmagazine.netlify.app/products"
              repo="https://github.com/Sr-Van/e-commerce-val"
            />
          </li>
        </ul>
    </section>
  );
}