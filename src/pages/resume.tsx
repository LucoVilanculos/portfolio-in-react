import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Resume = () => {
  const skills = [
    { icon: "💻", name: "TypeScript" },
    { icon: "🎨", name: "TailwindCSS" },
    { icon: "⚛️", name: "React" },
    { icon: "🌐", name: "HTML & CSS" },
    { icon: "🧠", name: "UI/UX Thinking" },
    { icon: "🛠️", name: "Git & GitHub" },
    { icon: "📦", name: "Vite" },
    { icon: "☁️", name: "MongoDB" },
    { icon: "🖼️", name: "Figma" },
    { icon: "📐", name: "Canva" },
  ];

  const softSkills = [
    "🤝 Conflict Management",
    "⚡ Proactive",
    "🔄 Flexibility",
    "🧬 Adaptability",
    "✅ Responsible",
    "🗣️ Communication Skills",
  ];

  const languages = [
    "Portuguese — Fluent",
    "English — Intermediate",
    "Changana — Fluent",
  ];

  const experiences = [
    "🧩 Worked on Task Manager: full CRUD app with localStorage and modals.",
    "📊 Built SpotiDados: a dashboard using Spotify-like design with React & API.",
    "🎬 Created a mini movie platform using pure JS & CSS, no frameworks.",
    "📱 Designed a beautiful and responsive landing page from scratch.",
  ];

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col">
      <Header title="Junior Full-Stack Developer" />

      <div className="flex-1 w-full bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 text-white p-6 md:p-16 overflow-hidden animate-gradient">
        <main className="max-w-6xl mx-auto animate-fade-in-up space-y-16">

          {/* Skills */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">🚀 My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-bold">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-cyan-800 p-4 rounded-xl shadow-xl text-center hover:scale-110 transition duration-300"
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <p className="mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">🧠 Soft Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-medium">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-cyan-800 p-4 rounded-xl shadow-xl text-center hover:scale-105 transition duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">🌍 Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-medium text-center">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="bg-cyan-800 p-4 rounded-xl shadow-xl hover:scale-105 transition duration-300"
                >
                  {lang}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">💼 My Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-medium">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="bg-cyan-800 p-6 rounded-xl shadow-xl hover:scale-105 transition duration-300"
                >
                  {exp}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
