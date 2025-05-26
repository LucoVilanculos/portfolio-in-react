import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

const socials = [
  {
    name: "GitHub",
    icon: <GithubLogoIcon size={48} />,
    href: "https://github.com/LucoVilanculos",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinLogoIcon size={48} />,
    href: "https://www.linkedin.com/in/luco-vilanculos-5b551432a",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "Facebook",
    icon: <FacebookLogoIcon size={48} />,
    href: "https://www.facebook.com/luisisaura.vilanculos/",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "Instagram",
    icon: <InstagramLogoIcon size={48} />,
    href: "https://www.instagram.com/sr.lucoooo/",
    colors: "from-blue-600 to-cyan-800"
  },
];

export const SocialCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto p-6 animate-fade-in-up">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-3xl border border-white/10 p-8 text-slate-100 text-center flex flex-col items-center gap-4
          bg-gradient-to-br ${social.colors} shadow-xl hover:shadow-2xl hover:rotate-1
          transition-all duration-500 ease-in-out transform hover:scale-110`}
        >
          {social.icon}
          <h2 className="text-2xl font-extrabold tracking-tight">{social.name}</h2>
          <p className="text-sm text-slate-300">Click to open</p>
        </a>
      ))}
    </section>
  );
};
