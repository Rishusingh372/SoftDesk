
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Zap, Users } from "lucide-react";
import "../../assets/css/HeroSection.css";

const slides = [
  {
    icon: <Zap className="slide-icon" />,
    tagline: "Plan Better. Work Faster.",
    title: "Smart Task Management",
    highlight: "Without Chaos",
    description:
      "Create, assign, and prioritize tasks effortlessly. Keep everyone aligned with clear ownership and deadlines.",
    color: "#00BFA6"
  },
  {
    icon: <Users className="slide-icon" />,
    tagline: "One Team. One Workspace.",
    title: "Seamless Team",
    highlight: "Collaboration",
    description:
      "Admins and employees work together in one unified platform with real-time updates and transparency.",
    color: "#3B82F6"
  },
  {
    icon: <Sparkles className="slide-icon" />,
    tagline: "Stay On Track. Always.",
    title: "Track Progress",
    highlight: "In Real Time",
    description:
      "Monitor task status, deadlines, and productivity from a single, powerful dashboard.",
    color: "#8B5CF6"
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <main className="hero-section">
      <div className="hero-content">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="slide-content"
          >
            {/* Icon */}
            <motion.div
              className="slide-icon-wrapper"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {React.cloneElement(slides[current].icon, {
                style: { color: slides[current].color }
              })}
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="tagline"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {slides[current].tagline}
            </motion.p>

            {/* Main Heading */}
            <motion.h1 
              className="main-heading"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[current].title} <br />
              <span>{slides[current].highlight}</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="sub-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[current].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div 
          className="cta-group"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/admin-dashboard" className="cta-btn cta-primary">
            Get Started Free
            <ChevronRight />
          </Link>

          <Link to="/" className="cta-btn cta-secondary">
            View Live Demo
            <ChevronRight />
          </Link>
        </motion.div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button onClick={handlePrev} aria-label="Previous Slide">
            <ChevronLeft />
          </button>
          <button onClick={handleNext} aria-label="Next Slide">
            <ChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${current === index ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div 
          className="trust-banner"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="trust-content">
            <div className="trust-stats">
              <span>10,000+</span> Teams Trust Us • 
              <span> 99%</span> Satisfaction • 
              <span> 24/7</span> Support
            </div>
            <p className="trust-text">
              Built for modern teams that value clarity, speed, and accountability.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default HeroSection;