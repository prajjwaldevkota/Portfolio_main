import { Skills } from "@/components/skills"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <h2 id="about-heading" className="section-heading">A little about me</h2>
      <div className="space-y-4 max-w-2xl text-body leading-relaxed">
        <p>
          My work spans web development and enterprise IT. I&apos;ve built
          dashboards, automated routine tasks, and supported the people and
          devices behind day-to-day operations.
        </p>
        <p>
          My background is in Computer Programming and Analysis, with interests
          in cloud infrastructure, networking, and cybersecurity. I like practical
          tools, clear interfaces, and figuring out how things work.
        </p>
      </div>
      <Skills />
    </section>
  )
}
