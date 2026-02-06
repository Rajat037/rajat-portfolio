export default function Achievements() {
  return (
    <section className="py-20 bg-slate-900">
      <div
        className="
    max-w-6xl mx-auto px-6
    border-l-4 border-transparent
    hover:border-slate-500
    hover:bg-slate-800/60
    p-6 rounded-lg
    transition-all
  "
      >
        <h2 className="text-3xl font-bold mb-8 hover:text-blue-400">
          Achievements
        </h2>

        <ul className="space-y-4">
          <li className="p-4 rounded-lg hover:bg-slate-800 hover:border-l-4 hover:border-blue-500">
            Top 5000 – BuildWithIndia (Google), among 25,000 teams.
          </li>
          <li className="p-4 rounded-lg hover:bg-slate-800 hover:border-l-4 hover:border-blue-500">
            Improved Pet Adoption engagement by 75% and adoption rate by 60%.
          </li>
        </ul>
      </div>
    </section>
  );
}
