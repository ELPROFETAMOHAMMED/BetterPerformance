"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  quantity?: number;
}

export function Particles({
  className,
  quantity = 100,
  ...props
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    contextRef.current = ctx;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      alpha: number;
      da: number;
    }> = [];

    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.4,
        da: Math.random() * 0.02 - 0.01,
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.alpha += particle.da;

        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;
        if (particle.alpha <= 0.3 || particle.alpha >= 0.8) {
          particle.da = -particle.da;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(158, 69%, 53%, ${particle.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [quantity]);

  return (
    <div className={cn("fixed inset-0 -z-10", className)} {...props}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
