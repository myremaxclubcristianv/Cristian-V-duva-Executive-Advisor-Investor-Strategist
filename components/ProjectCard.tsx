import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      className="group bg-surface-primary border border-surface-secondary/80 overflow-hidden hover:border-accent/50 transition-quick shadow-xl flex flex-col justify-between"
    >
      <div className="space-y-4">
        {/* 16:9 Project Image */}
        <div className="aspect-video bg-background relative overflow-hidden border-b border-surface-secondary/60">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-secondary/40">
              <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                {project.name}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-3">
          {/* Category and Status */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <span
              className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border ${
                project.status === "active"
                  ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                  : "border-accent/40 text-accent bg-accent/10"
              }`}
            >
              {project.status === "active" ? "Active" : "In Development"}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="font-display text-xl text-text-primary group-hover:text-accent transition-colors">
            {project.name}
          </h3>

          {/* Project Description */}
          <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Arrow Indicator */}
      <div className="p-6 pt-0 mt-4 border-t border-surface-secondary/40 flex items-center justify-between font-mono text-xs text-accent">
        <span>VIEW MANDATE</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}
