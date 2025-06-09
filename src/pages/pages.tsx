import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SocialCards } from "../components/cards";

export const Pages = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col">
      <Header title="Luco Vilanculos" />

      <div
        className="flex-1 flex flex-col items-center text-white font-bold text-center
        bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 animate-gradient"
      >
        <main className="w-full p-4">
          <h1 className="text-3xl sm:text-5xl mt-10 mb-4 font-extrabold text-slate-100 animate-fade-in-up">
            Stay Connected 🚀
          </h1>
          <p className="text-slate-300 mb-8 text-lg animate-fade-in-up">
            want to know more get in touch 😎
          </p>

          <SocialCards />
        </main>
      </div>

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
