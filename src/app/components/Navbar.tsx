"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Get Started", href: "#contact", isButton: true, id: "getStarted" },
  ];

  return (
    <motion.header
      className="py-4 border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-2xl font-bold text-[var(--primary)]">
            <motion.a
              href="#/"
              className="cursor-pointer"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgba(255, 126, 51, 0.5)",
              }}
              onClick={(e) => handleSmoothScroll(e, 80)}
            >
              SoftSell
            </motion.a>
          </div>
        </motion.div>

        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </motion.button>
        </div>

        <div className="hidden md:block">
          <motion.ul
            className="flex flex-row gap-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item.isButton ? (
                  <motion.a
                    href={item.href}
                    id={item.id || ""}
                    className="btn btn-primary"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 10px rgba(255, 126, 51, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleSmoothScroll(e, 80)}
                  >
                    {item.name}
                  </motion.a>
                ) : (
                  <motion.a
                    href={item.href}
                    className="hover:text-[var(--primary)]"
                    whileHover={{
                      color: "var(--primary)",
                      scale: 1.05,
                    }}
                    onClick={(e) => handleSmoothScroll(e, 80)}
                  >
                    {item.name}
                  </motion.a>
                )}
              </motion.li>
            ))}
            <motion.li
              custom={navItems.length}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <ThemeToggle />
            </motion.li>
          </motion.ul>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="block absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] p-4 md:hidden"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.ul className="flex flex-col gap-6 items-center">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    variants={navItemVariants}
                    custom={i}
                  >
                    {item.isButton ? (
                      <motion.a
                        href={item.href}
                        className="btn btn-primary"
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          handleSmoothScroll(e, 80);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.a>
                    ) : (
                      <motion.a
                        href={item.href}
                        className="hover:text-[var(--primary)]"
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          handleSmoothScroll(e, 80);
                        }}
                        whileHover={{ color: "var(--primary)" }}
                      >
                        {item.name}
                      </motion.a>
                    )}
                  </motion.li>
                ))}
                <motion.li variants={navItemVariants} custom={navItems.length}>
                  <ThemeToggle />
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
