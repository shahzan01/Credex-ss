"use client";

import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";
import { fadeIn, textVariant } from "../utils/animations";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkHoverVariants = {
    hover: {
      color: "var(--primary)",
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Our Team", url: "#" },
        { name: "Careers", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Support", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--muted)] py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ScrollAnimationWrapper animation={fadeIn("right", 0.2)}>
            <div className="mb-6 md:mb-0">
              <motion.h3
                className="text-2xl font-bold text-[var(--primary)]"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255, 126, 51, 0.5)",
                }}
              >
                SoftSell
              </motion.h3>
              <p className="text-[var(--muted-foreground)] mt-2">
                Maximizing value from unused software licenses.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="flex flex-wrap gap-8 justify-center">
            {footerSections.map((section, sectionIndex) => (
              <ScrollAnimationWrapper
                key={section.title}
                animation={fadeIn("left", 0.2 + sectionIndex * 0.1)}
              >
                <div>
                  <motion.h4
                    className="font-bold mb-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + sectionIndex * 0.1 }}
                  >
                    {section.title}
                  </motion.h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05,
                        }}
                      >
                        <motion.a
                          href={link.url}
                          className="text-[var(--muted-foreground)]"
                          variants={linkHoverVariants}
                          whileHover="hover"
                          onClick={(e) =>
                            link.url.startsWith("#") &&
                            handleSmoothScroll(e, 80)
                          }
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <ScrollAnimationWrapper animation={textVariant(0.5)}>
          <div className="border-t border-[var(--border)] mt-8 pt-8 text-center">
            <motion.p
              className="text-[var(--muted-foreground)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              &copy; {currentYear} SoftSell. All rights reserved.
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-[var(--muted-foreground)]">
                Made by Shahzan
              </span>
              <motion.a
                href="https://www.linkedin.com/in/mohd-shahzan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/shahzan01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </footer>
  );
}
