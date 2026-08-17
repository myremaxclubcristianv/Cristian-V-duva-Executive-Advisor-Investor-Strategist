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
      className="group block bg-surface-secondary overflow-hidden hover:bg-surface-primary transition-colors"
    >
      <div className="space-y-4">
        {/* Project Image */}
        <div className="aspect-video bg-surface-primary relative overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-secondary">
              <span className="text-text-secondary text-sm uppercase tracking-wider">
                {project.name}
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-3">
          {/* Category and Status */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-text-secondary">
              {project.category}
            </span>
            <span
              className={`text-xs uppercase tracking-wider ${
                project.status === "active"
                  ? "text-green-500"
                  : "text-accent"
              }`}
            >
              {project.status === "active" ? "Active" : "In Development"}
            </span>
          </div>

          {/* Project Name */}
          <h3 className="font-serif text-display-lg text-text-primary group-hover:text-accent transition-colors">
            {project.name}
          </h3>

          {/* Project Description */}
          <p className="text-text-secondary text-body-sm">
            {project.description}
          </p>

          {/* Arrow Indicator */}
          <div className="pt-2">
            <svg
              className="w-5 h-5 text-accent transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
