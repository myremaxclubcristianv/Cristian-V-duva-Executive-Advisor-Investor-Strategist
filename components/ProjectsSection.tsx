import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Ventures
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Strategic initiatives across real estate, technology, and
              business intelligence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              href="/ventures"
              className="inline-block px-8 py-4 border border-text-secondary text-text-primary font-medium hover:border-text-primary hover:text-text-primary transition-colors"
            >
              View All Ventures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
