import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SocialCards } from "../components/cards";

export const Pages = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex flex-col">
      <Header title="Junior Full-Stack Developer" />

      <div className="flex-1 flex flex-col items-center text-white font-bold text-center
        bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 animate-gradient"
      >
        <main className="w-full p-4 animate-fadeInUp">
          <h1 className="text-3xl sm:text-5xl mt-10 mb-4 font-extrabold text-slate-100">
            Stay Connected 🚀
          </h1>
          <p className="text-slate-300 mb-8 text-lg">
            Here's where I hang out online. Hit me up, nossa língua style 😎
          </p>

          <SocialCards />
        </main>
      </div>

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
