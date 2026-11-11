import React from "react";
import Link from "next/link";
import { DRIP_CONFIG, getDaysSinceLaunch, isDayUnlocked } from "@/config/dripFeed";
import { Calendar, Clock, CheckCircle2, Lock, Sparkles, ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Programmatic Drip-Feeding Engine Status | Arora Group Wholesale",
  description: "Monitor the 19-day automated programmatic SEO drip-feeding schedule for antitarnishjewellerywholesaledelhi.com",
};

export default function DripStatusPage() {
  const currentDay = getDaysSinceLaunch();
  const schedule = DRIP_CONFIG.schedule;

  let totalUnlockedPages = 0;
  schedule.forEach((stage) => {
    if (isDayUnlocked(stage.dayNumber)) {
      totalUnlockedPages += stage.pageCount;
    }
  });

  const percentProgress = Math.min(100, Math.round((totalUnlockedPages / DRIP_CONFIG.totalPages) * 100));

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold-300 mb-3">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            Programmatic SEO Safety Shield
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">
            Automated Drip-Feeding Controller
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Gradually exposes 150 programmatic pages to Googlebot across a 19-day schedule at a natural pace of <strong>~7 to 8 pages per day</strong> to avoid doorway sandbox filters.
          </p>
        </div>

        {/* Live Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              Drip Engine Status
            </span>
            <div className="text-xl font-black text-emerald-700 flex items-center gap-1.5 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {DRIP_CONFIG.enabled ? "Active & Paced" : "All Instant"}
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Controlled via /src/config/dripFeed.ts</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              Current Rollout Day
            </span>
            <div className="text-2xl font-black text-emerald-950 mt-1">
              Day {currentDay} <span className="text-sm font-normal text-gray-400">of 19</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Launch Date: {DRIP_CONFIG.launchDate}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              Pages Unlocked in Sitemap
            </span>
            <div className="text-2xl font-black text-gold-600 mt-1">
              {totalUnlockedPages} <span className="text-sm font-normal text-gray-400">/ 150 Pages</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">{percentProgress}% of total matrix</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              Pacing Rate
            </span>
            <div className="text-2xl font-black text-emerald-950 mt-1">
              ~8 Pages <span className="text-sm font-normal text-gray-400">/ day</span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1">Zero thin-EMD velocity risk</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-12">
          <div className="flex items-center justify-between mb-2 text-xs font-bold text-gray-700">
            <span>Overall Indexation Progress ({totalUnlockedPages} / 150 Pages)</span>
            <span className="text-emerald-700 font-extrabold">{percentProgress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 to-gold-500 rounded-full transition-all duration-500"
              style={{ width: `${percentProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between mt-3 text-[11px] text-gray-500">
            <span>Day 1: Foundation (7 pages)</span>
            <span>Day 11: 86 pages</span>
            <span>Day 19: Full 150 pages</span>
          </div>
        </div>

        {/* 19-Day Schedule Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-emerald-950">
                19-Day Rollout Schedule Breakdown
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Pages unlock dynamically inside <code className="text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">/sitemap.xml</code> based on wall-clock calendar days.
              </p>
            </div>

            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 shadow"
            >
              <span>Inspect Live sitemap.xml</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-3">
            {schedule.map((stage) => {
              const isUnlocked = isDayUnlocked(stage.dayNumber);
              const isToday = currentDay === stage.dayNumber;

              return (
                <div
                  key={stage.dayNumber}
                  className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                    isToday
                      ? "bg-gold-50/80 border-gold-400 ring-1 ring-gold-400"
                      : isUnlocked
                      ? "bg-emerald-50/30 border-emerald-200"
                      : "bg-gray-50/50 border-gray-200/70 opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                        isToday
                          ? "bg-gold-500 text-white font-black shadow"
                          : isUnlocked
                          ? "bg-emerald-700 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      D{stage.dayNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-gray-900">{stage.stageName}</h3>
                        {isToday && (
                          <span className="text-[10px] bg-gold-400 text-emerald-950 px-2 py-0.5 rounded font-black uppercase tracking-wider">
                            Active Today
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{stage.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <span className="text-xs font-bold text-gray-700 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                      +{stage.pageCount} pages
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      {isUnlocked ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Unlocked</span>
                        </span>
                      ) : (
                        <span className="text-gray-400 flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Locked</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How to Customize */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950 to-emerald-900 text-white shadow-xl">
          <h3 className="font-bold text-base text-gold-300 mb-2">
            ⚙️ How to Adjust the Drip Feeding Schedule
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-4">
            You have full programmatic control over the rollout pace inside{" "}
            <code className="text-gold-300 bg-emerald-900 px-1.5 py-0.5 rounded font-mono">
              /src/config/dripFeed.ts
            </code>
            :
          </p>
          <ul className="space-y-2 text-xs text-emerald-200">
            <li>• <strong>Instant 100% Launch:</strong> Set <code className="bg-emerald-900 px-1 text-white rounded">enabled: false</code> to unlock all 150 pages in sitemap immediately.</li>
            <li>• <strong>Adjust Launch Date:</strong> Set <code className="bg-emerald-900 px-1 text-white rounded">launchDate: "YYYY-MM-DD"</code> to anchor the schedule to your exact domain launch day.</li>
            <li>• <strong>Accelerate / Slow Down:</strong> Adjust the day mapping arrays inside <code className="bg-emerald-900 px-1 text-white rounded">sitemap.ts</code>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
