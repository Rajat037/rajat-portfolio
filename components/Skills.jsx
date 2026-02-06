export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Java",
    "Servlets",
    "Tailwind CSS",
    "Git & GitHub",
    "Vercel",
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 hover:text-blue-400">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 rounded-full text-sm
                bg-slate-800 border border-slate-700
                hover:border-blue-400 hover:text-blue-400
                hover:-translate-y-1 hover:shadow-lg
                cursor-default
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
