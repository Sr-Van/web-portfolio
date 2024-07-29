import { SkillsList } from "../skillslist.component";

export const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col items-start w-full bg-slate-950" id="skills">
        <h1 className="text-2xl text-white text-center py-20 px-10">
            Skills
        </h1>

        <SkillsList />
    </section>
  );
}