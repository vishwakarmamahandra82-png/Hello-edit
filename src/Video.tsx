import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence } from 'remotion';

const BG: React.FC<{ c1: string; c2: string }> = ({ c1, c2 }) => {
  const f = useCurrentFrame();
  const y = Math.sin(f * 0.05) * 50;
  return (
    <AbsoluteFill style={{ backgroundColor: '#020617', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -150 + y, left: -100, width: 850, height: 850, borderRadius: '50%', background: c1, filter: 'blur(150px)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: -150 - y, right: -100, width: 850, height: 850, borderRadius: '50%', background: c2, filter: 'blur(150px)', opacity: 0.45 }} />
    </AbsoluteFill>
  );
};

const S1: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 10 } });
  const sub = spring({ frame: f - 20, fps, config: { damping: 12 } });
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1="#0284c7" c2="#4f46e5" />
      <div style={{ zIndex: 1, transform: `scale(${pop})` }}>
        <div style={{ display: 'inline-block', padding: '14px 36px', borderRadius: 50, background: 'rgba(56,189,248,0.2)', border: '3px solid #38bdf8', color: '#38bdf8', fontSize: 32, fontWeight: 800, marginBottom: 40 }}>⚡ FUTURE OF BUSINESS</div>
        <h1 style={{ color: '#fff', fontSize: 94, fontWeight: 900, lineHeight: 1.15, margin: 0 }}>Still Doing Manual Work?</h1>
        <p style={{ opacity: sub, color: '#cbd5e1', fontSize: 42, marginTop: 40 }}>Slow replies are costing you real clients daily.</p>
      </div>
    </AbsoluteFill>
  );
};

const S2: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const list = [
    { icon: '⏳', t: 'Slow Lead Follow-ups', c: '#f43f5e', d: 10 },
    { icon: '📵', t: 'Missed Customer Calls', c: '#fb923c', d: 35 },
    { icon: '🔁', t: 'Repetitive Daily Tasks', c: '#facc15', d: 60 },
  ];
  return (
    <AbsoluteFill style={{ justifyContent: 'center', padding: 65, fontFamily: 'sans-serif' }}>
      <BG c1="#e11d48" c2="#7c3aed" />
      <div style={{ zIndex: 1 }}>
        <h2 style={{ color: '#fff', fontSize: 76, fontWeight: 900, marginBottom: 70, textAlign: 'center' }}>Why Growth Stops</h2>
        {list.map((item, i) => {
          const s = spring({ frame: f - item.d, fps, config: { damping: 12 } });
          return (
            <div key={i} style={{ transform: `translateX(${(1 - s) * -400}px)`, opacity: s, background: 'rgba(15,23,42,0.85)', borderLeft: `14px solid ${item.c}`, borderRadius: 28, padding: '42px 38px', marginBottom: 40, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 54, marginRight: 28 }}>{item.icon}</span>
              <span style={{ color: '#f8fafc', fontSize: 44, fontWeight: 800 }}>{item.t}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const S3: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 10 } });
  const glow = 0.6 + Math.sin(f * 0.12) * 0.3;
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1="#0ea5e9" c2="#2563eb" />
      <div style={{ zIndex: 1, transform: `scale(${pop})`, padding: '85px 50px', borderRadius: 45, background: 'rgba(15,23,42,0.9)', border: '4px solid #38bdf8', boxShadow: `0 0 85px rgba(56,189,248,${glow})` }}>
        <p style={{ color: '#38bdf8', fontSize: 34, fontWeight: 800, letterSpacing: 4, margin: 0 }}>MEET YOUR AI ENGINE</p>
        <h1 style={{ color: '#fff', fontSize: 102, fontWeight: 900, margin: '28px 0' }}>AutoBuildX</h1>
        <p style={{ color: '#cbd5e1', fontSize: 42, lineHeight: 1.4, margin: 0 }}>Smart AI Agents Working 24/7 Without Breaks.</p>
      </div>
    </AbsoluteFill>
  );
};

const S4: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f, fps, config: { damping: 12 } });
  const count = Math.min(80, Math.round((f / 110) * 80));
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 70, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1="#06b6d4" c2="#6366f1" />
      <div style={{ zIndex: 1, transform: `scale(${pop})`, width: '100%' }}>
        <h2 style={{ color: '#94a3b8', fontSize: 42, fontWeight: 700 }}>AUTOMATE UP TO</h2>
        <div style={{ fontSize: 210, fontWeight: 900, color: '#38bdf8', lineHeight: 1, margin: '20px 0' }}>{count}%</div>
        <h3 style={{ color: '#fff', fontSize: 64, fontWeight: 900 }}>Of Your Workflow</h3>
        <div style={{ width: '100%', height: 38, backgroundColor: '#1e293b', borderRadius: 25, marginTop: 60, overflow: 'hidden', padding: 6 }}>
          <div style={{ width: `${count}%`, height: '100%', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: 20 }} />
        </div>
        <p style={{ color: '#e2e8f0', fontSize: 36, marginTop: 50, fontWeight: 600 }}>Instant CRM • Auto Follow-Ups • Fast Scale</p>
      </div>
    </AbsoluteFill>
  );
};

const S5: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f - 10, fps, config: { damping: 10 } });
  const pulse = 1 + Math.sin(f * 0.18) * 0.05;
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 60, fontFamily: 'sans-serif', textAlign: 'center' }}>
      <BG c1="#2563eb" c2="#9333ea" />
      <div style={{ zIndex: 1 }}>
        <h1 style={{ color: '#fff', fontSize: 86, fontWeight: 900, lineHeight: 1.2, marginBottom: 40 }}>Ready To Scale Smarter?</h1>
        <p style={{ color: '#cbd5e1', fontSize: 42, marginBottom: 80 }}>Upgrade your business with custom AI automation.</p>
        <div style={{ transform: `scale(${pop * pulse})`, background: 'linear-gradient(90deg, #38bdf8, #6366f1)', padding: '40px 80px', borderRadius: 65, display: 'inline-block' }}>
          <span style={{ color: '#fff', fontSize: 46, fontWeight: 900 }}>DM &quot;AUTO&quot; NOW</span>
        </div>
        <p style={{ color: '#94a3b8', fontSize: 36, marginTop: 75, fontWeight: 700 }}>🚀 AutoBuildX AI</p>
      </div>
    </AbsoluteFill>
  );
};

export const MyVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#020617' }}>
    <Sequence from={0} durationInFrames={360}><S1 /></Sequence>
    <Sequence from={360} durationInFrames={360}><S2 /></Sequence>
    <Sequence from={720} durationInFrames={360}><S3 /></Sequence>
    <Sequence from={1080} durationInFrames={360}><S4 /></Sequence>
    <Sequence from={1440} durationInFrames={360}><S5 /></Sequence>
  </AbsoluteFill>
);
                          
