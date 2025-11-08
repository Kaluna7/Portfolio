import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const social = [
    { id: "github", href: "https://github.com/username", icon: <FaGithub />, label: "GitHub" },
    { id: "linkedin", href: "https://www.linkedin.com/in/username", icon: <FaLinkedin />, label: "LinkedIn" },
    { id: "instagram", href: "https://www.instagram.com/username", icon: <FaInstagram />, label: "Instagram" },
    { id: "email", href: "https://www.instagram.com/username", icon: <MdEmail/>, label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-800 text-white w-full flex items-center">
      <div className="max-w-6xl mx-auto gap-12">
        <div className="space-y-8 flex flex-col items-center">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
            <div className="bg-gray-900/95 rounded-2xl px-6 py-4 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-gray-300 max-w-xl">
                I’m open to new opportunities, collaborations, or just a friendly hello.
                Send a message or connect via social platforms below.
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition transform hover:-translate-y-0.5 shadow-sm"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="hidden sm:inline text-sm text-gray-200">{s.label}</span>
              </a>
            ))}

          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p>Prefer a message? Use the contact button in the top</p>
          </div>
        </div>
      </div>

    </section>
  );
}
