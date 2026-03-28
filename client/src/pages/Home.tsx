import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Premium Minimalist with Red Accent
 * Landing Page - Hero Section + Bottom Navigation
 * Video background with powder mist animation
 * 
 * UX IMPROVEMENTS:
 * - Added compact bottom navigation bar for easy access to all pages
 * - Updated video URL to use new CDN link
 * - Updated logo to use new CDN link
 * - Improved navigation accessibility
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
  const [, navigate] = useLocation();

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
            vy: particle.vy + 0.05, // reduced gravity
            life: particle.life - 0.01, // longer life
          }))
          .filter((particle) => particle.life > 0)
          .map((particle) => {
            // Draw particle
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.life * 0.8})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Powder Outline Feature: Subtle glow around particles
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
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

      // Trigger mist and particles at 11 seconds, lasting until ~14.5 seconds
      if (currentTime >= 11 && currentTime < 14.5) {
        const mistProgress = (currentTime - 11) / 3.5; 

        // Play sound effect once
        if (mistProgress < 0.05 && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }

        // Generate particles (Comet Feature: Comet-like trails)
        if (mistProgress < 0.9) {
          const particleCount = Math.floor(Math.random() * 12 + 6);
          const canvas = particleCanvasRef.current;
          if (canvas) {
            for (let i = 0; i < particleCount; i++) {
              const angle = (Math.random() * Math.PI * 2);
              const speed = Math.random() * 5 + 2;
              setParticles((prev) => [
                ...prev,
                {
                  id: particleIdRef.current++,
                  x: canvas.width / 2,
                  y: canvas.height / 2,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed - 1,
                  life: 1.5,
                  size: Math.random() * 4 + 1,
                },
              ]);
            }
          }
        }

        // Layer 1: Fast spread from center
        if (mistLayer1Ref.current) {
          const opacity1 = Math.sin(mistProgress * Math.PI) * 0.9;
          const scale1 = 1 + mistProgress * 1.2;
          const blur1 = 2 + mistProgress * 15;
          mistLayer1Ref.current.style.opacity = `${opacity1}`;
          mistLayer1Ref.current.style.transform = `scale(${scale1})`;
          mistLayer1Ref.current.style.filter = `blur(${blur1}px)`;
          // Powder Outline Feature
          mistLayer1Ref.current.style.border = `${2 * mistProgress}px solid rgba(255,255,255,${opacity1 * 0.5})`;
          mistLayer1Ref.current.style.borderRadius = '50%';
        }

        // Layer 2: Medium spread with delay
        if (mistLayer2Ref.current) {
          const delayedProgress = Math.max(0, mistProgress - 0.15);
          const opacity2 = Math.sin(delayedProgress * Math.PI) * 0.7;
          const scale2 = 1 + delayedProgress * 1.5;
          const blur2 = 5 + delayedProgress * 20;
          mistLayer2Ref.current.style.opacity = `${opacity2}`;
          mistLayer2Ref.current.style.transform = `scale(${scale2})`;
          mistLayer2Ref.current.style.filter = `blur(${blur2}px)`;
        }

        // Layer 3: Slow spread with more delay
        if (mistLayer3Ref.current) {
          const delayedProgress3 = Math.max(0, mistProgress - 0.3);
          const opacity3 = Math.sin(delayedProgress3 * Math.PI) * 0.6;
          const scale3 = 1 + delayedProgress3 * 2.0;
          const blur3 = 10 + delayedProgress3 * 25;
          mistLayer3Ref.current.style.opacity = `${opacity3}`;
          mistLayer3Ref.current.style.transform = `scale(${scale3})`;
          mistLayer3Ref.current.style.filter = `blur(${blur3}px)`;
        }
      } else if (currentTime >= 14.5 || currentTime < 11) {
        // Reset all layers
        [mistLayer1Ref, mistLayer2Ref, mistLayer3Ref].forEach(ref => {
          if (ref.current) {
            ref.current.style.opacity = '0';
            ref.current.style.transform = 'scale(1)';
            ref.current.style.filter = 'blur(4px)';
            ref.current.style.border = 'none';
          }
        });
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hidden audio element for powder sound */}
      <audio ref={audioRef} preload="auto">
        <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483036246/nSUGdm8zsWGqqygCSQYgcC/powder-sound_298db3c0.wav" type="audio/wav" />
      </audio>

      {/* Navbar */}
      <Navbar currentPage="/" />

      {/* Hero Section - Video Background */}
      <section className="powder-container relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://d2xsxph8kpxj0f.cloudfront.net/310519663483354275/bXM8D6oMMGwALEvguBMTpw/lv_0_20260327145918_bb54f8c9.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Particle Canvas for realistic powder effect */}
        <canvas
          ref={particleCanvasRef}
          className="absolute inset-0 pointer-events-none z-20"
          width={typeof window !== 'undefined' ? window.innerWidth : 1024}
          height={typeof window !== 'undefined' ? window.innerHeight : 768}
        ></canvas>

        {/* Powder Mist Animation - Multiple layers for realistic effect */}
        {/* Layer 1: Fast spread */}
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

        {/* Layer 2: Medium spread with delay */}
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

        {/* Layer 3: Slow spread with more delay */}
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

        {/* Content Overlay */}
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95"
            >
              Explore Now
            </button>
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center justify-center border border-red-600 text-red-600 hover:bg-red-600/10 font-bold px-8 py-3 text-xs uppercase tracking-widest rounded-sm transition-colors duration-200 active:scale-95"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-5 h-5 text-red-600" />
          </div>
        </div>
      </section>

      {/* Brand Vision Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black border-y border-red-600/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">Our Mission</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed uppercase tracking-wide">
                We believe in the power of precision grooming. From scalp care to body exfoliation and precision trimming,
                every product is engineered for the man who refuses to compromise on quality.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12">
              {[
                { label: 'Scalp Care', value: 'Deep Cleanse' },
                { label: 'Body Care', value: 'Exfoliation' },
                { label: 'Precision', value: 'Trimming' },
              ].map((item) => (
                <div key={item.label} className="space-y-3 p-6 border border-red-600/30 hover:border-red-600 transition-colors duration-300">
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{item.label}</p>
                  <p className="text-lg font-bold text-red-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* Grainy Powder Animation CSS */
const powderAnimationStyle = `
  @keyframes powderGrain {
    0% {
      opacity: 0;
      box-shadow: inset 0 0 40px rgba(255, 255, 255, 0), 0 0 60px rgba(255, 255, 255, 0);
    }
    50% {
      opacity: 1;
      box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6);
    }
    100% {
      opacity: 0;
      box-shadow: inset 0 0 40px rgba(255, 255, 255, 0), 0 0 60px rgba(255, 255, 255, 0);
    }
  }
  
  .powder-container {
    position: relative;
  }
`;
