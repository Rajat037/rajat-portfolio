export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold text-white">Rajat Shukla</h1>
      <p className="mt-4 text-xl text-slate-400 max-w-xl">
        Full Stack Developer building scalable web applications with React,
        Next.js, Node.js, and Java.
      </p>
      <div className="mt-6 flex gap-4">
        <a className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500" href="#projects">
          View Projects
        </a>
        <a className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800" href="#contact">
          Contact Me
        </a>
      </div>
    </section>
  );
}