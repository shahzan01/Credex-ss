"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/animations";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Best Market Rates",
      description:
        "We consistently offer the highest valuations in the market for your software licenses.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
    {
      title: "Secure Transactions",
      description:
        "We employ advanced encryption and verification processes to ensure your data stays safe.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
    {
      title: "Fast Processing",
      description:
        "Get valuations within 24 hours and payment within 48 hours of accepting our offer.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
    {
      title: "Expert Support",
      description:
        "Our team of software licensing experts is available to help you through the whole process.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11ZM12 8C13.41 8 14.56 9.09 14.92 10.5C15.02 10.96 15.5 11.25 15.96 11.14C16.43 11.04 16.71 10.56 16.61 10.09C16.07 7.97 14.22 6.5 12 6.5C9.79 6.5 7.93 7.97 7.39 10.09C7.29 10.56 7.58 11.04 8.04 11.14C8.5 11.25 8.98 10.96 9.08 10.5C9.44 9.09 10.59 8 12 8ZM12 18C10.55 18 9.21 17.48 8.24 16.62C7.92 16.34 7.88 15.84 8.15 15.51C8.43 15.17 8.93 15.14 9.26 15.42C9.99 16.05 10.95 16.5 12 16.5C13.05 16.5 14.01 16.05 14.74 15.42C15.07 15.14 15.57 15.17 15.85 15.51C16.13 15.85 16.09 16.34 15.76 16.62C14.79 17.48 13.45 18 12 18Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
  ];

  const getAnimationDelay = (index: number) => 0.2 * index;

  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <ScrollAnimationWrapper animation={textVariant(0.1)}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              SoftSell stands out from the competition for many reasons.
              Here&apos;s why thousands of businesses trust us.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation={fadeIn(
                index % 2 === 0 ? "left" : "right",
                getAnimationDelay(index)
              )}
            >
              <motion.div
                className="flex gap-4 items-start p-6 rounded-lg bg-[var(--card)] shadow-sm"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <motion.div
                  className="flex-shrink-0"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  {reason.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-[var(--muted-foreground)]">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
