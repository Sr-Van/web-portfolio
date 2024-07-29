import Icon from "./icon";

export const SkillsList = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center gap-2 p-4'>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2 transition-all">
        <Icon name="bxl-angular" size='200px' color='#d61319'/>
        <p className="text-center text-white">Angular is the most powefull web framework, i use for big projects and it became so simple after you start to get used to it.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-typescript" size='200px' color='#1275ed'/>
        <p className="text-center text-white">Is a superset of JavaScript. Required to use Angular, it makes web development easier and concret.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-tailwind-css" size='200px' color='#0e9bed'/>
        <p className="text-center text-white">A great css library that allows me to make faster and modern layouts.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-javascript" size='200px' color='yellow'/>
        <p className="text-center text-white">The main language behind web development. i've mastered a good part of JS.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-html5" size='200px' color='#ff6302'/>
        <p className="text-center text-white">The structure of web pages.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-css3" size='200px' color='#0e9bed'/>
        <p className="text-center text-white">Dominating CSS styles is dominating front-end. i like to use a lot of css to solve problembs.</p>
      </article>
      <article className="skill_card w-full h-full text-center max-h-[300px] md:max-h-[200px] md:w-[100px] overflow-hidden bg-gradient-to-r from-slate-800 to-indigo-900 rounded p-2">
        <Icon name="bxl-nodejs" size='200px' color='green'/>
        <p className="text-center text-white">I learned a good NodeJS part to build full stack web aplications. its not my focus and yet i do a great job.</p>
      </article>
    </div>
  );      
}
