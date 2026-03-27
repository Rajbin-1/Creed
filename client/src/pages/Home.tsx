import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';

/**
 * Design Philosophy: Premium Minimalist with Red Accent
 * Landing Page - Hero Section + Bottom Navigation
 */

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mistLayer1Ref = useRef<HTMLDivElement>(null);
  const mistLayer2Ref = useRef<HTMLDivElement>(null);
  const mistLayer3Ref = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  // Particle animation loop
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles((prevParticles) => {
        return prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            life: particle.life - 0.02,
          }))
          .filter((particle) => particle.life > 0)
          .map((particle) => {
            // Draw particle
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.life * 0.6})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            return particle;
          });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Synchronized mist animation with video and particles
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      // Trigger mist and particles at 11 seconds, lasting until ~13.5 seconds
      if (currentTime >= 11 && currentTime < 13.5) {
        const mistProgress = (currentTime - 11) / 2.5;

        if (mistProgress < 0.05 && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        if (mistProgress < 0.8) {
          const particleCount = Math.floor(Math.random() * 8 + 4);
          const canvas = particleCanvasRef.current;
          if (canvas) {
            for (let i = 0; i < particleCount; i++) {
              const angle = (Math.random() * Math.PI * 2);
              const speed = Math.random() * 3 + 1;
              setParticles((prev) => [
                ...prev,
                {
                  id: particleIdRef.current++,
                  x: canvas.width / 2,
                  y: canvas.height / 2,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed - 2,
                  life: 1,
                  size: Math.random() * 3 + 1,
                },
              ]);
            }
          }
        }

        if (mistLayer1Ref.current) {
          const opacity1 = Math.sin(mistProgress * Math.PI) * 0.8;
          const scale1 = 1 + mistProgress * 0.8;
          const blur1 = 4 + mistProgress * 12;
          mistLayer1Ref.current.style.opacity = `${opacity1}`;
          mistLayer1Ref.current.style.transform = `scale(${scale1})`;
          mistLayer1Ref.current.style.filter = `blur(${blur1}px)`;
        }

        if (mistLayer2Ref.current) {
          const delayedProgress = Math.max(0, mistProgress - 0.2);
          const opacity2 = Math.sin(delayedProgress * Math.PI) * 0.6;
          const scale2 = 1 + delayedProgress * 1.2;
          const blur2 = 8 + delayedProgress * 16;
          mistLayer2Ref.current.style.opacity = `${opacity2}`;
          mistLayer2Ref.current.style.transform = `scale(${scale2})`;
          mistLayer2Ref.current.style.filter = `blur(${blur2}px)`;
        }

        if (mistLayer3Ref.current) {
          const delayedProgress3 = Math.max(0, mistProgress - 0.4);
          const opacity3 = Math.sin(delayedProgress3 * Math.PI) * 0.5;
          const scale3 = 1 + delayedProgress3 * 1.5;
          const blur3 = 12 + delayedProgress3 * 20;
          mistLayer3Ref.current.style.opacity = `${opacity3}`;
          mistLayer3Ref.current.style.transform = `scale(${scale3})`;
          mistLayer3Ref.current.style.filter = `blur(${blur3}px)`;
        }
      } else if (currentTime >= 13.5) {
        if (mistLayer1Ref.current) mistLayer1Ref.current.style.opacity = '0';
        if (mistLayer2Ref.current) mistLayer2Ref.current.style.opacity = '0';
        if (mistLayer3Ref.current) mistLayer3Ref.current.style.opacity = '0';
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage="/" />
      
      <audio ref={audioRef} preload="auto">
        <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/powder-sound_298db3c0.wav" type="audio/wav" />
      </audio>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            title="Creed Lifestyle - Premium Grooming Brand Cinematic Video"
          >
            <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/lv_0_20260327145918_bb54f8c9.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <canvas
          ref={particleCanvasRef}
          className="absolute inset-0 pointer-events-none z-20"
          width={typeof window !== 'undefined' ? window.innerWidth : 1024}
          height={typeof window !== 'undefined' ? window.innerHeight : 768}
        ></canvas>

        <div
          ref={mistLayer1Ref}
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
            opacity: 0,
            transform: 'scale(1)',
            filter: 'blur(4px)',
            transition: 'none',
          }}
        ></div>

        <div
          ref={mistLayer2Ref}
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%)',
            opacity: 0,
            transform: 'scale(1)',
            filter: 'blur(8px)',
            transition: 'none',
          }}
        ></div>

        <div
          ref={mistLayer3Ref}
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)',
            opacity: 0,
            transform: 'scale(1)',
            filter: 'blur(12px)',
            transition: 'none',
          }}
        ></div>

        <div className="relative z-10 container flex flex-col items-center justify-center text-center space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Elevate Your
              <span className="block text-red-600">
                Self-Care
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed uppercase tracking-wide">
              Professional-level grooming for the modern man
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/products">
              <a className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95">
                Explore Now
              </a>
            </Link>
            <Link href="/about">
              <a className="inline-flex items-center justify-center border border-red-600 text-red-600 hover:bg-red-600/10 font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95">
                Learn More
              </a>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-5 h-5 text-red-600" />
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-32 bg-black border-y border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Premium Quality <span className="text-red-600">Grooming</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                At Creed Lifestyle Nepal, we believe grooming is more than just a routine—it's an investment in yourself. Our products are designed for the modern man who values quality and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-red-600/30 py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/">
                <a className="flex items-center gap-3">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/creed-logo_d41f092c.jpg"
                    alt="Creed Lifestyle Nepal Footer Logo with Matte Finish"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-bold text-lg tracking-widest uppercase">Creed</span>
                </a>
              </Link>
              <p className="text-xs text-gray-500 uppercase tracking-widest">© 2026 Creed Lifestyle Nepal</p>
            </div>
            
            <div className="flex gap-8">
              <Link href="/"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Home</a></Link>
              <Link href="/products"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Products</a></Link>
              <Link href="/contact"><a className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Contact</a></Link>
            </div>

            <div className="flex gap-6">
              <a href="https://www.instagram.com/creedlifestyle.np/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@creed.lifestyle" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
