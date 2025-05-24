export const ContactInfo = () => {
  return (
    <div className="bg-cyan-800 backdrop-blur-md rounded-2xl p-6 w-full max-w-xl shadow-2xl text-white space-y-6 animate-fade-in">
      <h2 className="text-3xl font-bold text-cyan-300">Contact Me:</h2>
      <div className="text-left space-y-2">
        <p><span className="font-semibold text-cyan-100">📧 Email:</span> <a href="mailto:luisisauravilanculos@gmail.com" className="underline">luisisauravilanculos@gmail.com</a></p>
        <p><span className="font-semibold text-cyan-100">📱 Main Contact:</span> +258 86 737 2562</p>
        <p><span className="font-semibold text-cyan-100">📞 Optional:</span> +258 83 114 9270</p>
        <p><span className="font-semibold text-cyan-100">📍 Address:</span> Matola, Estádio da Machava</p>
      </div>
    </div>
  );
};
