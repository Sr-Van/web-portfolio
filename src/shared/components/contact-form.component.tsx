export const ContactForm = () => {
  return (
    <div
      className="w-full flex flex-col gap-3 p-3 items-center justify-center"
      data-aos="zoom-in"
      data-aos-delay="700"
    >
      <h2 className="text-2xl text-white text-center">Send me a message!</h2>
      <form
        className="w-full max-w-[500px]"
        action="mailto:contato@vanderson-dev.com"
      >
        <button
          type="submit"
          aria-label="Send message"
          className="w-full p-1 mb-3 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md transition-al border-2 border-purple-500/60"
          onClick={() => sendForm(document.forms[0])}
        >
          Send
        </button>
      </form>
    </div>
  );
};

const sendForm = (form: HTMLFormElement) => {
  console.log(form);

  form.reset();
};
