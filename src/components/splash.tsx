import { useEffect, useState } from "react";


type SplashProps = {
  onFinish: () => void;
};

export const SplashScreen = ({ onFinish }: SplashProps) => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setAnimateExit(true), 5000); // espera 5s antes do zoom
    const finish = setTimeout(() => onFinish(), 7500); // termina depois de 2.5s de animação

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-[2000ms] ${
        animateExit ? "opacity-0 scale-150 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="./icons/loading.png"
        alt=""
        className={`transition-transform duration-[2000ms] ${
          animateExit ? "scale-[10] rotate-[1080deg]" : "scale-100"
        } animate-spin-slow w-24 h-24`}
      />
      {!animateExit && (
        <>
          <h1 className="text-3xl lg:text-6xl text-center mt-6">Wellcome to my Portfolio</h1>
          <p className="text-xl mt-4 animate-pulse">Loading your personalized experience...</p>
        </>
      )}
    </div>
  );
};

export const SplashResume = ({ onFinish }: SplashProps) => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setAnimateExit(true), 5000); // espera 5s antes do zoom
    const finish = setTimeout(() => onFinish(), 7500); // termina depois de 2.5s de animação

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-[2000ms] ${
        animateExit ? "opacity-0 scale-150 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="./icons/loading.png"
        alt=""
        className={`transition-transform duration-[2000ms] ${
          animateExit ? "scale-[10] rotate-[1080deg]" : "scale-100"
        } animate-spin-slow w-24 h-24`}
      />
      {!animateExit && (
        <>
          <h1 className="text-3xl lg:text-6xl text-center mt-6">Resume</h1>
          <p className="text-xl mt-4 animate-pulse">Carregando...</p>
        </>
      )}
    </div>
  );
};

export const SplashProjects = ({ onFinish }: SplashProps) => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setAnimateExit(true), 2000); // espera 5s antes do zoom
    const finish = setTimeout(() => onFinish(), 500); // termina depois de 2.5s de animação

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-[2000ms] ${
        animateExit ? "opacity-0 scale-150 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="./icons/loading.png"
        alt=""
        className={`transition-transform duration-[2000ms] ${
          animateExit ? "scale-[10] rotate-[1080deg]" : "scale-100"
        } animate-spin-slow w-24 h-24`}
      />
      {!animateExit && (
        <>
          <h1 className="text-3xl lg:text-6xl text-center mt-6">Projects</h1>
          <p className="text-xl mt-4 animate-pulse">Carregando...</p>
        </>
      )}
    </div>
  );
};

export const SplashPages = ({ onFinish }: SplashProps) => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setAnimateExit(true), 5000); // espera 5s antes do zoom
    const finish = setTimeout(() => onFinish(), 7500); // termina depois de 2.5s de animação

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-[2000ms] ${
        animateExit ? "opacity-0 scale-150 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="./icons/loading.png"
        alt=""
        className={`transition-transform duration-[2000ms] ${
          animateExit ? "scale-[10] rotate-[1080deg]" : "scale-100"
        } animate-spin-slow w-24 h-24`}
      />
      {!animateExit && (
        <>
          <h1 className="text-3xl lg:text-6xl text-center mt-6">Pages</h1>
          <p className="text-xl mt-4 animate-pulse">Carregando...</p>
        </>
      )}
    </div>
  );
};

export const SplashContact = ({ onFinish }: SplashProps) => {
  const [animateExit, setAnimateExit] = useState(false);

  useEffect(() => {
    const startExit = setTimeout(() => setAnimateExit(true), 5000); // espera 5s antes do zoom
    const finish = setTimeout(() => onFinish(), 7500); // termina depois de 2.5s de animação

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-blue-800 via-cyan-600 to-cyan-950 text-white font-black transition-all duration-[2000ms] ${
        animateExit ? "opacity-0 scale-150 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <img
        src="./icons/loading.png"
        alt=""
        className={`transition-transform duration-[2000ms] ${
          animateExit ? "scale-[10] rotate-[1080deg]" : "scale-100"
        } animate-spin-slow w-24 h-24`}
      />
      {!animateExit && (
        <>
          <h1 className="text-3xl lg:text-6xl text-center mt-6">Contact</h1>
          <p className="text-xl mt-4 animate-pulse">Carregando...</p>
        </>
      )}
    </div>
  );
};
