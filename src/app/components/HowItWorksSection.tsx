"use client";

import { motion } from "framer-motion";
import {
  fadeIn,
  cardHoverVariants,
  textVariant,
  staggerContainer,
} from "../utils/animations";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Upload License",
      description:
        "Simply upload details of your unused software licenses to our secure platform.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
    {
      title: "Get Valuation",
      description:
        "Our experts assess the market value of your licenses for the best price.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
    {
      title: "Get Paid",
      description:
        "Receive payment through your preferred method, typically within 48 hours.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.06 9.54H15.94C15.84 8.28 15.03 7.11 13.3 6.73V5H10.75V6.69C9.21 7.04 7.97 8.04 7.97 9.5C7.97 11.29 9.4 12.19 11.65 12.71C13.65 13.17 14.08 13.86 14.08 14.58C14.08 15.11 13.72 15.97 12.07 15.97C10.53 15.97 9.82 15.25 9.67 14.45H7.8C7.97 16.01 9.24 16.98 10.75 17.31V19H13.3V17.34C14.84 17.03 16.08 16.11 16.08 14.58C16.08 12.42 14.08 11.59 12.31 11.14Z"
            fill="#FF7E33"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section bg-[var(--muted)]">
      <div className="container">
        <ScrollAnimationWrapper animation={textVariant(0.1)}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              We've simplified the process of selling your unused software
              licenses. Just three easy steps.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation={staggerContainer(0.1, 0.2)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimationWrapper
                key={index}
                animation={fadeIn("up", 0.1 * (index + 1))}
              >
                <motion.div
                  className="bg-[var(--card)] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
                  whileHover="hover"
                  variants={cardHoverVariants}
                >
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3 + index * 0.1,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[var(--muted-foreground)]">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
