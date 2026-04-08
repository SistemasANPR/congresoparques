import { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'triangle';
  color: string;
}

const COLORS = ['#d0dd15', '#fd00fd', '#00dfbf', '#6847f6', '#1edede'];
const MAX_PARTICLES = 60;
const PARTICLE_THROTTLE = 16;

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastEmitRef = useRef(0);
  const animationRef = useRef<number>();
  const [isEnabled, setIsEnabled] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const createParticle = useCallback((x: number, y: number): Particle => {
    const isCircle = Math.random() > 0.5;
    const size = isCircle 
      ? 4 + Math.random() * 6 
      : 6 + Math.random() * 8;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 1.5;
    const displacement = 6 + Math.random() * 12;
    
    return {
      x: x + (Math.random() - 0.5) * displacement,
      y: y + (Math.random() - 0.5) * displacement,
      size,
      opacity: 0.9,
      life: 0,
      maxLife: 500 + Math.random() * 400,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      type: isCircle ? 'circle' : 'triangle',
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };
  }, []);

  const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, -size / 2);
    ctx.lineTo(size / 2, size / 2);
    ctx.lineTo(-size / 2, size / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice || !isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      const now = performance.now();
      if (now - lastEmitRef.current > PARTICLE_THROTTLE) {
        const particleCount = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < particleCount; i++) {
          if (particlesRef.current.length < MAX_PARTICLES) {
            particlesRef.current.push(createParticle(e.clientX, e.clientY));
          }
        }
        lastEmitRef.current = now;
      }
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter(p => {
        p.life += 16;
        if (p.life >= p.maxLife) return false;
        
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.rotation += p.rotationSpeed;
        p.opacity = 0.9 * (1 - p.life / p.maxLife);
        
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        
        if (p.type === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawTriangle(ctx, p.x, p.y, p.size, p.rotation);
        }
        
        return true;
      });
      
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isEnabled, prefersReducedMotion, isTouchDevice, createParticle]);

  useEffect(() => {
    const existingStyle = document.getElementById('custom-cursor-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    if (isTouchDevice || !isEnabled || prefersReducedMotion) return;
    
    const normalCursor = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='normalGrad' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23D0DD15'/%3E%3Cstop offset='25%25' stop-color='%23D0DD15'/%3E%3Cstop offset='40%25' stop-color='%2300DFBF'/%3E%3Cstop offset='100%25' stop-color='%2300DFBF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M22 2L15 22L11 13L2 9L22 2Z' fill='url(%23normalGrad)' stroke='%230e0477' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22 2L11 13' stroke='%230e0477' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E`;
    
    const hoverCursor = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cdefs%3E%3ClinearGradient id='hoverGrad' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23D0DD15'/%3E%3Cstop offset='25%25' stop-color='%23D0DD15'/%3E%3Cstop offset='40%25' stop-color='%23F71CDD'/%3E%3Cstop offset='100%25' stop-color='%23F71CDD'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M22 2L15 22L11 13L2 9L22 2Z' fill='url(%23hoverGrad)' stroke='%230e0477' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22 2L11 13' stroke='%230e0477' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E`;

    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = `
      * {
        cursor: url("${normalCursor}") 2 2, auto !important;
        transition: cursor 200ms ease;
      }
      
      a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer {
        cursor: url("${hoverCursor}") 2 2, pointer !important;
      }
      
      input:not([type="submit"]):not([type="button"]), textarea, select {
        cursor: text !important;
      }
      
      *:focus-visible {
        cursor: auto !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById('custom-cursor-style');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isTouchDevice, isEnabled, prefersReducedMotion]);

  const toggleCursor = () => {
    setIsEnabled(prev => !prev);
  };

  if (isTouchDevice) return null;

  return (
    <>
      {!prefersReducedMotion && isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9998 }}
          aria-hidden="true"
        />
      )}
      <button
        onClick={toggleCursor}
        className="fixed top-24 right-4 z-[9999] bg-white/90 backdrop-blur-sm text-[#0e0477] px-3 py-2 rounded-full text-xs font-medium shadow-lg border border-[#0e0477]/20 hover:bg-[#0e0477] hover:text-white transition-colors duration-200"
        aria-label={isEnabled ? 'Desactivar efectos del cursor' : 'Activar efectos del cursor'}
        data-testid="toggle-cursor-effects"
      >
        {isEnabled ? '✨ Efectos ON' : '✨ Efectos OFF'}
      </button>
    </>
  );
}

export default CustomCursor;
