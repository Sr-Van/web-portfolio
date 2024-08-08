import { ContactInfos } from "../contact-infos.component";
import { ContactForm } from "../contact-form.component";

export const Contact = () => {
  return (
    <section
      className="flex flex-col items-start min-h-[100dvh] bg-gradient-to-br from-indigo-950 to-purple-900"
      id="contact"
    >
      <h1 className="py-20 px-10 main_titles" data-aos="fade-right">
        Contact
      </h1>

      <div className="w-full flex flex-col gap-10 justify-center md:grid md:grid-cols-2">
        <ContactInfos />
        <ContactForm />
      </div>

      <footer className="w-full mt-auto pb-2">
        <p className="text-center text-xs text-purple-500 [text-shadow:_0_2px_2px_rgb(0_0_0_/_40%)] w-full">
          © 2024 - Created by Sr-van
        </p>
      </footer>
    </section>
  );
};
