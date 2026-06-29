export default function Loading() {
  return (
    <section className="section-padding">
      <div className="container-width animate-pulse space-y-4">
        <div className="h-8 w-1/3 rounded bg-slate-300/60 dark:bg-slate-700/60" />
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => <div key={i} className="h-36 rounded-2xl bg-slate-300/60 dark:bg-slate-700/60" />)}
        </div>
      </div>
    </section>
  );
}
