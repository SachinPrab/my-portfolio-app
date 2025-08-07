"use client";

import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 shadow-lg mb-8 rounded-b-xl">
      <span className="text-2xl font-extrabold text-white tracking-wide select-none">
        Sachin Prabhakar
      </span>
      <div className="flex items-center gap-4">
        Connect with me:
        <a
          href="https://github.com/SachinPrab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <Github className="w-5 h-5 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-prabhakar-10b1b4266/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <div className="hover:bg-white/40 transition"><ModeToggle/></div>
      </div>
    </nav>
  );
}
