import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const showSplit = featured.length > 0 && rest.length > 0;

  return (
    <>
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-neutral-900">Work</h1>
      {showSplit ? (
        <>
          <section>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wide text-neutral-500">
              Case studies
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
          <section className="mt-16 border-t border-neutral-200 pt-12">
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wide text-neutral-500">
              More work
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {rest.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
