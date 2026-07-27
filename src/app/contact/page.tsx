import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900">Contact</h1>
      <p className="max-w-xl text-lg text-neutral-600">
        Say hello at{" "}
        <a href="mailto:hello@example.com" className="underline underline-offset-4">
          hello@example.com
        </a>
        .
      </p>
    </>
  );
}
