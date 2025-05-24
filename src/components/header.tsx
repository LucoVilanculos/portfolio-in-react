import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import type { HeaderProps } from "../types/allprops";

const linkStyles = "hover:text-cyan-500 block px-4 py-2";

export const Header = ({ title }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 py-2 h-15 bg-gradient-to-br from-blue-900 via-cyan-800 to-cyan-950 text-white flex justify-between items-center">
      <h2 className="text-2xl font-bold">{title}</h2>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-4 font-normal text-lg">
        {["/", "/resume", "/project", "/pages", "/contact"].map((path, i) => {
          const labels = ["Home", "Resume", "Project", "Pages", "Contact"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-cyan-950 text-white flex flex-col items-center md:hidden z-50">
          {["/", "/resume", "/project", "/pages", "/contact"].map((path, i) => {
            const labels = ["Home", "Resume", "Project", "Pages", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
