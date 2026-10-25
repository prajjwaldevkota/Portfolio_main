const skills = [
  { label: "Development", value: "TypeScript, React, Next.js, Python, Node.js, FastAPI" },
  { label: "Data & tools", value: "PostgreSQL, MongoDB, Redis, Git, Docker" },
  { label: "IT & automation", value: "PowerShell, Intune, Autopilot, Active Directory" },
]

export function Skills() {
  return (
    <dl className="mt-8 space-y-3 text-sm">
      {skills.map((skill) => (
        <div key={skill.label} className="grid gap-1 sm:grid-cols-[145px_1fr] sm:gap-4">
          <dt className="text-secondary">{skill.label}</dt>
          <dd className="text-body leading-relaxed">{skill.value}</dd>
        </div>
      ))}
    </dl>
  )
}
