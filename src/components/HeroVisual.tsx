"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HeroVisual() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure component mounts properly with loading state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position for 3D tilt effect
  const rotateX = useTransform(smoothMouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-8, 8]);

  // Parallax transforms for layered elements
  const layer1X = useTransform(smoothMouseX, [-300, 300], [-15, 15]);
  const layer1Y = useTransform(smoothMouseY, [-300, 300], [-15, 15]);
  const layer2X = useTransform(smoothMouseX, [-300, 300], [-25, 25]);
  const layer2Y = useTransform(smoothMouseY, [-300, 300], [-25, 25]);
  const layer3X = useTransform(smoothMouseX, [-300, 300], [-40, 40]);
  const layer3Y = useTransform(smoothMouseY, [-300, 300], [-40, 40]);

  // Add ripple effect on click
  const addRipple = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples(prev => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id));
      }, 1000);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    repeatType: "reverse" as const,
  };

  const orbAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
  };

  const orbTransition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut" as const,
    repeatType: "reverse" as const,
  };

  // Enhanced hover animation for cards
  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.12,
      y: -12,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  // Icon hover animation
  const iconHoverVariants = {
    rest: { rotate: 0, scale: 1 },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      scale: 1.2,
      transition: {
        rotate: { duration: 0.5, ease: "easeInOut" as const },
        scale: { duration: 0.2 },
      },
    },
  };

  // Show loading skeleton until mounted
  if (!isMounted) {
    return (
      <div
        className="relative h-[300px] sm:h-[350px] md:h-[500px] flex items-center justify-center"
        aria-label="Loading hero visual"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      id="hero-visual"
      className="relative h-[300px] sm:h-[350px] md:h-[500px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={addRipple}
      style={{
        perspective: 1200,
      }}
      role="img"
      aria-label="Interactive hero visual showcasing Essential Block's marketing and gifting services"
    >
      {/* Click ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full bg-primary/20 pointer-events-none"
            initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y, opacity: 1 }}
            animate={{ width: 300, height: 300, x: ripple.x - 150, y: ripple.y - 150, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Animated background orbs with parallax */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/20 blur-xl"
        animate={orbAnimation}
        transition={orbTransition}
        style={{ x: layer1X, y: layer1Y }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/30 to-primary/20 blur-xl"
        animate={orbAnimation}
        transition={{ ...orbTransition, delay: 2 }}
        style={{ x: layer1X, y: layer1Y }}
      />

      {/* Hover spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
        animate={{
          background: isHovered
            ? `radial-gradient(600px circle at ${smoothMouseX.get() + 250}px ${smoothMouseY.get() + 250}px, rgba(147, 112, 219, 0.15), transparent 40%)`
            : "transparent",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main container with 3D perspective */}
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      >
        {/* Background gradient card */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/50 to-secondary/20 rounded-2xl"
          variants={itemVariants}
          animate={{
            rotate: [6, 4, 6],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(-20px)",
            x: layer1X,
            y: layer1Y,
          }}
        />

        {/* Central graphic area */}
        <motion.div
          className="absolute inset-8 sm:inset-10 md:inset-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
          }}
          style={{ transformStyle: "preserve-3d", transform: "translateZ(0px)" }}
        >
          {/* Animated grid pattern with hover glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: isHovered ? 0.15 : 0.08,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--primary) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </motion.div>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isHovered
                ? "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)"
                : "transparent",
              backgroundPosition: isHovered ? "200% 0" : "-200% 0",
            }}
            transition={{
              backgroundPosition: { duration: 1.5, ease: "easeInOut" },
            }}
            style={{ backgroundSize: "200% 100%" }}
          />

          {/* Central icon composition */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              animate={floatingAnimation}
              transition={floatingTransition}
            >
              {/* Marketing icon - Enhanced hover */}
              <motion.button
                type="button"
                aria-label="Marketing Solutions - View our strategic marketing services"
                className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 md:-top-16 md:-left-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-dark rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setActiveCard("marketing")}
                onHoverEnd={() => setActiveCard(null)}
                onFocus={() => setActiveCard("marketing")}
                onBlur={() => setActiveCard(null)}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(40px)",
                  x: layer2X,
                  y: layer2Y,
                }}
              >
                {/* Inner glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === "marketing" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  variants={iconHoverVariants}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </motion.svg>
                {/* Tooltip */}
                <AnimatePresence>
                  {activeCard === "marketing" && (
                    <motion.div
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      role="tooltip"
                    >
                      Marketing Solutions
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Gift icon - Enhanced hover */}
              <motion.button
                type="button"
                aria-label="Corporate Gifts - Explore our premium gifting solutions"
                className="absolute -bottom-6 -right-8 sm:-bottom-10 sm:-right-12 md:-bottom-12 md:-right-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setActiveCard("gift")}
                onHoverEnd={() => setActiveCard(null)}
                onFocus={() => setActiveCard("gift")}
                onBlur={() => setActiveCard(null)}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(40px)",
                  x: layer2X,
                  y: layer2Y,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === "gift" ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  variants={iconHoverVariants}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                </motion.svg>
                {/* Tooltip */}
                <AnimatePresence>
                  {activeCard === "gift" && (
                    <motion.div
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -5, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      role="tooltip"
                    >
                      Corporate Gifts
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Center logo/brand element - Enhanced */}
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden cursor-pointer"
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(60px)",
                  x: layer3X,
                  y: layer3Y,
                }}
                aria-label="Essential Block logo"
              >
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 border-4 border-white/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute inset-2 border-2 border-white/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                />
                {/* Pulse ring on hover */}
                <motion.div
                  className="absolute inset-0 border-4 border-primary/50 rounded-full"
                  animate={isHovered ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  aria-hidden="true"
                />
                <span className="text-white font-bold text-base sm:text-xl md:text-2xl z-10">EB</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating stats cards - Growth */}
        <motion.div
          className="absolute -top-2 right-4 sm:-top-4 sm:right-8 bg-white rounded-xl p-3 sm:p-4 cursor-pointer overflow-hidden shadow-lg hidden sm:block"
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setActiveCard("growth")}
          onHoverEnd={() => setActiveCard(null)}
          animate={{ y: [-5, 5, -5] }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(80px)",
            x: layer3X,
            y: layer3Y,
          }}
          aria-label="Growth statistic: +247%"
        >
          {/* Gradient border effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: activeCard === "growth"
                ? "linear-gradient(135deg, rgba(34, 197, 94, 0.2), transparent)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
          <div className="flex items-center gap-2 sm:gap-3 relative z-10">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center"
              animate={activeCard === "growth" ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: activeCard === "growth" ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </motion.svg>
            </motion.div>
            <div>
              <p className="text-xs text-gray-500">Growth</p>
              <motion.p
                className="font-bold text-gray-900 text-sm sm:text-base"
                animate={activeCard === "growth" ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                +247%
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Floating stats cards - Clients */}
        <motion.div
          className="absolute bottom-4 -left-2 sm:bottom-8 sm:-left-4 bg-white rounded-xl p-3 sm:p-4 cursor-pointer overflow-hidden shadow-lg hidden sm:block"
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setActiveCard("clients")}
          onHoverEnd={() => setActiveCard(null)}
          animate={{ y: [5, -5, 5] }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(70px)",
            x: layer2X,
            y: layer2Y,
          }}
          aria-label="Happy Clients: 500+"
        >
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{
              background: activeCard === "clients"
                ? "linear-gradient(135deg, rgba(147, 112, 219, 0.2), transparent)"
                : "transparent",
            }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
          <div className="flex items-center gap-2 sm:gap-3 relative z-10">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center"
              animate={activeCard === "clients" ? { rotate: [0, 360] } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                variants={iconHoverVariants}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </motion.svg>
            </motion.div>
            <div>
              <p className="text-xs text-gray-500">Happy Clients</p>
              <motion.p
                className="font-bold text-gray-900 text-sm sm:text-base"
                animate={activeCard === "clients" ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                500+
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Checkmark badge - Enhanced */}
        <motion.div
          className="absolute -bottom-2 right-2 sm:-bottom-4 sm:right-4 bg-white rounded-full shadow-xl p-3 sm:p-4 cursor-pointer overflow-hidden hidden sm:block"
          variants={cardHoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setActiveCard("check")}
          onHoverEnd={() => setActiveCard(null)}
          animate={{ y: [-3, 3, -3] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(90px)",
            x: layer3X,
            y: layer3Y,
          }}
          aria-label="Quality verified"
        >
          {/* Success pulse effect */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full"
            animate={activeCard === "check" ? {
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            aria-hidden="true"
          />
          <motion.svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-primary relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={activeCard === "check" ? {
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            } : {}}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </motion.svg>
        </motion.div>

        {/* Animated particles with enhanced interaction - Reduced count for performance */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-primary/40' : 'bg-secondary/40'}`}
            style={{
              width: 4 + (i % 3) * 4,
              height: 4 + (i % 3) * 4,
              top: `${15 + (i * 12)}%`,
              left: `${8 + (i * 12)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: isHovered ? [1, 2, 1] : [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? "0 0 80px rgba(147, 112, 219, 0.4), 0 0 160px rgba(244, 162, 97, 0.25), inset 0 0 60px rgba(147, 112, 219, 0.1)"
            : "0 0 0 rgba(147, 112, 219, 0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Corner accent decorations */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-4 right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
        <div className="absolute top-4 right-4 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-4 left-4 w-8 h-0.5 bg-gradient-to-l from-secondary to-transparent rounded-full" />
        <div className="absolute bottom-4 left-4 w-0.5 h-8 bg-gradient-to-t from-secondary to-transparent rounded-full" />
      </motion.div>
    </motion.div>
  );
}
