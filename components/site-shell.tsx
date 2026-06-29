"use client";

import Image from "next/image";
import Link from "next/link";
import { conferenceMeta, importantDates } from "@/lib/data";
import { content } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";
import { useCountdown } from "@/hooks/use-countdown";
import { ArrowUp, Globe2, Mail, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const navItems = content[language].nav;
  const paths = ["/about", "/topics", "/speakers", "/dates", "/submission", "/registration", "/program", "/committee", "/sponsors", "/contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-background/70 backdrop-blur-xl">
      <nav className="container-width flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={160} height={60} className="h-auto w-auto max-h-14" priority />
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((label, i) => <Link key={label} href={paths[i]} className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">{label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Toggle language" onClick={() => setLanguage(language === "en" ? "fr" : "en")} className="glass inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm"><Globe2 size={14} />{language.toUpperCase()}</button>
          <button onClick={() => setOpen(!open)} className="glass rounded-full p-2 lg:hidden" aria-label="Open menu"><Menu size={16} /></button>
        </div>
      </nav>
      {open && (
        <div className="glass container-width grid gap-1 p-3 lg:hidden">
          {navItems.map((label, i) => <Link onClick={() => setOpen(false)} key={label} href={paths[i]} className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">{label}</Link>)}
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="glass rounded-full p-2">
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const timer = useCountdown(conferenceMeta.targetDate);
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass rounded-3xl p-8 md:p-12">
          <p className="mb-4 inline-block rounded-full bg-[#f1b434]/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#f1b434]">Proceedings Indexed in Scopus</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{conferenceMeta.shortName}</h1>
          <p className="mt-2 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{conferenceMeta.title}</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300">{conferenceMeta.date} • {conferenceMeta.venue}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Object.entries(timer).map(([k, v]) => <div key={k} className="glass rounded-2xl p-3 text-center"><p className="text-2xl font-bold">{v}</p><p className="text-xs uppercase text-slate-500">{k}</p></div>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/submission" className="rounded-full bg-[#0a1628] px-5 py-3 text-sm font-medium text-white dark:bg-[#f1b434] dark:text-[#0a1628]">{content[language].ctaSubmit}</Link>
            <Link href="/registration" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium">{content[language].ctaRegister}</Link>
            <Link href="/program" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium">{content[language].ctaProgram}</Link>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 py-12 dark:border-slate-700/60">
      <div className="container-width grid gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="font-semibold">{conferenceMeta.shortName}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{conferenceMeta.theme}</p>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Quick Links</p>
          <div className="grid gap-1 text-sm"><Link href="/submission">Submission</Link><Link href="/registration">Registration</Link><Link href="/program">Program</Link></div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Newsletter</p>
          <form className="flex gap-2"><input className="glass w-full rounded-xl px-3 py-2 text-sm" placeholder="Your email" /><button className="rounded-xl bg-[#0a1628] px-4 text-white dark:bg-[#f1b434] dark:text-[#0a1628]"><Mail size={16} /></button></form>
        </div>
      </div>
      <p className="container-width mt-8 px-4 text-xs text-slate-500">© 2026 {conferenceMeta.shortName}. All rights reserved.</p>
    </footer>
  );
}

export function BackToTop() {
  return (
    <a href="#" className="fixed bottom-6 right-6 z-50 rounded-full bg-[#0a1628] p-3 text-white shadow-lg dark:bg-[#f1b434] dark:text-[#0a1628]"><ArrowUp size={16} /></a>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}

export function DatesPreview() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionTitle title="Important Dates" subtitle="Keep track of all submission milestones." />
        <div className="grid gap-3">
          {importantDates.map((item) => (
            <div className="glass flex items-center justify-between rounded-2xl p-4" key={item.label}>
              <p>{item.label}</p><p className="text-sm text-slate-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
