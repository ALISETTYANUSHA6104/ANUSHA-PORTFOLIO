import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const quotes = [
    "Work Smart, Not Hard",
    "Open to Work",
    "Innovation Over Everything",
    "Data-Driven Solutions",
    "AI-Powered Future",
    "Machine Learning Expert",
    "Turning Data into Insights",
    "Building Tomorrow Today",
  ];

  return (
    <div className="loader-container">
      {/* Animated Background Elements */}
      <div className="loader-background">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Sliding Quotes from Both Sides */}
        <div className="quotes-container">
          {quotes.map((quote, i) => (
            <motion.div
              key={`quote-${i}`}
              className="sliding-quote"
              style={{
                top: `${15 + i * 10}%`,
              }}
              initial={{ 
                x: i % 2 === 0 ? '-100%' : '100%',
                opacity: 0 
              }}
              animate={{ 
                x: i % 2 === 0 ? '100vw' : '-100%',
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear"
              }}
            >
              {quote}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        {/* Profile Picture with Multiple Borders */}
        <div className="loader-image-container">
          <motion.div
            className="loader-circle-outer"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="loader-circle-middle"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div
                className="loader-circle"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 60px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="loader-image-wrapper">
                  <motion.img 
                    src="/PROFILE.png" 
                    alt="Alisetty Anusha" 
                    className="loader-profile-image"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Text */}
        <motion.h2
          className="loader-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {['A', 'L', 'I', 'S', 'E', 'T', 'T', 'Y', ' ', 'A', 'N', 'U', 'S', 'H', 'A'].map((letter, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          AI/ML Engineer
        </motion.p>

        {/* Loading Bar */}
        <motion.div className="loading-bar-container">
          <motion.div
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          />
          <motion.div
            className="loading-bar-glow"
            animate={{
              left: ["-20%", "120%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio<motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >...</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
