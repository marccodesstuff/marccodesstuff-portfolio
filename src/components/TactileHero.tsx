import { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

/**
 * TactileHero - Playable Landing Page Component
 * 
 * A Three.js-powered hero section that embodies the Teenage Engineering philosophy:
 * - Interactive 3D product schematics viewers
 * - Virtual knobs/switches to control view modes
 * - Industrial wireframe aesthetics
 */

interface TactileHeroProps {
  productName?: string;
  onViewModeChange?: (mode: 'wireframe' | 'solid' | 'exploded') => void;
}

const TactileHero = ({ 
  productName = 'TACTILE_MODULE_01', 
  onViewModeChange 
}: TactileHeroProps) => {
  
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  // Track view mode state
  const [viewMode, setViewMode] = useState<'wireframe' | 'solid' | 'exploded'>('wireframe');

  // Helper functions wrapped with useCallback to avoid recreating on every render
  const addWireframeText = useCallback((screen: THREE.Mesh, text: string) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 192;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1f1f1f';
    ctx.fillRect(0, 0, 256, 192);

    ctx.font = 'bold 48px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let x = -3; x <= 3; x++) {
      for (let y = -2.5; y <= 2.5; y += 0.1) {
        const charText = text[y > 0 ? y : Math.floor(y) + 1];
        if (!charText) continue;
        
        ctx.strokeStyle = x === 0 && y === 0 ? '#ff6b1a' : '#393939';
        ctx.lineWidth = 2;
        ctx.strokeText(charText, 128, 96 + y * 12);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    const textMaterial = new THREE.MeshBasicMaterial({ map: texture });
    screen.material = textMaterial;
  }, []);

  const setupLighting = useCallback((scene: THREE.Scene) => {
    const mainLight = new THREE.SpotLight(0xffffff, 2);
    mainLight.position.set(5, 10, 5);
    mainLight.angle = Math.PI / 6;
    mainLight.penumbra = 0.3;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0x4d9eff, 1.5);
    rimLight.position.set(-5, 2, -5);
    scene.add(rimLight);

    const accentLight = new THREE.PointLight(0xff6b1a, 0.8, 10);
    accentLight.position.set(3, 2, 3);
    scene.add(accentLight);

    const fillLight = new THREE.DirectionalLight(0x2a4d9e, 0.5);
    fillLight.position.set(0, -5, 2);
    scene.add(fillLight);

    const gridHelper = new THREE.GridHelper(10, 10, 0x333333, 0x1a1a1a);
    gridHelper.position.y = -1.25;
    scene.add(gridHelper);
  }, []);

  const createProductSchematic = useCallback((scene: THREE.Scene) => {
    const group = new THREE.Group();
    
    const bodyGeometry = new THREE.BoxGeometry(3, 2.5, 1.2);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      roughness: 0.4,
      metalness: 0.8,
    });
    
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    const panelGeometry = new THREE.BoxGeometry(2.9, 1.8, 0.15);
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.6,
    });
    
    const panel = new THREE.Mesh(panelGeometry, panelMaterial);
    panel.position.z = 0.75;
    group.add(panel);

    const knobsGroup = new THREE.Group();
    
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const x = Math.cos(angle) * 0.6;
      const z = Math.sin(angle) * 0.6;
      
      const knobGeometry = new THREE.CylinderGeometry(0.2, 0.25, 0.15, 32);
      const knobMaterial = new THREE.MeshStandardMaterial({
        color: 0x4d4d4d,
        roughness: 0.2,
        metalness: 0.9,
      });
      
      const knob = new THREE.Mesh(knobGeometry, knobMaterial);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(x, 0, z + 0.43);
      
      const grooveGeometry = new THREE.TorusGeometry(0.18, 0.01, 16, 64);
      const grooveMaterial = new THREE.MeshBasicMaterial({
        color: 0x393939,
      });
      
      const groove = new THREE.Mesh(grooveGeometry, grooveMaterial);
      groove.rotation.x = Math.PI / 2;
      groove.position.set(x, 0, z + 0.43);
      
      knobsGroup.add(knob);
      knobsGroup.add(groove);
    }
    
    group.add(knobsGroup);

    const screenGeometry = new THREE.PlaneGeometry(1, 0.7);
    const screenMaterial = new THREE.MeshBasicMaterial({
      color: viewMode === 'wireframe' ? 0x1f1f1f : 0x2a2a2a,
    });
    
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, -0.5, 0.65);
    group.add(screen);

    addWireframeText(screen, 'TE-2X');

    const ioPortsGroup = new THREE.Group();
    
    for (let i = 0; i < 8; i++) {
      const jackGeometry = new THREE.CylinderGeometry(0.06, 0.07, 0.3, 12);
      const jackMaterial = new THREE.MeshStandardMaterial({
        color: 0x4d4d4d,
        roughness: 0.5,
        metalness: 0.7,
      });
      
      const jack = new THREE.Mesh(jackGeometry, jackMaterial);
      jack.rotation.x = Math.PI / 2;
      
      const row = Math.floor(i / 4);
      const col = i % 4;
      const x = -0.5 + col * 0.22;
      const y = -0.6 + row * 0.23;
      
      jack.position.set(x, y, 1.75);
      
      const ringGeometry = new THREE.TorusGeometry(0.08, 0.01, 8, 32);
      const ring = new THREE.Mesh(ringGeometry, jackMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, y, 1.75);
      
      ioPortsGroup.add(jack);
      ioPortsGroup.add(ring);
    }
    
    ioPortsGroup.rotation.y = -Math.PI / 2;
    group.add(ioPortsGroup);

    const indicatorMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x393939 }),
      new THREE.MeshBasicMaterial({ color: 0xff6b1a }),
      new THREE.MeshBasicMaterial({ color: 0x393939 }),
      new THREE.MeshBasicMaterial({ color: 0xffff3c }),
    ];

    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const x = Math.cos(angle) * 0.6;
      const z = Math.sin(angle) * 0.6 + 0.08;
      
      const ringGeometry = new THREE.TorusGeometry(0.17, 0.02, 8, 32);
      const ringMaterial = indicatorMaterials[i % 4];
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, 0, z);
      
      group.add(ring);
    }

    scene.add(group);
    
    const schematicGroup = group as unknown as Record<string, boolean>;
    schematicGroup.__schematic = true;
  }, [viewMode, addWireframeText]);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    mount.innerHTML = '';
    
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    mount.appendChild(container);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0e0e);
    scene.fog = new THREE.Fog(0x0e0e0e, 15, 40);
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      mount.clientWidth / mount.clientHeight,
      0.1, 
      1000
    );
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      canvas: container,
      antialias: true,
      alpha: true
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.autoClearColor = false;
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    createProductSchematic(scene);
    setupLighting(scene);

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = performance.now() * 0.001;
      
      if (viewMode === 'wireframe') {
        const targetRotationY = Math.sin(elapsedTime * 0.3) * 0.3;
        const targetRotationX = Math.cos(elapsedTime * 0.2) * 0.15;
        
        camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.05;
        camera.rotation.x += (targetRotationX - camera.rotation.x) * 0.05;
      } else if (viewMode === 'exploded') {
        camera.rotation.y = elapsedTime * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (mount && camera && renderer) {
        camera.aspect = mount.clientWidth / mount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };

  }, [viewMode, createProductSchematic, setupLighting]);

  return (
    <div 
      ref={mountRef} 
      className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden border-b-2 border-r-2 border-white/10"
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="te-label px-3 py-1 border-l-2 border-orange-500 pl-4">
          {productName}
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => {
            setViewMode('wireframe');
            if (onViewModeChange) onViewModeChange('wireframe');
          }}
          className={`te-button text-[9px] py-2 px-3 ${viewMode === 'wireframe' ? 'border-orange-500' : ''}`}
        >
          WIREFRAME
        </button>
        <button
          onClick={() => {
            setViewMode('solid');
            if (onViewModeChange) onViewModeChange('solid');
          }}
          className={`te-button text-[9px] py-2 px-3 ${viewMode === 'solid' ? 'border-orange-500' : ''}`}
        >
          SOLID
        </button>
        <button
          onClick={() => {
            setViewMode('exploded');
            if (onViewModeChange) onViewModeChange('exploded');
          }}
          className={`te-button text-[9px] py-2 px-3 ${viewMode === 'exploded' ? 'border-orange-500' : ''}`}
        >
          EXPLODED
        </button>
      </div>

      <canvas 
        ref={(node) => {
          if (node && node.tagName === 'CANVAS') {
            node.addEventListener('click', () => {
              window.tactileFeedback?.playClickSound?.();
              console.log('[TACTILE_EASTER_EGG] Hidden control triggered!');
            });
          }
        }}
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
};

export default TactileHero;
