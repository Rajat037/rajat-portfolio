const skills = [
  "React.js", "Next.js", "JavaScript", "Node.js", "MongoDB",
  "Java", "Servlets", "Tailwind CSS", "Git & GitHub", "Vercel"
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-slate-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}