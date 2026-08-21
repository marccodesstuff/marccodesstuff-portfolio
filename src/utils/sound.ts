// Web Audio API Synthesized Sound System
// Pure procedural audio - zero external audio assets required

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

// Initialize sound setting from localStorage if available
try {
  const saved = localStorage.getItem('portfolio_sound_enabled');
  if (saved !== null) {
    soundEnabled = saved === 'true';
  }
} catch {
  // Ignore storage errors
}

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const isSoundEnabled = (): boolean => soundEnabled;

export const setSoundEnabled = (enabled: boolean): void => {
  soundEnabled = enabled;
  try {
    localStorage.setItem('portfolio_sound_enabled', String(enabled));
  } catch {
    // Ignore storage errors
  }
  if (enabled) {
    playClickSound(800, 0.03, 0.05);
  }
};

/**
 * Play a subtle mechanical click sound
 */
export const playClickSound = (frequency = 600, duration = 0.02, gainValue = 0.04): void => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, ctx.currentTime + duration);

    gain.gain.setValueAtTime(gainValue, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Graceful fallback
  }
};

/**
 * Play a light hover tick sound
 */
export const playHoverTick = (): void => {
  if (!soundEnabled) return;
  playClickSound(1200, 0.012, 0.015);
};

/**
 * Play an interactive success/toggle sound
 */
export const playActionBeep = (isSuccess = true): void => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const startFreq = isSuccess ? 440 : 300;
    const endFreq = isSuccess ? 880 : 200;
    const duration = 0.06;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Graceful fallback
  }
};

