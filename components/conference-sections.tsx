import { conferenceMeta, importantDates, schedule, speakers, topics } from "@/lib/data";
import { SectionTitle } from "@/components/site-shell";
import { Building2, Calendar, Download, HelpCircle, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle title="About Conference" subtitle="A high-impact platform to bridge academia and industry." />
        <div className="grid gap-6 lg:grid-cols-3">
          {["Conference Description", "Objectives", "Why Attend"].map((item) => (
            <article key={item} className="glass rounded-2xl p-6">
              <h3 className="mb-3 font-semibold">{item}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">ICETEI 2026 gathers global experts to share peer-reviewed research in emerging technologies, engineering, and interdisciplinary innovation at the Faculty of Sciences, Tetouan.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsCards() {
  const stats = [{ label: "Expected Participants", value: "1200+" }, { label: "Countries", value: "40+" }, { label: "Accepted Papers", value: "280" }, { label: "Keynote Speakers", value: "12" }];
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map((s) => <div key={s.label} className="glass rounded-2xl p-5"><p className="text-2xl font-bold">{s.value}</p><p className="text-sm text-slate-500">{s.label}</p></div>)}</div>;
}

export function TopicsSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle title="Conference Main Topics" subtitle="Six interdisciplinary tracks from the ICETEI 2026 call for papers." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.title} className="glass rounded-2xl p-5">
              <h3 className="font-semibold">{topic.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{topic.description}</p>
              {topic.subtopics && (
                <ul className="mt-3 space-y-1">
                  {topic.subtopics.slice(0, 4).map((st) => (
                    <li key={st} className="text-xs text-slate-500">• {st}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpeakersSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle title="Keynote Speakers" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <article key={s.name} className="glass rounded-2xl p-5">
              <Image src={s.image} alt={s.name} width={500} height={320} className="h-48 w-full rounded-xl object-cover" />
              <h3 className="mt-4 font-semibold">{s.name}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-300">{s.role}</p>
              <p className="text-sm text-slate-500">{s.institution}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DatesTimeline() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle title="Important Dates Timeline" />
        <div className="space-y-3">
          {importantDates.map((d) => <div key={d.label} className="glass flex items-center gap-4 rounded-2xl p-4"><Calendar className="text-indigo-500" size={16} /><div><p className="font-medium">{d.label}</p><p className="text-sm text-slate-500">{d.date}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}

export function SubmissionSection() {
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Paper Submission" /><div className="grid gap-4 md:grid-cols-2"><div className="glass rounded-2xl p-6"><h3 className="mb-2 font-semibold">Author Guidelines</h3><p className="text-sm text-slate-600 dark:text-slate-300">Original unpublished work, double-column format, and blind peer review standards.</p><div className="mt-4 flex gap-2"><button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm text-white inline-flex items-center gap-2"><Download size={14} /> Templates</button><button className="rounded-xl border px-4 py-2 text-sm">Submit Paper</button></div></div><div className="glass rounded-2xl p-6"><h3 className="mb-2 font-semibold inline-flex items-center gap-2"><HelpCircle size={16} /> FAQ</h3><ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300"><li>Peer-review duration: around 4 weeks.</li><li>At least one author must register for accepted papers.</li><li>Camera-ready files must follow final template.</li></ul></div></div></div></section>;
}

export function RegistrationSection() {
  const plans = [{ name: "Student", price: "$180" }, { name: "Academic", price: "$320" }, { name: "Industry", price: "$490" }];
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Registration" subtitle="Transparent pricing for all attendee categories." /><div className="grid gap-4 md:grid-cols-3">{plans.map((p) => <div key={p.name} className="glass rounded-2xl p-6"><h3 className="font-semibold">{p.name}</h3><p className="my-4 text-3xl font-bold">{p.price}</p><button className="w-full rounded-xl bg-indigo-600 py-2 text-sm text-white">Choose Plan</button></div>)}</div></div></section>;
}

export function ProgramSection() {
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Program" subtitle="Multi-day schedule with keynote and technical sessions." /><div className="grid gap-4 lg:grid-cols-3">{Object.entries(schedule).map(([day, sessions]) => <div key={day} className="glass rounded-2xl p-5"><h3 className="font-semibold">{day}</h3><div className="mt-4 space-y-3">{sessions.map((s) => <article key={s.time + s.title} className="rounded-xl border border-slate-200/60 p-3 dark:border-slate-700/60"><p className="text-xs text-slate-500">{s.time} • {s.room}</p><p className="font-medium">{s.title}</p><p className="text-sm text-slate-600 dark:text-slate-300">{s.speaker}</p></article>)}</div></div>)}</div></div></section>;
}

export function CommitteeSection() {
  const groups = ["General Chairs", "Program Chairs", "Scientific Committee", "Organizing Committee"];
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Organizing Committee" /><div className="grid gap-4 md:grid-cols-2">{groups.map((g) => <div key={g} className="glass rounded-2xl p-5"><h3 className="mb-2 font-semibold">{g}</h3><p className="text-sm text-slate-600 dark:text-slate-300">Dr. A. Rahmani, Prof. S. Laurent, Dr. M. Nabil, Prof. Y. Chen</p></div>)}</div></div></section>;
}

export function SponsorsSection() {
  const brands = ["IEEE", "ACM", "University Partner", "Industry Lab", "Innovation Hub", "Research Center"];
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Sponsors & Partners" /><div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">{brands.map((b) => <div key={b} className="glass rounded-2xl p-5 text-center text-sm transition hover:-translate-y-1">{b}</div>)}</div></div></section>;
}

export function ContactSection() {
  return <section className="section-padding"><div className="container-width"><SectionTitle title="Contact" /><div className="grid gap-4 lg:grid-cols-2"><form className="glass rounded-2xl p-6"><div className="grid gap-3"><input className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm" placeholder="Name" /><input className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm" placeholder="Email" /><textarea className="rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-sm" rows={4} placeholder="Message" /><button className="rounded-xl bg-[#0a1628] py-2 text-sm text-white dark:bg-[#f1b434] dark:text-[#0a1628]">Send Message</button></div></form><div className="glass rounded-2xl p-6 space-y-3"><p className="inline-flex items-center gap-2 text-sm"><Building2 size={16} /> ICETEI Secretariat</p><p className="inline-flex items-center gap-2 text-sm"><MapPin size={16} /> {conferenceMeta.venue}, Morocco</p><p className="inline-flex items-center gap-2 text-sm"><Phone size={16} /> {conferenceMeta.email}</p><p className="text-sm text-slate-500">Faculty of Sciences, Tetouan – Abdelmalek Essaâdi University.</p><Link href="https://maps.google.com/maps?q=Faculty+of+Sciences+Tetouan" className="text-sm text-[#0a1628] dark:text-[#f1b434]">Open in Google Maps</Link></div></div></div></section>;
}
