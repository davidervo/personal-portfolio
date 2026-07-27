import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { projects } from "@/lib/placeholder-data";

interface Props {
  slug: string;
}

export default function RelatedProjectThumb({ slug }: Props) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  const linkable = !project.locked;
  const body = (
    <>
      <div className="aspect-square overflow-hidden rounded-md">
        <ImagePlaceholder className="h-full w-full" />
      </div>
      <p className="mt-2 text-xs text-neutral-500">{project.title}</p>
    </>
  );

  if (!linkable) {
    return <div>{body}</div>;
  }

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {body}
    </Link>
  );
}
