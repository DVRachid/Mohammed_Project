"use client";

import { conferenceChairs, conferenceMeta, importantDates, partners, topics } from "@/lib/data";
import { useCountdown } from "@/hooks/use-countdown";
import { motion } from "framer-motion";
import {
  Brain,
  Building2,
  Calendar,
  Cog,
  FlaskConical,
  Globe2,
  Leaf,
  MapPin,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const trackIcons: Record<string, LucideIcon> = {
  brain: Brain,
  zap: Zap,
  cog: Cog,
  flask: FlaskConical,
  leaf: Leaf,
  truck: Truck,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55 },
};

export function HomeFlyerPage() {
  const timer = useCountdown(conferenceMeta.targetDate);

  return (
    <div className="overflow-hidden">
      {/* Hero — navy banner like the flyer */}
      <section className="relative bg-[#0a1628] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(241,180,52,0.12),transparent_50%)]" />
        <div className="container-width relative px-4 py-10 md:py-14">
          {/* Partner logos row */}
          <motion.div {...fadeUp} className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:text-sm"
              >
                {p}
              </span>
            ))}
          </motion.div>

          <motion.p {...fadeUp} className="text-center text-sm text-white/70 md:text-base">
            {conferenceMeta.location}
          </motion.p>

          <motion.h1
            {...fadeUp}
            className="mt-4 text-center font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            {conferenceMeta.shortName}
          </motion.h1>

          <motion.p {...fadeUp} className="mx-auto mt-4 max-w-4xl text-center text-base text-white/90 md:text-lg">
            {conferenceMeta.title}
          </motion.p>

          {/* Yellow accent banner */}
          <motion.div
            {...fadeUp}
            className="mx-auto mt-6 max-w-3xl rounded-lg bg-[#f1b434] px-6 py-3 text-center text-sm font-semibold text-[#0a1628] md:text-base"
          >
            {conferenceMeta.theme}
          </motion.div>

          {/* Scopus badge */}
          <motion.div {...fadeUp} className="mt-6 flex justify-center">
            <span className="rounded-full border-2 border-white bg-white px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#0a1628] md:text-sm">
              Proceedings Indexed in Scopus
            </span>
          </motion.div>

          {/* Countdown */}
          <motion.div {...fadeUp} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mx-auto md:max-w-xl">
            {Object.entries(timer).map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold text-[#f1b434] md:text-3xl">{v}</p>
                <p className="text-xs uppercase tracking-wide text-white/60">{k}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={conferenceMeta.submissionUrl}
              className="rounded-full bg-[#f1b434] px-6 py-3 text-sm font-semibold text-[#0a1628] transition hover:bg-[#e5a82e]"
            >
              Submit Paper
            </Link>
            <Link
              href={conferenceMeta.registrationUrl}
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Register Now
            </Link>
            <Link
              href={conferenceMeta.programUrl}
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Program
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Conference Main Topics — 6 track cards */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-width">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#0a1628] dark:text-white md:text-3xl">
              Conference Main Topics
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Six interdisciplinary tracks covering emerging technologies and engineering innovation.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((track, i) => {
              const Icon = trackIcons[track.icon ?? "brain"] ?? Brain;
              return (
                <motion.article
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0a1628] text-[#f1b434] transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-[#0a1628] dark:text-white">
                    {track.title}
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {track.subtopics?.map((st) => (
                      <li key={st} className="text-xs text-slate-600 dark:text-slate-400">
                        • {st}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chairman + Important Dates — two columns like flyer */}
      <section className="section-padding">
        <div className="container-width grid gap-6 lg:grid-cols-2">
          {/* Chairman */}
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="bg-[#0a1628] px-6 py-3">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                Chairman of the Conference
              </h2>
            </div>
            <div className="space-y-3 bg-white p-6 dark:bg-slate-900">
              {conferenceChairs.map((chair) => (
                <p key={chair.name} className="font-medium text-[#0a1628] dark:text-white">
                  {chair.name}
                </p>
              ))}
              <p className="pt-2 text-sm text-slate-600 dark:text-slate-400">
                Faculty of Sciences, Tetouan
                <br />
                Abdelmalek Essaâdi University, Morocco
              </p>
            </div>
          </motion.div>

          {/* Important Dates */}
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="bg-[#f1b434] px-6 py-3">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#0a1628]">
                Important Dates
              </h2>
            </div>
            <div className="space-y-4 bg-white p-6 dark:bg-slate-900">
              {importantDates.map((d) => (
                <div key={d.label} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 dark:border-slate-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{d.label}</p>
                  <p className="shrink-0 text-sm font-bold text-[#0a1628] dark:text-[#f1b434]">{d.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer quick info bar — like flyer bottom */}
      <section className="bg-[#0a1628] py-10 text-white">
        <div className="container-width px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Calendar, label: "Dates", value: "Dec 20-21, 2026" },
              { icon: MapPin, label: "Location", value: conferenceMeta.venue },
              { icon: Globe2, label: "Format", value: conferenceMeta.format },
              { icon: Building2, label: "Organized by", value: conferenceMeta.university },
            ].map(({ icon: Icon, label, value }) => (
              <motion.div key={label} {...fadeUp} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1b434]/20 text-[#f1b434]">
                  <Icon size={22} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#f1b434]">{label}</p>
                <p className="mt-1 text-sm text-white/85">{value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/70">
              Call for papers open — Submissions, key dates and details on the official conference website.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a href={conferenceMeta.website} className="font-semibold text-[#f1b434] hover:underline">
                {conferenceMeta.website.replace("https://", "")}
              </a>
              <span className="text-white/30">|</span>
              <a href={`mailto:${conferenceMeta.email}`} className="text-white/80 hover:text-[#f1b434]">
                {conferenceMeta.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
