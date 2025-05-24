import { useForm, ValidationError } from "@formspree/react";


import { ContactInfo } from "../components/contact";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Contact = () => {
  const [state, handleSubmit] = useForm("luco@luis123"); 

  return (
    <div className="min-h-screen bg-cyan-800 flex flex-col">
      <Header title="Junior Full-Stack Developer" />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 animate-gradient p-4">
        {state.succeeded ? (
          <div className="p-6 text-center text-white bg-green-600 rounded-md shadow-md max-w-md">
            <h2 className="text-2xl font-bold">Thanks for your message! 💌</h2>
            <p className="text-sm">I’ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-cyan-800 p-6 rounded-lg shadow-lg space-y-4 animate-fade-in-up"
          >
            <h2 className="text-2xl font-bold text-white text-center">
              Leave me a message and stay update🚀
            </h2>
            <ContactInfo />
            <div>
              <label htmlFor="email" className="block text-white font-semibold">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 mt-1 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-2 px-4 bg-cyan-900 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
