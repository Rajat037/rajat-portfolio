export default function Education() {
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
          Education
        </h2>

        <ul className="space-y-4">
          {[
            ["B.Tech, CSE – Galgotias University", "CGPA: 7.6"],
            ["Senior Secondary – Fatima Sr. Sec School (CBSE)", "CGPA: 8.0"],
            ["Secondary – Fatima Sr. Sec School (CBSE)", "CGPA: 8.46"],
          ].map(([title, score]) => (
            <li
              key={title}
              className="
                flex justify-between items-center
                p-4 rounded-lg
                hover:bg-slate-900/40
                hover:shadow-md
              "
            >
              <span className="text-slate-300">{title}</span>
              <span className="text-slate-400 hover:text-blue-400">
                {score}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
