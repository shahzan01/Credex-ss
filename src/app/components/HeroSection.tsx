"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { heroButtonAnimation } from "../utils/animations";
import { handleSmoothScroll } from "../utils/smoothScroll";
import HeroAnimationBox from "./HeroAnimationBox";

type BlobProps = {
  width: number;
  height: number;
  left: number;
  top: number;
  xAnim: number;
  yAnim: number;
  duration: number;
};

export default function HeroSection() {
  const controls = useAnimation();
  const [loaded, setLoaded] = useState(false);
  const [blobs, setBlobs] = useState<BlobProps[]>([]);

  useEffect(() => {
    // Start animation sequence
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      setLoaded(true);
    };

    sequence();
  }, [controls]);

  useEffect(() => {
    const createBlobs = () => {
      const newBlobs = Array.from({ length: 10 }, () => ({
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xAnim: Math.random() * 2 - 1,
        yAnim: Math.random() * 2 - 1,
        duration: Math.random() * 10 + 5,
      }));
      setBlobs(newBlobs);
    };
    createBlobs();
  }, []);

  return (
    <motion.section
      className="min-h-screen overflow-hidden relative flex items-center "
      id="/"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      >
        {/* Large circle */}
        <motion.div
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--primary-transparent)] to-transparent opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute bg-[var(--primary-transparent)] rounded-full opacity-20"
            style={{
              width: `${blob.width}px`,
              height: `${blob.height}px`,
              left: `${blob.left}%`,
              top: `${blob.top}%`,
            }}
            animate={{
              x: [0, blob.xAnim * 100, 0],
              y: [0, blob.yAnim * 100, 0],
            }}
            transition={{
              duration: blob.duration,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 bg-[size:50px_50px] opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          }}
        />

        {/* Moving gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--primary-transparent)] opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="mb-6"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 leading-tight bg-clip-text text-transparent relative"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--foreground) 0%, var(--primary) 50%, var(--foreground) 100%)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: loaded
                  ? ["0% center", "200% center"]
                  : "0% center",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 7,
              }}
            >
              Maximize Value
              <br />
              <span className="relative inline-block">
                <motion.span
                  className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 leading-tight bg-clip-text text-transparent relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--primary) 0%, var(--foreground) 50%, var(--primary) 100%)",
                    backgroundSize: "200% auto",
                  }}
                  animate={{
                    backgroundPosition: loaded
                      ? ["0% center", "200% center"]
                      : "0% center",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 7,
                  }}
                >
                  from Unused
                </motion.span>
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-3 bg-[var(--primary-transparent)] opacity-40 z-0 rounded-sm"
                  initial={{ width: 0 }}
                  animate={{ width: loaded ? "100%" : 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <br />
              Software Licenses
            </motion.h1>

            <motion.div
              className="h-1 w-24 bg-[var(--primary)] mx-auto md:mx-0 mt-6 mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: loaded ? "6rem" : 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-[var(--muted-foreground)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Turn your inactive licenses into cash.
            <span className="relative inline-block">
              <span className="relative z-10 ml-1">
                Simple, secure, and swift transactions.
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--primary)] z-0"
                initial={{ width: 0 }}
                animate={{ width: loaded ? "100%" : 0 }}
                transition={{ duration: 0.6, delay: 2 }}
              />
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary relative overflow-hidden group"
              custom={0}
              variants={heroButtonAnimation}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => handleSmoothScroll(e, 80)}
            >
              <span className="relative z-10">Sell My Licenses</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)]"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{ opacity: 0.5 }}
              />
              {/* Adding cool 3D effect on hover */}
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                }}
                whileHover={{
                  clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
                }}
              />
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="btn btn-secondary relative overflow-hidden group"
              custom={1}
              variants={heroButtonAnimation}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) => handleSmoothScroll(e, 80)}
            >
              <span className="relative z-10">Learn How It Works</span>
              {/* Arrow animation */}
              <motion.span
                className="ml-1 inline-block relative z-10 group-hover:translate-x-1 transition-transform"
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Animation Box Component */}
        <HeroAnimationBox loaded={loaded} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[10vh] left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: loaded ? [0, 1, 0] : 0,
          y: loaded ? [-10, 0, -10] : -10,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 3,
        }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-[var(--muted-foreground)] rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-[var(--muted-foreground)] rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
