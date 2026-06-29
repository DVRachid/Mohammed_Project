import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-width glass rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold">404</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-white">Back to Home</Link>
      </div>
    </section>
  );
}
