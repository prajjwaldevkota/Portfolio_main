const experiences = [
  {
    title: "Help Desk Analyst",
    company: "Bond Brand Loyalty",
    location: "Toronto, Ontario",
    type: "Full-Time",
    period: "Sept 2025 - Present",
    description:
      "Supporting Toronto office IT, resolving Ivanti service requests, and working with the analytics team on cloud development and automation.",
    highlights: [
      "Working with the analytics team to migrate a project from Hugging Face to Azure.",
      "Developing Azure Functions and CI/CD workflows to automate deployments.",
      "Building Python and PowerShell scripts with Microsoft Graph and REST APIs to automate repetitive administrative tasks and user onboarding/offboarding.",
      "Using AI developer tools to build internal diagnostic tools and streamline ticket triage.",
      "Integrating Reclaim AI with Microsoft 365 through SCIM provisioning and directory synchronization, and managing application access in Entra ID.",
      "Managing macOS devices with Jamf Pro, including software packaging, configuration profiles, FileVault encryption, and Jamf Protect.",
    ],
  },
  {
    title: "IT Support Analyst",
    company: "EMCO Corporation",
    location: "London, Ontario",
    type: "Co-op",
    period: "May 2024 - Aug 2024",
    description:
      "Provided Tier 1/2 technical support to a hybrid workforce of 500+ users across multiple branches. Diagnosed and resolved hardware, software, and connectivity issues in a Microsoft 365 environment.",
    highlights: [
      "Deployed and configured devices using Intune and Autopilot",
      "Automated compliance tasks with PowerShell scripting",
      "Created and maintained internal SOPs and knowledge base articles",
    ],
  },
  {
    title: "IT Support Assistant",
    company: "Ministry of Solicitor General",
    location: "London, Ontario",
    type: "Co-op",
    period: "Jan 2023 - May 2023",
    description:
      "Delivered frontline technical support to staff across multiple departments, resolving day-to-day issues including user access, printer troubleshooting, and system imaging.",
    highlights: [
      "Managed device setup and imaging, account provisioning via Active Directory",
      "Supported patching and security enforcement through Intune",
    ],
  },
]


export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section">
      <h2 id="experience-heading" className="section-heading">Experience</h2>
      <div className="space-y-9">
        {experiences.map((exp) => (
          <article key={exp.company} className="grid gap-2 sm:grid-cols-[155px_1fr] sm:gap-7">
            <p className="text-xs leading-7 text-muted">{exp.period}</p>
            <div>
              <h3 className="font-medium text-foreground">{exp.title}</h3>
              <p className="mt-1 text-sm text-body">{exp.company} · {exp.type}</p>
              <p className="mt-3 text-sm leading-7 text-body">{exp.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-6 text-body marker:text-muted">
                {exp.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
