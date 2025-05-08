"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  formFieldAnimation,
  formShineEffect,
  heroButtonAnimation,
} from "../utils/animations";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const controls = useAnimation();
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Windows Server",
    "SQL Server",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send the form data to a server
      console.log("Form data:", formData);
      setIsSubmitted(true);
      document.getElementById("getStarted")?.click();
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  const formContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="section relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 bg-[var(--primary-transparent)] rounded-full filter blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--primary-transparent)] rounded-full filter blur-3xl opacity-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-[var(--muted-foreground)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to turn your unused software licenses into cash? Fill out the
            form below and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          ref={formRef}
          initial="hidden"
          animate={controls}
          variants={formContainer}
        >
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: "auto",
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.3, delay: 0.1 },
                  },
                }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md relative mb-6 overflow-hidden"
                role="alert"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: 3,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="flex items-center"
                >
                  <motion.svg
                    className="w-6 h-6 mr-2 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      damping: 10,
                      delay: 0.2,
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                  <div>
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline">
                      {" "}
                      Your message has been sent. We&apos;ll get back to you
                      soon.
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-[var(--card)] p-8 rounded-lg shadow-lg relative overflow-hidden"
            variants={formContainer}
          >
            {/* Decorative shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              variants={formShineEffect}
              initial="hidden"
              animate="visible"
            />

            <motion.div className="mb-6" variants={formFieldAnimation(0)}>
              <label
                htmlFor="name"
                className="block text-[var(--foreground)] mb-2 font-medium"
              >
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                placeholder="Your name"
                whileFocus="focus"
                variants={formFieldAnimation()}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="mb-6" variants={formFieldAnimation(0.1)}>
              <label
                htmlFor="email"
                className="block text-[var(--foreground)] mb-2 font-medium"
              >
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="your.email@company.com"
                whileFocus="focus"
                variants={formFieldAnimation()}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="mb-6" variants={formFieldAnimation(0.2)}>
              <label
                htmlFor="company"
                className="block text-[var(--foreground)] mb-2 font-medium"
              >
                Company
              </label>
              <motion.input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="input"
                placeholder="Your company name"
                whileFocus="focus"
                variants={formFieldAnimation()}
              />
              <AnimatePresence>
                {errors.company && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.company}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="mb-6" variants={formFieldAnimation(0.3)}>
              <label
                htmlFor="licenseType"
                className="block text-[var(--foreground)] mb-2 font-medium"
              >
                License Type
              </label>
              <motion.select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="input"
                whileFocus="focus"
                variants={formFieldAnimation()}
              >
                <option value="">Select license type</option>
                {licenseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </motion.select>
              <AnimatePresence>
                {errors.licenseType && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {errors.licenseType}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="mb-6" variants={formFieldAnimation(0.4)}>
              <label
                htmlFor="message"
                className="block text-[var(--foreground)] mb-2 font-medium"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input h-32 resize-none"
                placeholder="Tell us more about your licenses"
                whileFocus="focus"
                variants={formFieldAnimation()}
              ></motion.textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full relative overflow-hidden"
              variants={heroButtonAnimation}
              custom={0}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Send Message</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)]"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                style={{ opacity: 0.5 }}
              />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
