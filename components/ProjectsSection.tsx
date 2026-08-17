import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>ACTIVE MANDATES</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>OVERVIEW</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Featured Initiatives
            </h2>
          </div>
          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            DIRECT PORTFOLIO
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
