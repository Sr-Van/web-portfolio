import { ProjCard } from "../project-card.component";

export const Projects = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-start w-full bg-slate-950"
      id="projects"
    >
      <h1 className="py-20 px-10 text-2xl text-white text-center ">Projects</h1>

      <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start gap-3 items-center w-full px-4">
        <li
          className="md:col-span-2 lg:row-span-2 h-full"
          data-aos="zoom-in-down"
          data-aos-duration="800"
        >
          <ProjCard
            title="Marketplace OTP2P"
            howManyImgs={7}
            description="Um e-commerce para uma loja pequena de itens variados e roupas."
            img="otp2p"
            stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
            url="https://otp2p.shop"
            repo="https://github.com/Sr-Van/otp2p-frontend"
            isPrimary={true}
          />
        </li>

        <li
          data-aos="fade-down"
          data-aos-delay="700"
          data-aos-easing="ease-out"
          data-aos-duration="1000"
        >
          <ProjCard
            title="E-commerce Val"
            howManyImgs={4}
            description="Um e-commerce para uma loja pequena de itens variados e roupas."
            img="valmaga"
            stacks={["Angular", "Typescript", "Git", "Bootstrap"]}
            url="https://valmagazine.netlify.app/products"
            repo="https://github.com/Sr-Van/e-commerce-val"
          />
        </li>

        <li
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="700"
        >
          <ProjCard
            title="Technical Test"
            howManyImgs={4}
            description="A showcase to test my knowledge on Angular to an interview."
            img="teste"
            stacks={["Angular", "Typescript", "Git", "HTML5", "CSS3"]}
            url="https://teste-tecnico-nextgen.netlify.app/home"
            repo="https://github.com/Sr-Van/teste-tecnico-front-end-VandersonErlan"
          />
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="700"
        >
          <ProjCard
            title="Coffee Bean"
            howManyImgs={5}
            description="A landing page for a coffee store, using some parallax and other animations with Angular."
            img="coffee"
            stacks={["Angular", "Typescript", "Git", "HTML5", "CSS3"]}
            url="https://urcoffeebean.netlify.app"
            repo="https://github.com/Sr-Van/coffee-bean"
          />
        </li>
        <li
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-delay="700"
        >
          <ProjCard
            title="Dashboard Internet"
            howManyImgs={6}
            description="A dashboard to control your internet provider. Make from scretch with only Js, HTML5 and CSS3."
            img="srvsys"
            stacks={["Javascript", "Git", "HTML5", "CSS3"]}
            url="https://srv-system.netlify.app/index.html"
            repo="https://github.com/Sr-Van/srv-system"
          />
        </li>
      </ul>
    </section>
  );
};
