const projects = [
  {
    name: "GoodHabits.ai",
    desc: "AI-powered nutrition and health tracking platform."
  },
  {
    name: "QuickFind",
    desc: "Java Servlet-based search engine with MongoDB."
  },
  {
    name: "KindCoin Lite",
    desc: "Donation platform with Firebase authentication."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.name} className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}