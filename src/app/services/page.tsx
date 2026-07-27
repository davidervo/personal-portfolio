import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const offerings = [
  {
    title: "Product design",
    description: "End-to-end design for a specific feature or product area — research through shipped UI.",
  },
  {
    title: "Design systems",
    description: "Component libraries and documentation that hold up across teams and platforms.",
  },
  {
    title: "Design leadership",
    description: "Fractional or interim design leadership for teams scaling up their design practice.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-medium tracking-tight text-neutral-900">Services</h1>
      <p className="max-w-2xl text-lg text-neutral-600">
        I take on a small number of consulting and advisory engagements each year, working directly
        with founders and design leaders.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-neutral-200 pt-12 sm:grid-cols-2">
        {offerings.map((offering) => (
          <div key={offering.title}>
            <h2 className="text-lg font-medium text-neutral-900">{offering.title}</h2>
            <p className="mt-2 text-neutral-600">{offering.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-12">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
