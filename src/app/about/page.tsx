import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Section from "@/components/Section";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experience } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "About",
};

const bio = [
  "I'm a designer based in San Francisco, working across software, hardware, and brand — always with a focus on making the whole experience feel coherent.",
  "Over the past 18 years I've worked with teams ranging from early-stage startups to large product orgs, gaining a broad perspective on the principles, essentials, and pitfalls of interactive design along the way.",
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ImagePlaceholder className="aspect-[4/5]" label="Photo" />
        <ImagePlaceholder className="aspect-[4/5]" label="Photo" />
      </div>

      <Section label="Info">
        <div className="max-w-2xl space-y-4 text-lg text-neutral-600">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:border-neutral-400"
        >
          Download résumé
        </a>
      </Section>

      <Section label="Work Experience">
        <ExperienceTimeline entries={experience} />
      </Section>
    </div>
  );
}
