"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ParticleProps = {
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  xAnim: number;
  yAnim: number;
};
type FloatingElementProps = {
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  rotate: number;
  rotate1: number;
  rotate2: number;
  rotate3: number;
};
type OrbitElementProps = {
  x: number;
  y: number;
};

interface HeroAnimationBoxProps {
  loaded: boolean;
}

export default function HeroAnimationBox({ loaded }: HeroAnimationBoxProps) {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [floatingElements, setFloatingElements] = useState<
    FloatingElementProps[]
  >([]);
  const [orbitElements, setOrbitElements] = useState<OrbitElementProps[]>([]);

  useEffect(() => {
    const createOrbitElements = () => {
      const newOrbitElements = Array.from({ length: 3 }, (_, i) => ({
        x: Math.cos((i * (Math.PI * 2)) / 3) * 200 - 2,
        y: Math.sin((i * (Math.PI * 2)) / 3) * 200 - 2,
      }));
      setOrbitElements(newOrbitElements);
    };
    createOrbitElements();
  }, []);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: "var(--primary-light)",
        duration: Math.random() * 10 + 5,
        xAnim: Math.random() * 2 - 1,
        yAnim: Math.random() * 2 - 1,
      }));
      setParticles(newParticles);
    };
    createParticles();
  }, []);

  useEffect(() => {
    const createFloatingElements = () => {
      const newFloatingElements = Array.from({ length: 3 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 40 + 20,
        color: "var(--primary-light)",
        duration: Math.random() * 10 + 5,
        rotate: Math.random() * 20 - 10,
        rotate1: Math.random() * 10 - 5,
        rotate2: Math.random() * -10 + 5,
        rotate3: Math.random() * 10 - 5,
      }));
      setFloatingElements(newFloatingElements);
    };
    createFloatingElements();
  }, []);

  const floatingAnimation = {
    y: [0, -15, 0],
    filter: [
      "drop-shadow(0 0 8px rgba(255, 126, 51, 0.3))",
      "drop-shadow(0 0 16px rgba(255, 126, 51, 0.5))",
      "drop-shadow(0 0 8px rgba(255, 126, 51, 0.3))",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="flex-1 flex justify-center md:justify-end perspective-1000 md:h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* 3D rotating container */}
      <motion.div
        className="relative w-full max-w-lg md:h-full flex items-center justify-center"
        animate={{
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, -5, 0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main content */}
        <motion.div
          className="hero-image relative w-full max-w-lg h-80 md:h-[420px] bg-gradient-to-br from-[var(--primary-dark)] to-[var(--accent)] rounded-lg overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: 40,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 0.8,
            rotateY: loaded ? 0 : 40,
            filter: loaded ? "blur(0px)" : "blur(10px)",
            transition: {
              duration: 1.2,
              type: "spring",
              damping: 20,
            },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0px)",
          }}
        >
          {/* Shadow beneath */}
          <motion.div
            className="absolute -bottom-10 left-0 right-0 h-20 mx-auto rounded-full bg-black opacity-10 blur-xl"
            style={{ width: "90%" }}
            animate={{
              width: ["80%", "95%", "80%"],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            animate={floatingAnimation}
          >
            <svg
              width="160"
              height="160"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM15 13V17H9V10H12V13H15Z"
                fill="white"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: loaded ? 1 : 0,
                  opacity: loaded ? 1 : 0,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>

          {/* Rays of light emanating from center */}
          <motion.div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white opacity-30 origin-center"
                style={{
                  top: "50%",
                  left: "50%",
                  height: "3px",
                  width: "200px",
                  rotate: `${i * 45}deg`,
                  transformOrigin: "0 0",
                  filter: "blur(3px)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: loaded ? [0.5, 1, 0.5] : 0,
                  opacity: loaded ? [0, 0.3, 0] : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5 + i * 0.1,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>

          {/* Animated particle effects */}
          <motion.div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                }}
                animate={{
                  y: [null, particle.yAnim * 100],
                  x: [null, particle.xAnim * 100],
                }}
                transition={{
                  duration: particle.duration,
                }}
              />
            ))}
          </motion.div>

          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-opacity-30 rounded-lg"
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(255, 126, 51, 0)",
                "0px 0px 60px rgba(255, 126, 51, 0.6)",
                "0px 0px 0px rgba(255, 126, 51, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating elements */}
          {floatingElements.map((element, i) => (
            <motion.div
              key={`floating-${i}`}
              className="absolute rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg"
              style={{
                width: 40 + element.x * 60,
                height: 40 + element.y * 60,
                x: (i % 3) * 120 - 100,
                y: (i % 2) * 150 - 50,
                rotate: element.rotate,
                scale: 0,
              }}
              animate={{
                rotate: [element.rotate1, element.rotate2, element.rotate3],
                y: [
                  (i % 2) * 150 - 50,
                  (i % 2) * 150 - 50 - 20,
                  (i % 2) * 150 - 50,
                ],
                scale: loaded ? 1 : 0,
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2 + 1.8,
              }}
            />
          ))}
        </motion.div>

        {/* Orbit elements */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
        >
          {orbitElements.map((element, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[var(--primary)]"
              style={{
                x: element.x,
                y: element.y,
                opacity: 0,
              }}
              animate={{
                opacity: loaded ? [0, 0.8, 0] : 0,
                scale: loaded ? [0.8, 1.2, 0.8] : 0.8,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3 + 2,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
