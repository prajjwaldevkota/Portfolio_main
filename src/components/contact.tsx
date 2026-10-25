import { ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section">
      <h2 id="contact-heading" className="section-heading">Get in touch</h2>
      <p className="text-body leading-relaxed max-w-lg">
        Have a project in mind, a role to discuss, or a question about my work?
        Send me an email.
      </p>
      <a href="mailto:devkota.prj@gmail.com" className="text-link mt-5 text-lg sm:text-2xl">
        devkota.prj@gmail.com <ArrowUpRight size={20} aria-hidden="true" />
      </a>
      <div className="mt-6 flex gap-6 text-sm">
        <a href="https://github.com/prajjwaldevkota" target="_blank" rel="noopener noreferrer" className="text-link">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a href="https://linkedin.com/in/prajjwaldevkota" target="_blank" rel="noopener noreferrer" className="text-link">
          LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
