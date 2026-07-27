import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { ProjectPlaceholder } from "@/lib/placeholder-data";

interface Props {
  project: ProjectPlaceholder;
}

export default function ProjectCard({ project }: Props) {
  const linkable = !project.locked;

  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <ImagePlaceholder className="h-full w-full" label={project.title} />
        {project.locked && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-700">
            Confidential
          </span>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-sm text-neutral-500">{project.client}</p>
        <h3 className="text-lg font-bold text-neutral-900">{project.title}</h3>
        <p className="text-sm text-neutral-600">{project.tagline}</p>
      </div>
    </>
  );

  if (!linkable) {
    return <div className="cursor-default">{body}</div>;
  }

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {body}
    </Link>
  );
}
