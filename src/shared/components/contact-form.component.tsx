export const ContactForm = () => {
  return (
    <div
      className="w-full flex flex-col gap-3 p-3 items-center justify-center"
      data-aos="zoom-in"
      data-aos-delay="700"
    >
      <h2 className="text-2xl text-white text-center">Send me a message!</h2>
      <form className="w-full max-w-[500px]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-1 mb-3 text-black placeholder-slate-600 rounded bg-slate-300 border-2 border-transparent focus-within:border-purple-500 outline-none transition-all"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          aria-label="Email"
          required
          className="w-full p-1 mb-3 text-black placeholder-slate-600 rounded bg-slate-300 border-2 border-transparent focus-within:border-purple-500 outline-none transition-all"
        />
        <textarea
          name="Message"
          placeholder="Message"
          aria-label="Message"
          required
          className="w-full p-1 mb-3 text-black placeholder-slate-600 rounded bg-slate-300 border-2 border-transparent focus-within:border-purple-500 outline-none transition-all"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="w-full p-1 mb-3 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md transition-al border-2 border-purple-500/60"
          onClick={() => sendForm(document.forms[0])}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

const sendForm = (form: HTMLFormElement) => {
  console.log(form);

  form.reset();
};
