export default function Experience() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 hover:text-blue-400">
          Experience
        </h2>

        {[
          {
            date: "Jul 2024 – Aug 2024",
            company: "Main Flow Services and Technologies Pvt. Ltd.",
            role: "Web Development Intern",
            points: [
              "Improved UI performance by 25%.",
              "Contributed to 2 live deployments.",
              "Fixed 40+ UI bugs.",
            ],
          },
          {
            date: "Jan 2025 – Present",
            company: "GU Humanity Saviors Club",
            role: "Web Developer",
            points: [
              "Built responsive Pet Adoption Website.",
              "Reduced load time by 35%.",
              "Boosted engagement by 75%.",
            ],
          },
        ].map((exp) => (
          <div
            key={exp.company}
            className="
              grid md:grid-cols-4 gap-6
              p-6 rounded-xl mb-8
              hover:bg-slate-900/40
              hover:border-l-4 hover:border-blue-500
            "
          >
            <div className="text-sm text-slate-400">{exp.date}</div>

            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-white">
                {exp.company}
              </h3>
              <p className="italic text-slate-400 mb-3">{exp.role}</p>
              <ul className="list-disc ml-5 space-y-2 text-slate-400">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
