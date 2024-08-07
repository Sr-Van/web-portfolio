import { ProjCard } from "../project-card.component";

export const Projects = () => {
  return (
    <section
      className="min-h-screen relative flex flex-col items-start w-full bg-slate-950 z-20"
      id="projects"
    >
      <h1 className="py-20 px-10 text-2xl text-white text-center">Projects</h1>

      <div className="wrapper flex justify-center w-full">
        <ul className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 lg:items-start gap-3 items-center w-full md:w-[600px] lg:w-[950px] xl:w-[1000px] px-4">
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
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="700"
        className="absolute hidden md:block -top-10 right-4 -rotate-45"
      >
        <div className="parallax_css w-40 h-40 bg-gradient-to-r from-slate-800 to-indigo-900 rounded-full relative">
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            className="w-8 h-8 rounded-full bg-purple-500 absolute bottom-3 right-12"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            className="w-7 h-7 rounded-full bg-yellow-500 absolute bottom-10 right-3"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="w-6 h-6 rounded-full bg-sky-500 absolute bottom-20 right-2"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="1100"
            className="w-5 h-5 rounded-full bg-slate-200 absolute top-6 right-8"
          ></div>
          <div className="w-20 h-20 rounded-full bg-slate-950 absolute top-[20%] left-3"></div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="2000"
        className="absolute hidden md:block bottom-32 left-4"
      >
        {/* needed for parallax */}
        <div className="parallax_css ">
          <div
            className="w-20 h-20 rounded-full shadow bg-gradient-to-r from-slate-800 via-blue-500 to-indigo-900 animate-pulse cursor-pointer hover:animate-none bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all"
            title="click me :)"
          ></div>
        </div>
      </div>
    </section>
  );
};
