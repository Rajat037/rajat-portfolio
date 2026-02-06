export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

      {/* Name */}
      <h1
        className="
        text-5xl md:text-6xl font-extrabold
        bg-gradient-to-r from-white via-blue-300 to-blue-500
        bg-clip-text text-transparent
        hover:from-blue-400 hover:to-cyan-400
        transition-all duration-300
      "
      >
        Rajat Shukla
      </h1>

      {/* Tagline */}
      <p
        className="
        mt-4 text-xl max-w-2xl text-slate-400
        hover:text-slate-300
      "
      >
        Full Stack Developer building scalable web applications with React,
        Next.js, Node.js, and Java
      </p>

      {/* Meta info */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center text-sm text-slate-400">
        <span className="hover:text-blue-400 cursor-default">Noida</span>
        <span>•</span>
        <span className="hover:text-blue-400 cursor-default">
          +91 88877 59387
        </span>
        <span>•</span>
        <a
          className="hover:text-blue-400 underline-offset-4 hover:underline"
          href="mailto:rajatshukla370@gmail.com"
        >
          rajatshukla370@gmail.com
        </a>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="https://github.com/Rajat037"
          target="_blank"
          className="
            px-6 py-3 rounded-lg font-semibold
            bg-blue-600 text-white
            hover:bg-blue-500 hover:scale-105
            hover:shadow-lg hover:shadow-blue-500/30
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/rajat-shukla-a69213258/"
          target="_blank"
          className="
            px-6 py-3 rounded-lg font-semibold
            bg-blue-600 text-white
            hover:bg-blue-500 hover:scale-105
            hover:shadow-lg hover:shadow-blue-500/30
          "
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
