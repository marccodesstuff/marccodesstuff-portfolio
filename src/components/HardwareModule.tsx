import { useState } from 'react'

/**
 * HardwareModule - Physical product module card
 * 
 * Displays catalog items as industrial hardware modules with:
 * - Tactile depth via tonal layering
 * - I/O port visualization on hover
 * - Raw data format for technical specs
 */

interface IOPort {
  type: 'in' | 'out';
  label: string;
  connected?: boolean;
}

interface HardwareModuleProps {
  id: string;
  name: string;
  series: string;
  price: string;
  features: string[];
  ioPorts: IOPort[];
  specs: Record<string, string>;
  onHover?: () => void;
  onClick?: () => void;
}

const HardwareModule = ({
  id,
  name,
  series,
  price,
  features,
  ioPorts,
  specs,
  onHover,
  onClick
}: HardwareModuleProps) => {
  
  const [isHovered, setIsHovered] = useState(false);

  // Calculate visual position of IO ports based on hover state
  const portPositions = ioPorts.map((port, index) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    
    return {
      left: `calc(50% + ${col * (22 - 8)}px - ${row === 0 ? '1' : '0'}px)`,
      top: `calc(50% + ${row * (23 - 8)}px - 0.5rem)`,
    };
  });

  return (
    <article
      className="te-module p-6 min-h-[320px] flex flex-col justify-between cursor-pointer relative overflow-hidden group"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      aria-label={`${name} module card`}
    >
      {/* === MODULE ID (Top-left corner) === */}
      <div className="absolute top-2 left-2 z-10">
        <span className="te-label px-2 py-0.5 border-l-2 border-orange-500 pl-2">
          MOD_0{id}
        </span>
      </div>

      {/* === Product Name & Series (Top) === */}
      <header className="mb-4 relative z-10">
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">
          {name}
        </h3>
        <p className="te-label text-xs mt-0.5">{series}</p>
      </header>

      {/* === Main visual area with IO ports on hover === */}
      <div 
        className={`flex-1 relative transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Module chassis placeholder */}
        <div className="w-full h-32 bg-black/20 border border-white/5 rounded-sm">
          {/* Wireframe grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }}
          />
        </div>

        {/* Price badge */}
        <div className="absolute top-4 right-4">
          <span className="te-label px-2 py-0.5 border border-white/10 rounded-sm">
            {price}
          </span>
        </div>
      </div>

      {/* === I/O PORTS DISPLAY (Visible on hover) === */}
      <div 
        className={`absolute inset-0 p-6 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="grid grid-cols-4 gap-3 mb-4">
          {ioPorts.map((port, index) => (
            <div 
              key={index}
              className="absolute flex flex-col items-center"
              style={{ left: portPositions[index].left, top: portPositions[index].top }}
            >
              {/* Port connector - physical-looking jack */}
              <div className={`relative w-5 h-5 border-2 rounded-sm transition-colors ${
                port.connected 
                  ? 'border-orange-500 bg-orange-500/20' 
                  : 'border-te-muted bg-black/40'
              }`}>
                {/* Port type indicator */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7px] whitespace-nowrap">
                  {port.type === 'in' ? 'IN' : port.type === 'out' ? 'OUT' : ''}
                </span>
              </div>

              {/* Port label (raw data format) */}
              <span className="te-label text-[6px] mt-1 max-w-10 truncate">
                {port.label}
              </span>

              {/* Connection LED */}
              {port.connected && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* === RAW DATA PANEL (Technical specs) === */}
        <div className="mt-4 border-t-2 border-dashed border-white/10 pt-3">
          <h4 className="text-[9px] font-bold text-te-muted uppercase mb-2 tracking-widest">
            /// RAW_DATA_DUMP
          </h4>

          {/* Specs in raw data format */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] font-mono">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex items-baseline gap-1">
                <span className="text-te-muted">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <ul className="mt-3 space-y-1 text-[8px] font-mono">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* === MODULE STATUS INDICATORS === */}
        <div className="mt-3 flex items-center justify-between text-[7px] font-mono">
          <span>CPU_LOAD: 12%</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="w-1.5 h-1.5 bg-te-muted rounded-full" />
            <span className="w-1.5 h-1.5 bg-te-muted rounded-full" />
          </span>
        </div>
      </div>

      {/* === HOVER OVERLAY (Clicky interaction hint) === */}
      <div 
        className={`absolute inset-0 border-2 pointer-events-none transition-all duration-100 ${
          isHovered 
            ? 'border-orange-500/80 translate-x-[-4px] translate-y-[-2px]' 
            : 'border-transparent'
        }`}
      />

    </article>
  );
};

/**
 * Module catalog - Grid of hardware modules with I/O visualization
 */
const ModuleCatalog = () => {
  
  // Sample product data (expandable)
  const products = [
    {
      id: '01',
      name: 'TACTILE_ENGINEER',
      series: 'TE-2X PROFESSIONAL',
      price: '$499.00',
      features: [
        'Rotary encoder control',
        'Visual feedback displays',
        'Modular I/O architecture',
        'Industrial-grade chassis'
      ],
      ioPorts: [
        { type: 'in', label: 'CV/Gate' },
        { type: 'out', label: 'VCA_IN' },
        { type: 'out', label: 'OSC_OUT' },
        { type: 'in', label: 'TRIG_IN' },
        { type: 'in', label: 'MIDI_IN' },
        { type: 'out', label: 'MIDI_OUT' },
        { type: 'in', label: 'CV/Gate' },
        { type: 'in', label: '12V_POWER' }
      ],
      specs: {
        PROCESSOR: 'ARM_CORTEX_M7',
        MEMORY: '512MB_LLPURAM',
        AUDIO: '32BIT_FLOAT_96KHZ',
        MIDI: 'USB_2.0_FULL_DUPLEX'
      }
    },
    {
      id: '02',
      name: 'SEQUENCER_PLUS',
      series: 'TE-2X ADVANCED',
      price: '$349.00',
      features: [
        '16-step polyphonic sequencer',
        'Real-time performance mode',
        'Pattern chaining system',
        'Step draw interface'
      ],
      ioPorts: [
        { type: 'out', label: 'TRIG_A' },
        { type: 'in', label: 'STEP_DATA' },
        { type: 'in', label: 'SEQUENCE_IN' },
        { type: 'out', label: 'SYNC_OUT' },
        { type: 'out', label: 'CV_SEQ' },
        { type: 'in', label: 'GATE' },
        { type: 'in', label: 'MIDI_SEQ' },
        { type: 'in', label: 'BCLK' }
      ],
      specs: {
        CLOCK_RATE: '24.576_MHZ',
        BUFFER_SIZE: '192_SAMPLES',
        JITTER: '<_50US',
        THRU_RATE: '30_KBPS'
      }
    },
    {
      id: '03',
      name: 'WAVE_SHAPER_X',
      series: 'TE-2X ANALOG',
      price: '$429.00',
      features: [
        '128 oscillator algorithms',
        'Multi-mode filters',
        'Analog modeling engine',
        'Physical layering effects'
      ],
      ioPorts: [
        { type: 'in', label: 'OSC_IN_1' },
        { type: 'out', label: 'OSC_OUT_1' },
        { type: 'in', label: 'FILTER_CV' },
        { type: 'out', label: 'MOD_OUT' },
        { type: 'in', label: 'MIDI_CONTROL' },
        { type: 'out', label: 'AUDIO_L' },
        { type: 'out', label: 'AUDIO_R' },
        { type: 'in', label: 'FX_SEND' }
      ],
      specs: {
        OSCILLATORS: '128_ALGORITHMS',
        FILTERS: '6_MODE_MULTI',
        MAX_DELAY: '4096_SAMPLES',
        FX_CHAIN: '4_PROCESSORS'
      }
    }
  ];

  return (
    <section className="p-6 lg:p-8 border-l border-r border-t border-white/10 bg-black/20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section header */}
        <div className="mb-6 flex items-end justify-between border-b-2 border-white/10 pb-3">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-1">
              Hardware_Catalog.EXE
            </h2>
            <p className="te-label text-sm mt-0">MODULES_01_THRU_09 // SCROLL_FOR_MORE</p>
          </div>

          <button 
            className="te-button primary text-[9px] py-2 px-4 opacity-80 hover:opacity-100"
            onClick={() => window.tactileFeedback?.playClickSound()}
          >
            EXPORT_BOM
          </button>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {products.map((product) => (
            <HardwareModule 
              key={product.id}
              {...product}
              onHover={() => {
                window.tactileFeedback?.animateTactile?.(
                  document.activeElement,
                  { duration: 0.1 }
                );
              }}
            />
          ))}
        </div>

        {/* Footer notes */}
        <div className="mt-6 p-4 bg-black/30 border border-white/5">
          <div className="flex items-start gap-3">
            <span className="text-orange-500 text-xl">⚠</span>
            <div>
              <h4 className="text-sm font-bold text-te-fg mb-1">CAUTION: HIGH-VOLTAGE MODULES</h4>
              <p className="text-xs text-te-muted leading-relaxed max-w-lg">
                These modules operate at digital logic levels (0-5V). Do not connect analog equipment without proper isolation. 
                The I/O ports shown are logical representations; physical connections may vary by firmware version.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ModuleCatalog;
export { HardwareModule, ModuleCatalog };
