import RelatedProjectThumb from "@/components/RelatedProjectThumb";
import type { ExperiencePlaceholder } from "@/lib/placeholder-data";

interface Props {
  entries: ExperiencePlaceholder[];
}

export default function ExperienceTimeline({ entries }: Props) {
  return (
    <ol className="divide-y divide-neutral-200 border-t border-neutral-200">
      {entries.map((entry) => (
        <li
          key={`${entry.company}-${entry.role}`}
          className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[8rem_1fr]"
        >
          <p className="text-sm text-neutral-500">
            {entry.start} – {entry.end ?? "Present"}
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-neutral-900">
                {entry.role} <span className="text-neutral-500">— {entry.company}</span>
              </h3>
              <p className="text-neutral-600">{entry.description}</p>
            </div>
            {entry.relatedSlugs.length > 0 && (
              <div className="grid grid-cols-3 gap-4 sm:max-w-md">
                {entry.relatedSlugs.map((slug) => (
                  <RelatedProjectThumb key={slug} slug={slug} />
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
