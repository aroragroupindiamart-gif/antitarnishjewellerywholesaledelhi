import React from "react";
import { Play, Sparkles, ShieldCheck, MapPin } from "lucide-react";

interface ShowroomVideoEmbedProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function ShowroomVideoEmbed({
  title = "Take a Virtual Tour of Arora Group Wholesale (Delhi Hub)",
  subtitle = "See our live stock, physical showroom in Tagore Garden Extension, and 100% 316L anti-tarnish jewellery verification.",
  badge = "Verified Warehouse & Showroom Tour",
  className = "",
}: ShowroomVideoEmbedProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-gold-500/40 text-white shadow-2xl overflow-hidden relative">
        {/* Glow ambient effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mb-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/30 mb-3">
            <Play className="w-3.5 h-3.5 fill-current text-gold-400" />
            <span>{badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 16:9 Responsive Video Container */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/80 bg-black/80 z-10">
          <iframe
            src="https://www.youtube.com/embed/2J4ztUw796I?rel=0&modestbranding=1"
            title="Arora Group Wholesale Delhi Anti Tarnish Jewellery Showroom Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Video Key Takeaways Strip */}
        <div className="mt-6 pt-5 border-t border-emerald-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-emerald-100 relative z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
            <span><strong>Verified Stock:</strong> Over 1,000+ ready-to-dispatch designs</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span><strong>Physical Facility:</strong> E-134, Tagore Garden Extension, Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
            <span><strong>Zero Risk:</strong> Flat ₹3,000 MOV & 0 item MOQ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
