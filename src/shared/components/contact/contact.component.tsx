import { ContactInfos } from "../contact-infos.component";
import { ContactForm } from "../contact-form.component";

export const Contact = () => {
  return (
    <section
      className="h-screen flex flex-col items-start min-h-[100dvh] bg-gradient-to-br from-indigo-950 to-purple-900"
      id="contact"
    >
      <h1 className="py-20 px-10 text-2xl text-white text-center">Contact</h1>

      <div className="w-full flex flex-col gap-10 justify-center md:grid md:grid-cols-2">
        <ContactInfos />
        <ContactForm />
      </div>
    </section>
  );
};
