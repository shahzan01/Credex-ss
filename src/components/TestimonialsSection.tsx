"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/animations";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechFlow Inc.",
      text: "SoftSell made it incredibly easy to recoup value from our unused software licenses. The process was smooth, and their team was professional throughout. We received even more than we expected. And the money was in my bank account in less than a week!",
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "DataSphere Solutions",
      text: "As we transitioned to cloud services, we had numerous unused licenses. SoftSell helped us convert these into substantial capital that we reinvested in our business. Their valuation was fair and payment was prompt.",
    },
  ];

  return (
    <section id="testimonials" className="section bg-[var(--muted)]">
      <div className="container">
        <ScrollAnimationWrapper animation={textVariant(0.1)}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied clients have to say.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation={fadeIn(
                index % 2 === 0 ? "left" : "right",
                0.2 + index * 0.1
              )}
            >
              <motion.div
                className="bg-[var(--card)] p-8 rounded-lg shadow-sm relative"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
              >
                <motion.svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-4 right-4 opacity-20"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  <path
                    d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z"
                    fill="var(--primary)"
                  />
                </motion.svg>
                <p className="mb-6 text-[var(--foreground)]">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-2">
                  <ScrollAnimationWrapper
                    animation={zoomIn(0.4 + index * 0.1, 0.5)}
                  >
                    <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </ScrollAnimationWrapper>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
