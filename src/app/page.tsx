import HeroHeading from "@/components/HeroHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/placeholder-data";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-center gap-6 py-12">
        <HeroHeading>
          Interaction designer with{" "}
          <strong className="font-extrabold text-neutral-900">18 years</strong> of experience
          shaping how people use <strong className="font-extrabold text-neutral-900">software</strong>.
        </HeroHeading>
        <p className="max-w-xl text-lg text-neutral-600">
          Working across product, brand, and service design — most recently leading design at an
          early-stage hardware startup.
        </p>
      </section>

      <section className="mt-8 border-t border-neutral-200 pt-12">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Selected work
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
