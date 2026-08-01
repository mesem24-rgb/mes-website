"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ExperienceMode } from "@/types";

type LivingBackgroundProps = {
  mode: ExperienceMode;
};

type Point = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

type PointerPosition = {
  x: number;
  y: number;
  active: boolean;
};

const DESKTOP_POINT_COUNT = 48;
const TABLET_POINT_COUNT = 34;
const MOBILE_POINT_COUNT = 22;

const CONNECTION_DISTANCE = 150;
const POINTER_DISTANCE = 190;

function getPointCount(width: number) {
  if (width < 640) {
    return MOBILE_POINT_COUNT;
  }

  if (width < 1024) {
    return TABLET_POINT_COUNT;
  }

  return DESKTOP_POINT_COUNT;
}

function createPoints(
  count: number,
  width: number,
  height: number,
): Point[] {
  return Array.from({ length: count }, (_, index) => {
    const x = Math.random() * width;
    const y = Math.random() * height;

    return {
      x,
      y,
      targetX: x,
      targetY: y,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      radius: Math.random() * 1.2 + 0.7,
      phase: index * 0.45 + Math.random() * Math.PI,
    };
  });
}

function setIdleTargets(
  points: Point[],
  width: number,
  height: number,
) {
  for (const point of points) {
    point.targetX = Math.random() * width;
    point.targetY = Math.random() * height;
  }
}

function setBuildTargets(
  points: Point[],
  width: number,
  height: number,
) {
  const columns = Math.ceil(Math.sqrt(points.length));
  const rows = Math.ceil(points.length / columns);

  const gridWidth = Math.min(width * 0.68, 850);
  const gridHeight = Math.min(height * 0.62, 600);

  const startX = width / 2 - gridWidth / 2;
  const startY = height / 2 - gridHeight / 2;

  points.forEach((point, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);

    point.targetX =
      startX +
      (column / Math.max(columns - 1, 1)) * gridWidth;

    point.targetY =
      startY +
      (row / Math.max(rows - 1, 1)) * gridHeight;
  });
}

function setImproveTargets(
  points: Point[],
  width: number,
  height: number,
) {
  const horizontalPadding = width * 0.08;
  const usableWidth = width - horizontalPadding * 2;

  points.forEach((point, index) => {
    const progress = index / Math.max(points.length - 1, 1);
    const x = horizontalPadding + progress * usableWidth;
    const wave = Math.sin(progress * Math.PI * 4);

    point.targetX = x;
    point.targetY = height / 2 + wave * Math.min(height * 0.22, 180);
  });
}

function setTransformTargets(
  points: Point[],
  width: number,
  height: number,
) {
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) * 0.34;

  points.forEach((point, index) => {
    const progress = index / points.length;
    const ring = index % 3;
    const radius = maxRadius * (0.45 + ring * 0.25);
    const angle = progress * Math.PI * 2 * 2.5;

    point.targetX = centerX + Math.cos(angle) * radius;
    point.targetY = centerY + Math.sin(angle) * radius;
  });
}

function setTargets(
  mode: ExperienceMode,
  points: Point[],
  width: number,
  height: number,
) {
  if (mode === "build") {
    setBuildTargets(points, width, height);
    return;
  }

  if (mode === "improve") {
    setImproveTargets(points, width, height);
    return;
  }

  if (mode === "clarify") {
  setTransformTargets(points, width, height);
  return;
}

  setIdleTargets(points, width, height);
}

export function LivingBackground({
  mode,
}: LivingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let elapsed = 0;

    let points = createPoints(
      getPointCount(width),
      width,
      height,
    );

    const pointer: PointerPosition = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      points = createPoints(
        getPointCount(width),
        width,
        height,
      );

      setTargets(mode, points, width, height);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const updatePoints = () => {
      elapsed += 0.008;

      for (const point of points) {
        if (mode === "idle") {
          point.x += point.vx;
          point.y += point.vy;

          if (point.x < -20) {
            point.x = width + 20;
          }

          if (point.x > width + 20) {
            point.x = -20;
          }

          if (point.y < -20) {
            point.y = height + 20;
          }

          if (point.y > height + 20) {
            point.y = -20;
          }
        } else {
          let animatedTargetX = point.targetX;
          let animatedTargetY = point.targetY;

          if (mode === "improve") {
            animatedTargetY +=
              Math.sin(elapsed * 2 + point.phase) * 10;
          }

          if (mode === "clarify") {
            animatedTargetX +=
              Math.cos(elapsed + point.phase) * 6;

            animatedTargetY +=
              Math.sin(elapsed + point.phase) * 6;
          }

          point.x += (animatedTargetX - point.x) * 0.025;
          point.y += (animatedTargetY - point.y) * 0.025;
        }

        if (!pointer.active || shouldReduceMotion) {
          continue;
        }

        const dx = pointer.x - point.x;
        const dy = pointer.y - point.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0 && distance < POINTER_DISTANCE) {
          const influence =
            (POINTER_DISTANCE - distance) / POINTER_DISTANCE;

          point.x +=
            (dx / distance) * influence * 0.22;

          point.y +=
            (dy / distance) * influence * 0.22;
        }
      }
    };

    const drawPointerGlow = () => {
      if (!pointer.active || shouldReduceMotion) {
        return;
      }

      const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        240,
      );

      gradient.addColorStop(
        0,
        "rgba(52, 120, 246, 0.10)",
      );

      gradient.addColorStop(
        0.45,
        "rgba(52, 120, 246, 0.035)",
      );

      gradient.addColorStop(
        1,
        "rgba(52, 120, 246, 0)",
      );

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      for (
        let firstIndex = 0;
        firstIndex < points.length;
        firstIndex += 1
      ) {
        const firstPoint = points[firstIndex];

        for (
          let secondIndex = firstIndex + 1;
          secondIndex < points.length;
          secondIndex += 1
        ) {
          const secondPoint = points[secondIndex];

          const dx = firstPoint.x - secondPoint.x;
          const dy = firstPoint.y - secondPoint.y;
          const distance = Math.hypot(dx, dy);

          if (distance >= CONNECTION_DISTANCE) {
            continue;
          }

          const opacity =
            (1 - distance / CONNECTION_DISTANCE) *
            (mode === "idle" ? 0.11 : 0.17);

          context.beginPath();
          context.moveTo(firstPoint.x, firstPoint.y);
          context.lineTo(secondPoint.x, secondPoint.y);

          context.strokeStyle = `rgba(99, 160, 255, ${opacity})`;
          context.lineWidth = 0.7;
          context.stroke();
        }
      }
    };

    const drawPoints = () => {
      for (const point of points) {
        const glowRadius = point.radius * 4.5;

        const gradient = context.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          glowRadius,
        );

        gradient.addColorStop(
          0,
          "rgba(170, 210, 255, 0.8)",
        );

        gradient.addColorStop(
          0.3,
          "rgba(99, 160, 255, 0.38)",
        );

        gradient.addColorStop(
          1,
          "rgba(52, 120, 246, 0)",
        );

        context.beginPath();
        context.arc(
          point.x,
          point.y,
          glowRadius,
          0,
          Math.PI * 2,
        );

        context.fillStyle = gradient;
        context.fill();
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      drawPointerGlow();
      drawConnections();
      drawPoints();
    };

    const animate = () => {
      if (!shouldReduceMotion) {
        updatePoints();
      }

      draw();

      animationFrameId =
        window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    setTargets(mode, points, width, height);
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
    };
  }, [mode, shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute right-[-14rem] top-[-14rem] h-[42rem] w-[42rem] rounded-full bg-blue-500/[0.12] blur-[160px]" />

      <div className="absolute bottom-[-16rem] left-[-12rem] h-[38rem] w-[38rem] rounded-full bg-cyan-400/[0.05] blur-[160px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,11,18,0.02),rgba(7,11,18,0.55))]" />
    </div>
  );
}