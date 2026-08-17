import { getFeaturedProjects } from "@/lib/projects";
import Link from "next/link";

export default function EcosystemSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>ACTIVE VEHICLES</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Specialized Entities & Ventures
            </h2>
          </div>
          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            EUROPEAN JURISDICTIONS
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className="group bg-surface-primary border border-surface-secondary/80 p-8 hover:border-accent/50 transition-quick shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Project Status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                      project.status === "active"
                        ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                        : "border-accent/40 text-accent bg-accent/10"
                    }`}
                  >
                    {project.status === "active" ? "Active" : "In Development"}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="font-display text-2xl text-text-primary group-hover:text-accent transition-colors">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="font-sans text-text-secondary/90 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Arrow Indicator */}
              <div className="pt-6 mt-6 border-t border-surface-secondary/50 flex items-center justify-between text-xs text-accent font-mono">
                <span>VIEW VEHICLE</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
