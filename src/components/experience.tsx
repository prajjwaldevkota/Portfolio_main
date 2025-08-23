import {
  GlassCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "IT Support Analyst",
      company: "EMCO",
      location: "London, Ontario, Canada",
      period: "2024 May - 2024 August",
      description:
        "Provided Tier 1/2 technical support to a hybrid workforce of 500+ users across multiple branches. Diagnosed and resolved hardware, software, and connectivity issues in a Microsoft 365 environment using ServiceNow. Deployed and configured new devices using Intune and Autopilot, and supported compliance by executing patch audits and PowerShell automation. Created and updated internal documentation (SOPs, KBs), promoted First Call Resolution (FCR), and collaborated with senior teams on device lifecycle management and root cause analysis.",
      technologies: [
        "Windows 11",
        "Microsoft 365",
        "Intune",
        "Autopilot",
        "ServiceNow",
        "PowerShell",
        "Active Directory",
        "Entra ID",
        "DNS/DHCP",
        "VPN",
        "Endpoint Compliance",
        "Asset Management",
        "Remote Desktop",
      ],
    },
    {
      title: "IT Support Assistant",
      company: "Ministry of Solicitor General",
      location: "London, Ontario, Canada",
      period: "2023 Jan - 2023 May",
      description:
        "Delivered frontline technical support to staff across multiple departments, resolving day-to-day issues including user access, printer troubleshooting, and system imaging. Managed device setup and imaging using USB sticks and performed account provisioning via Active Directory. Handled inventory updates and supported patching and security enforcement through Intune. Logged and escalated tickets using internal helpdesk tools while maintaining accuracy in documentation and communication.",
      technologies: [
        "Windows",
        "AV/Crestron",
        "Network",
        "Hardware",
        "VNC",
        "Active Directory",
        "Entra ID",
        "Office 365",
        "Intune",
        "PowerShell",
        "Remote Desktop",
        "Asset Management",
        "Patching",
        "Security",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my
            career
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <GlassCard key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
