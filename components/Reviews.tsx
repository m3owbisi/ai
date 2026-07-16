"use client";
import React from "react";
import { Star } from "@phosphor-icons/react";

const REVIEWS = [
  {
    stars: 5,
    quote: `"I get 30 calls a day from credit card agents. Equal handles every single one. My focus is back. My evenings are mine again."`,
    name: "Arjun Mehta",
    role: "Founder · Bengaluru",
  },
  {
    stars: 5,
    quote: `"My mother kept falling for OTP scams. Equal blocks fraud automatically — I sleep better knowing it watches over her phone too."`,
    name: "Priya Sharma",
    role: "Doctor · Delhi",
  },
  {
    stars: 5,
    quote: `"It answered in Tamil when my dad called. He didn't even realize it was AI. My family finally has a way to reach me — without me losing focus."`,
    name: "Rajesh Kumar",
    role: "Product Manager · Chennai",
  },
  {
    stars: 5,
    quote: `"Equal booked a meeting with my client while I was in surgery. Sent the invite. Briefed me after. This is what an assistant should be."`,
    name: "Dr. Sneha Iyer",
    role: "Cardiologist · Mumbai",
  },
  {
    stars: 5,
    quote: `"I run a 200-person team. Equal screens every cold call, every pitcher, every spam. Only my team and family get through. Worth 10x the price."`,
    name: "Vikram Singh",
    role: "CEO · Gurgaon",
  },
  {
    stars: 5,
    quote: `"Best decision I made to get my time back. My phone used to control me. Now Equal does — quietly, in the background. It just works."`,
    name: "Meera Reddy",
    role: "Designer · Hyderabad",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="w-full py-24 bg-background relative z-10 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-12 w-full">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent-color">
            05 / WHAT PEOPLE ARE SAYING
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary leading-tight">
            Loved by founders, doctors,<br />parents, and <span className="text-accent-color">people who got tired</span><br />of picking up.
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 bg-surface-1 border border-white/5 rounded-2xl flex flex-col justify-between gap-6 hover:border-white/10 transition-colors duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-0.5 text-accent-color">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={14} weight="fill" />
                  ))}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                  {rev.quote}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-2 border border-white/5 flex items-center justify-center font-bold text-xs text-text-primary uppercase">
                  {rev.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-text-primary leading-none">
                    {rev.name}
                  </span>
                  <span className="text-[10px] text-text-quiet mt-1 leading-none font-mono">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 mt-6">
          <span className="text-xs text-text-secondary font-medium">
            Join thousands of Indians who&apos;ve quietly switched.
          </span>
          <div className="flex items-center gap-1.5 text-xs text-text-quiet font-mono">
            <span className="text-accent-color">★</span>
            <span>4.5 average rating · 30L+ downloads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
