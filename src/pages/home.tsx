import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SplashScreen } from "../components/splash";

export const Home = () => {
  const navigate = useNavigate();
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 text-white flex flex-col">
      <Header title="Junior Full-Stack Developer" />

      {splash && <SplashScreen />}
      {!splash && (
        <main className="flex-1 px-4 py-8 flex justify-center items-center gap-10">
          {/* Card com Logo e Título */}
          <div className="bg-cyan-800 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-lg w-full animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-black">Luco Vilanculos</h1>
            <p className="text-lg mt-2 font-semibold">
              Junior Full-Stack Developer 💻
            </p>
            <br />
            <section className="mt-12 grid grid-cols-2 md:grid-cols-2 gap-8 text-blue-900 font-bold text-lg animate-fadeInUp">
              <div className="p-4 rounded-xl shadow-lg text-center  bg-cyan-800 text-white ">
                ⚛️ React
              </div>
              <div className="p-4 rounded-xl shadow-lg text-center  bg-cyan-800 text-white  ">
                🟦 TypeScript
              </div>
              <div className="p-4 rounded-xl shadow-lg text-center  bg-cyan-800 text-white ">
                🌐 Node.js
              </div>
              <div className="p-4 rounded-xl shadow-lg text-center  bg-cyan-800 text-white ">
                🎨 TailwindCSS
              </div>
            </section>
          </div>

          {/* Card com About */}
          <div className="bg-cyan-800 p-8 rounded-3xl shadow-xl max-w-4xl w-300 animate-fade-in-up text-center">
            <h1 className="text-3xl md:text-4xl font-black">About</h1>
            <br />

            <p className="text-base md:text-lg leading-relaxed text-cyan-100">
              I'm a passionate Junior Full-Stack Developer focused on building
              responsive web applications with clean code and great user
              experiences. I love working with modern technologies like{" "}
              <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>TailwindCSS</strong> on the front-end, and have a solid
              foundation in <strong>Node.js</strong> and{" "}
              <strong>Express</strong> on the back-end. <br />
              <br />I enjoy learning continuously, solving problems, and
              collaborating to create meaningful digital products. I'm always
              open to new challenges! 💡
            </p>

            <button
              onClick={() => navigate("/project")}
              className="mt-6 bg-white text-whiy  font-bold px-6 py-2 rounded-full shadow-md hover:bg-cyan-200 transition"
            >
              View Projects 🚀
            </button>
          </div>
        </main>
      )}

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
