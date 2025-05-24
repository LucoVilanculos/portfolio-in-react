import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-red-600 animate-gradient">
      <h1 className="text-3xl font-bold mb-4 animate-pulse">Erro 404</h1>
      <p className="text-base animate-pulse">Page not found...</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-cyan-800 text-white font-bold px-6 py-2 rounded-full shadow-md hover:bg-white hover:text-cyan-800 transition"
      >
        Back To Home
      </button>
    </main>
  );
};
