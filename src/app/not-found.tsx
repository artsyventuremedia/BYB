import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center px-6 md:px-12">
      <span className="mb-6 block text-[11px] uppercase tracking-widest2 text-smoke">
        404
      </span>
      <h1 className="font-display text-[12vw] font-light italic leading-none text-paper md:text-[6vw]">
        Scene not found.
      </h1>
      <Link
        href="/"
        className="mt-10 text-[11px] uppercase tracking-widest2 text-paper underline underline-offset-4"
      >
        Return Home
      </Link>
    </section>
  );
}
