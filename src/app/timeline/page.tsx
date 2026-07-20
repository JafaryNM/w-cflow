import Link from "next/link";

export default function TimelinePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-brand-primary hover:underline"
        >
          &larr; Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold text-cflow-green sm:text-4xl">
          Timeline
        </h1>
        <p className="mt-4 max-w-2xl text-base text-brand-slate">
          Our project timeline is coming soon.
        </p>
      </section>
    </main>
  );
}
