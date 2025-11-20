import { Building2, Users, Workflow, CheckSquare, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Workflow,
    title: "Automations",
    desc: "Reduce manual follow-ups with rules for assignments, reminders, and approvals.",
  },
  {
    icon: Users,
    title: "Tenant relations",
    desc: "Conversations, announcements, and feedback loops that feel human.",
  },
  {
    icon: Building2,
    title: "Portfolio overview",
    desc: "One view across buildings, units, and service providers.",
  },
  {
    icon: CheckSquare,
    title: "Checklists",
    desc: "Structured inspections and recurring tasks with evidence and sign-off.",
  },
  {
    icon: MessageSquare,
    title: "Messaging",
    desc: "Clear threads, templates, and SLAs – no lost context.",
  },
  {
    icon: BarChart3,
    title: "Insights",
    desc: "Track resolution times, volumes, and satisfaction across sites.",
  },
]

function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-[var(--vh-secondary-50)]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3">Built for modern property ops</h2>
          <p className="text-gray-600">A balanced system: human and trustworthy for tenant-facing work, efficient and no-nonsense for operational clarity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 text-[var(--vh-primary-700)] bg-[var(--vh-secondary-100)] ring-1 ring-[var(--vh-secondary-200)]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
