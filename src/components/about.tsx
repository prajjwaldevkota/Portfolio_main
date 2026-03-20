export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-label mb-12">ABOUT</p>

        <div className="max-w-3xl space-y-10">
          <div className="space-y-6 text-zinc-400 text-base leading-relaxed">
            <p>
              I&apos;m Prajjwal Devkota, a full-stack developer and IT systems analyst
              based in <strong className="text-zinc-200">Toronto, Canada</strong>.
              I care about building things that work well and look good doing it —
              the kind of details most people don&apos;t notice, but everyone feels.
            </p>
            <p>
              I&apos;ve worked across <strong className="text-zinc-200">enterprise IT support</strong> and{" "}
              <strong className="text-zinc-200">hands-on web development</strong>,
              from managing device lifecycles with Intune and SCCM to building React dashboards
              and automation scripts. My GitHub showcases a variety of projects reflecting my
              growth in full-stack development and cloud infrastructure.
            </p>
            <p>
              Currently pursuing my advanced diploma in{" "}
              <strong className="text-zinc-200">Computer Programming and Analysis</strong> and
              actively expanding my skillset through certifications in cybersecurity,
              networking, and cloud computing.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10+", label: "Projects Built" },
              { value: "500+", label: "Users Supported" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 rounded-xl border border-zinc-800 bg-zinc-900/30"
              >
                <p className="text-2xl font-bold text-zinc-100">{stat.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="border-l-2 border-zinc-700 pl-6 py-2">
            <p className="text-zinc-500 italic text-sm">
              &ldquo;I believe great work isn&apos;t about adding more. It&apos;s about refining until nothing else can be.&rdquo;
            </p>
          </blockquote>

          {/* Info row */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 uppercase text-xs tracking-wider">Location</span>
              <span className="text-zinc-300">Toronto, ON</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 uppercase text-xs tracking-wider">Status</span>
              <span className="text-zinc-300">Available for work</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 uppercase text-xs tracking-wider">Focus</span>
              <span className="text-zinc-300">Full-Stack Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
