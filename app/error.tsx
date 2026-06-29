"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="section-padding">
      <div className="container-width glass rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold">Something went wrong.</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Please try again in a moment.</p>
        <button onClick={reset} className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-white">Try again</button>
      </div>
    </section>
  );
}
