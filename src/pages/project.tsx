import { useEffect, useState } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import type { ReposiProps } from './../types/allprops';




export const Project = () => {
  const [repos, setRepos] = useState<ReposiProps[]>([]);
  const [selected, setSelected] = useState<ReposiProps | null>(null);

  const fetchRepos = async () => {
    try {
      const res = await fetch("https://api.github.com/users/LucoVilanculos/repos");
      const data = await res.json();
      setRepos(data);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-700 to-blue-950 text-white flex flex-col animate-gradient">
      <Header title="Luco Vilanculos" />
      
      <main className="flex-1 p-6 overflow-y-auto animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-black leading-tight">🔥 My Projects</h1>
          <button
            onClick={fetchRepos}
            className="bg-cyan-700 hover:bg-cyan-500 px-4 py-2 rounded-md"
          >
            Refresh
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-cyan-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold">{repo.name}</h2>
              <p className="text-sm mt-2">{repo.description || "No description."}</p>
              <p className="text-xs mt-2 italic">Language: {repo.language || "N/A"}</p>
              <button
                onClick={() => setSelected(repo)}
                className="mt-4 px-3 py-1 bg-cyan-600 hover:bg-cyan-400 rounded"
              >
                View More
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 animate-gradiente bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-cyan-950 p-6 rounded-xl w-[90%] max-w-xl">
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="mb-2">{selected.description || "No description."}</p>
              <p className="text-sm italic mb-2">Language: {selected.language || "N/A"}</p>
              <a
                href={selected.html_url}
                target="_blank"
                className="text-blue-400 underline block mb-4"
              >
                Visit on GitHub
              </a>
              <button
                onClick={() => setSelected(null)}
                className="bg-red-500 hover:bg-red-700 px-4 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer date={new Date()} name="Luco" />
    </div>
  );
};
