export default function Certifications() {
  const certs = [
    "Postman Student Expert",
    "AI-ML Virtual Internship (Google) – AICTE",
    "Cybersecurity Internship (Palo Alto) – AICTE",
    "Data Science Internship (Altair) – AICTE",
    "Java Fundamentals – Oracle Academy",
    "Cybersecurity Fundamentals – IBM SkillsBuild",
  ];

  return (
    <section className="py-20">
      <div
        className="
        max-w-6xl mx-auto px-6
        border-l-4 border-transparent
        hover:border-blue-500
        hover:bg-slate-900/40
        p-6 rounded-lg
      "
      >
        <h2 className="text-3xl font-bold mb-8 hover:text-blue-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <p
              key={c}
              className="hover:text-blue-400 hover:translate-x-1 cursor-default"
            >
              • {c}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
