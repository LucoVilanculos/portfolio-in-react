import { GithubLogoIcon } from "@phosphor-icons/react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { FacebookLogoIcon } from "@phosphor-icons/react";
import { InstagramLogoIcon } from "@phosphor-icons/react";

import type { FooterProps } from "../types/allprops";

export const Footer = ({ name }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-cyan-950 via-cyan-800 to-blue-900 text-white py-6 px-4 flex flex-col items-center text-center">
      <div className="flex gap-4 mb-2">
        <FacebookLogoIcon size={28} href="https://www.facebook.com/luisisaura.vilanculos/" className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
        <InstagramLogoIcon size={28} href = "https://www.instagram.com/sr.lucoooo/" className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
        <LinkedinLogoIcon size={28} href = "https://www.linkedin.com/in/luco-vilanculos-5b551432a" className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
        <GithubLogoIcon size={28} href = "https://github.com/LucoVilanculos" className="hover:scale-110 transition-transform duration-300 cursor-pointer" />
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} all rights included and reserved for <strong>{name}</strong>
      </p>
    </footer>
  );
};
