import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from 'remotion';

const PrinceCharacter: React.FC<{ speaking: boolean }> = ({ speaking }) => {
  const f = useCurrentFrame();
  const bounce = Math.sin(f * 0.14) * 5;
  const tilt = Math.sin(f * 0.08) * 2.5;
  const mouthOpen = speaking ? Math.abs(Math.sin(f * 0.65)) * 11 + 3 : 3;

  return (
    <div style={{ transform: `translateY(${bounce}px) rotate(${tilt}deg)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width="360" height="390" viewBox="0 0 220 240">
        <defs>
          <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="tee" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffdbac" />
            <stop offset="100%" stopColor="#f1c27d" />
          </linearGradient>
        </defs>

        {/* Shoulders & Blazer */}
        <path d="M35 230 Q45 165 110 165 Q175 165 185 230 Z" fill="url(#jacket)" stroke="#38bdf8" strokeWidth="2" />
        {/* Inner T-Shirt */}
        <path d="M82 166 L110 215 L138 166 Z" fill="url(#tee)" />
        {/* Blazer Lapels */}
        <path d="M75 166 L110 225 L92 166 Z" fill="#334155" />
        <path d="M145 166 L110 225 L128 166 Z" fill="#334155" />

        {/* Neck */}
        <rect x="94" y="135" width="32" height="36" rx="10" fill="#e0ac69" />

        {/* Sharp Jawline Face */}
        <path d="M62 75 L65 115 Q110 158 155 115 L158 75 Q110 55 62 75 Z" fill="url(#skin)" />

        {/* Stylish Beard & Jaw Contour */}
        <path d="M64 105 Q68 145 110 152 Q152 145 156 105 Q148 134 110 138 Q72 134 64 105 Z" fill="#1e293b" opacity="0.85" />

        {/* Stylish Quiff Hair */}
        <path d="M56 88 Q52 38 95 28 Q135 18 164 46 Q172 68 162 88 Q155 58 115 54 Q72 52 56 88 Z" fill="#0f172a" />
        <path d="M85 32 Q115 15 148 34 Q122 36 85 32 Z" fill="#334155" />

        {/* Eyebrows */}
        <path d="M72 78 Q86 73 98 78" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M122 78 Q134 73 148 78" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Cool Tinted Sunglasses */}
        <rect x="68" y="83" width="36" height="20" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="2.5" />
        <rect x="116" y="83" width="36" height="20" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1="104" y1="90" x2="116" y2="90" stroke="#38bdf8" strokeWidth="3" />
        {/* Glass Shine */}
        <line x1="74" y1="87" x2="84" y2="98" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="122" y1="87" x2="132" y2="98" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Nose */}
        <path d="M110 92 L106 112 L114 114" stroke="#c68642" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Lip-sync Mouth */}
        <ellipse cx="110" cy="127" rx="11" ry={mouthOpen * 0.55} fill="#be123c" />
        <path d="M99 125 Q110 122 121 125" stroke="#881337" strokeWidth="2" fill="none" />
      </svg>
      <div style={{ background: 'linear-gradient(90deg, #38bdf8, #6366f1)', color: '#fff', padding: '8px 28px', borderRadius: 24, fontWeight: 900, fontSize: 26, marginTop: -12, boxShadow: '0 8px 25px rgba(56,189,248,0.4)' }}>PRINCE • AI FOUNDER</div>
    </div>
  );
};

const BG: React.FC<{ c1: string; c2: string }> = ({ c1, c2 }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: '#020617', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100 + Math.sin(f * 0.08) * 80, left: -80, width: 750, height: 750, borderRadius: '50%', background: c1, filter: 'blur(140px)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: -100 - Math.cos(f * 0.08) * 80, right: -80, width: 750, height: 750, borderRadius: '50%', background: c2, filter: 'blur(140px)', opacity: 0.45 }} />
    </AbsoluteFill>
  );
};

const Scene: React.FC<{ badge: string; title: string; sub: string; c1: string; c2: string }> = ({ badge, title, sub, c1, c2 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 11, stiffness: 120 } });
  const slide = spring({ frame: f - 8, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ justifyContent: 'space-between', alignItems: 'center', padding: '100px 55px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1={c1} c2={c2} />
      <div style={{ zIndex: 1, transform: `scale(${pop})`, width: '100%' }}>
        <div style={{ display: 'inline-block', padding: '12px 32px', borderRadius: 40, background: 'rgba(255,255,255,0.1)', border: '2px solid #38bdf8', color: '#38bdf8', fontSize: 30, fontWeight: 800, marginBottom: 28 }}>{badge}</div>
        <h1 style={{ color: '#fff', fontSize: 82, fontWeight: 900, lineHeight: 1.15, margin: 0 }}>{title}</h1>
        <div style={{ transform: `translateY(${(1 - slide) * 40}px)`, opacity: slide, background: 'rgba(15,23,42,0.85)', border: '2px solid rgba(56,189,248,0.4)', borderRadius: 28, padding: '30px', marginTop: 35 }}>
          <p style={{ color: '#e2e8f0', fontSize: 40, fontWeight: 700, margin: 0 }}>{sub}</p>
        </div>
      </div>
      <div style={{ zIndex: 1 }}>
        <PrinceCharacter speaking={true} />
      </div>
    </AbsoluteFill>
  );
};

export const MyVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#020617' }}>
    <Audio src={staticFile('voice.mp3')} />
    <Sequence from={0} durationInFrames={130}>
      <Scene badge="⚠️ MANUAL WORK TRAP" title="Still Replying Manually?" sub="Slow replies & missed calls cost you clients daily." c1="#e11d48" c2="#4f46e5" />
    </Sequence>
    <Sequence from={130} durationInFrames={150}>
      <Scene badge="🚀 MEET AUTOBUILDX" title="Automate 80% Workflow" sub="24/7 AI Agents • Instant CRM • Zero Burnout" c1="#0284c7" c2="#7c3aed" />
    </Sequence>
    <Sequence from={280} durationInFrames={170}>
      <Scene badge="⚡ READY TO SCALE?" title="DM 'AUTO' TO START" sub="Upgrade your business with AutoBuildX AI today!" c1="#2563eb" c2="#06b6d4" />
    </Sequence>
  </AbsoluteFill>
);
                     

