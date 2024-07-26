
import { Stacks } from '../stacks/stacks.component';

export default function Home() {
    return (
        <section className="home flex flex-col gap-2 items-center justify-center h-screen" id="home">
            <div className='w-2/3'>
                <h1 className="text-2xl text-white text-center flex flex-col items-end" data-aos="fade-right" data-aos-duration="800">
                    Hi, I'm 
                    <span className="text-4xl munich font-bold text-purple-600">
                        Vanderson
                    </span> 
                    <small className="text-xs text-slate-400">Web Developer</small>
                </h1>
            </div>

            <figure className='w-2/3' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease">
                <img className='rounded-sm md:rounded-full  h-40 w-40 ml-auto' src="https://avatars.githubusercontent.com/u/121509707?v=4" alt="foto" />
            </figure>

            <Stacks />
        </section>
    );
}