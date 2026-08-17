import { getFeaturedProjects } from "@/lib/projects";
import Link from "next/link";

export default function EcosystemSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="relative py-24 bg-transparent border-t border-surface-secondary/30 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-accent font-medium">
            VENTURES & INFRASTRUCTURE
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-primary">
            The Executive Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary/90 font-light text-sm sm:text-base">
            An integrated network of specialized vehicles focused on real estate, advisory, technology, and capital intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className="group block bg-background/40 backdrop-blur-md border border-surface-secondary/60 p-7 hover:border-accent/50 transition-quick rounded-sm shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Project Status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
                    {project.category}
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
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
                <p className="text-text-secondary/90 text-sm font-light leading-relaxed">
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

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/ecosystem"
            className="inline-block px-8 py-3.5 border border-surface-secondary/80 bg-background/30 backdrop-blur-sm text-text-primary text-xs font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-quick"
          >
            EXPLORE COMPLETE ECOSYSTEM →
          </Link>
        </div>
      </div>
    </section>
  );
}
