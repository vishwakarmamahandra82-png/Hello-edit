import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from 'remotion';

const Prince3DAvatar: React.FC = () => {
  const f = useCurrentFrame();
  const floatY = Math.sin(f * 0.14) * 8;
  const tilt = Math.sin(f * 0.08) * 3;
  const mouth = Math.abs(Math.sin(f * 0.7)) * 11 + 3;
  const ringRotate = f * 2;

  return (
    <div style={{ transform: `translateY(${floatY}px) perspective(900px) rotateY(${tilt}deg)`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: 330, height: 330, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', width: 310, height: 310, borderRadius: '50%', border: '4px dashed #38bdf8', transform: `rotate(${ringRotate}deg)`, opacity: 0.7 }} />
        <div style={{ position: 'absolute', width: 275, height: 275, borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #1e293b, #020617)', boxShadow: '0 25px 60px rgba(56,189,248,0.5), inset 0 0 30px rgba(56,189,248,0.4)', border: '3px solid #38bdf8' }} />
        <svg width="250" height="260" viewBox="0 0 220 240" style={{ zIndex: 2 }}>
          <defs>
            <radialGradient id="skin3d" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffe4c4" />
              <stop offset="65%" stopColor="#e0ac69" />
              <stop offset="100%" stopColor="#8d5524" />
            </radialGradient>
            <linearGradient id="suit3d" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>
          </defs>
          <path d="M35 230 Q45 165 110 165 Q175 165 185 230 Z" fill="url(#suit3d)" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M82 166 L110 215 L138 166 Z" fill="#0ea5e9" />
          <rect x="94" y="135" width="32" height="36" rx="10" fill="#c68642" />
          <path d="M62 75 L65 115 Q110 158 155 115 L158 75 Q110 55 62 75 Z" fill="url(#skin3d)" />
          <path d="M64 105 Q68 145 110 152 Q152 145 156 105 Q148 134 110 138 Q72 134 64 105 Z" fill="#0f172a" opacity="0.85" />
          <path d="M56 88 Q52 38 95 28 Q135 18 164 46 Q172 68 162 88 Q155 58 115 54 Q72 52 56 88 Z" fill="#090d16" />
          <rect x="68" y="83" width="36" height="20" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="3" />
          <rect x="116" y="83" width="36" height="20" rx="6" fill="#020617" stroke="#38bdf8" strokeWidth="3" />
          <line x1="104" y1="90" x2="116" y2="90" stroke="#38bdf8" strokeWidth="3" />
          <ellipse cx="110" cy="127" rx="11" ry={mouth * 0.55} fill="#e11d48" />
        </svg>
      </div>
      <div style={{ background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', color: '#fff', padding: '8px 30px', borderRadius: 24, fontWeight: 900, fontSize: 26, marginTop: -10, boxShadow: '0 10px 25px rgba(56,189,248,0.5)' }}>
        PRINCE • AUTOBUILD-X
      </div>
    </div>
  );
};

const BG: React.FC<{ c1: string; c2: string }> = ({ c1, c2 }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: '#020617', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120 + Math.sin(f * 0.08) * 90, left: -80, width: 800, height: 800, borderRadius: '50%', background: c1, filter: 'blur(150px)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: -120 - Math.cos(f * 0.08) * 90, right: -80, width: 800, height: 800, borderRadius: '50%', background: c2, filter: 'blur(150px)', opacity: 0.45 }} />
    </AbsoluteFill>
  );
};

const Slide: React.FC<{ tag: string; title: string; box: string; c1: string; c2: string }> = ({ tag, title, box, c1, c2 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 11, stiffness: 130 } });
  const up = spring({ frame: f - 6, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ justifyContent: 'space-between', alignItems: 'center', padding: '95px 55px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1={c1} c2={c2} />
      <div style={{ zIndex: 1, transform: `scale(${pop})`, width: '100%' }}>
        <div style={{ display: 'inline-block', padding: '12px 30px', borderRadius: 40, background: 'rgba(56,189,248,0.15)', border: '2px solid #38bdf8', color: '#38bdf8', fontSize: 28, fontWeight: 800, marginBottom: 25 }}>{tag}</div>
        <h1 style={{ color: '#fff', fontSize: 78, fontWeight: 900, lineHeight: 1.15, margin: 0 }}>{title}</h1>
        <div style={{ transform: `translateY(${(1 - up) * 40}px)`, opacity: up, background: 'rgba(15,23,42,0.88)', border: '2px solid rgba(56,189,248,0.45)', borderRadius: 28, padding: '32px', marginTop: 35, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <p style={{ color: '#f1f5f9', fontSize: 38, fontWeight: 800, margin: 0 }}>{box}</p>
        </div>
      </div>
      <div style={{ zIndex: 1 }}>
        <Prince3DAvatar />
      </div>
    </AbsoluteFill>
  );
};

export const MyVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#020617' }}>
    <Audio src={staticFile('voice.mp3')} />
    <Sequence from={0} durationInFrames={165}><Slide tag="⚡ 24/7 BUSINESS" title="Imagine 24/7 Growth" box="Bina ruke, bina thake, bina kisi human dependency ke!" c1="#0284c7" c2="#4f46e5" /></Sequence>
    <Sequence from={165} durationInFrames={180}><Slide tag="⚠️ THE PROBLEM" title="Why Businesses Lose Clients" box="Late replies, missed follow-ups aur badhta workload." c1="#e11d48" c2="#7c3aed" /></Sequence>
    <Sequence from={345} durationInFrames={135}><Slide tag="🤖 THE SHIFT" title="Everything Is Changing" box="AI Agents ke saath ab ye sab badal raha hai!" c1="#0ea5e9" c2="#2563eb" /></Sequence>
    <Sequence from={480} durationInFrames={195}><Slide tag="🚀 AI CAPABILITIES" title="What AI Agents Do" box="Auto Replies • Lead Capture • Smart Follow-Ups" c1="#059669" c2="#0284c7" /></Sequence>
    <Sequence from={675} durationInFrames={180}><Slide tag="🧠 SMART WORKFLOW" title="Humans + AI Power" box="Humans strategy par focus karein, AI repetitive kaam!" c1="#7c3aed" c2="#2563eb" /></Sequence>
    <Sequence from={855} durationInFrames={135}><Slide tag="🌐 FUTURE IS HERE" title="Welcome To The Future" box="Next-Generation Business Automation." c1="#06b6d4" c2="#4f46e5" /></Sequence>
    <Sequence from={990} durationInFrames={135}><Slide tag="🔥 BRAND REVEAL" title="We Are AutoBuild-X" box="Building Autonomous AI Systems For Modern Brands." c1="#2563eb" c2="#9333ea" /></Sequence>
    <Sequence from={1125} durationInFrames={195}><Slide tag="⚡ TAKE ACTION" title="Build An Intelligent Business" box="Don't just run your business — Automate it today!" c1="#38bdf8" c2="#6366f1" /></Sequence>
  </AbsoluteFill>
);
