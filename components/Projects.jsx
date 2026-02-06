export default function Projects() {
  const projects = [
    {
      title: "QuickFind – Java-based Search Engine",
      tech: "HTML, CSS, JS, Java, Servlets, MongoDB",
      points: [
        "Built responsive search engine.",
        "Integrated MongoDB with servlets.",
        "Improved speed by 40%.",
      ],
    },
    {
      title: "KindCoin Lite – Donation Web App",
      tech: "HTML, CSS, JavaScript, Firebase Auth, MongoDB",
      points: [
        "Built donation platform.",
        "Integrated Google login.",
        "Boosted retention by 60%.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 hover:text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="
                group p-6 rounded-xl
                bg-slate-800/50 border border-slate-700
                hover:border-blue-500/50 hover:shadow-xl
                hover:shadow-blue-500/10 hover:-translate-y-2
              "
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">
                {p.title}
              </h3>
              <p className="italic text-slate-400 mt-1">{p.tech}</p>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-slate-400">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
